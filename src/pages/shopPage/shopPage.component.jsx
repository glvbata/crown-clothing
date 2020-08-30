import React from 'react';
import CollectionPreview from '../../components/collectionPreview/collectionPreview.component.jsx'

import SHOP_DATA from './shopPage.data.js'

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: []
        }
    }

    componentDidMount() {
        this.setState({
            collections: SHOP_DATA
        })
    }

    render() {
        const { collections } = this.state;

        return (
            <div className='shop-page'>
                {
                    collections.map(({ id, ...collectionProps }) => (
                        <CollectionPreview key={ id } { ...collectionProps } />
                    ))
                }

            </div>
        )
    }
}


export default ShopPage;