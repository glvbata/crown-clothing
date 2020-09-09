import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAdJv67JhYVAYbuFrhRfalYMcXcVnZlY9I",
    authDomain: "crown-clothing-db-ccc2d.firebaseapp.com",
    databaseURL: "https://crown-clothing-db-ccc2d.firebaseio.com",
    projectId: "crown-clothing-db-ccc2d",
    storageBucket: "crown-clothing-db-ccc2d.appspot.com",
    messagingSenderId: "129679180360",
    appId: "1:129679180360:web:d50fd7f893b292d2c04e7d",
    measurementId: "G-4Q3BT235V5"
};

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log('FUCK YOU');
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;