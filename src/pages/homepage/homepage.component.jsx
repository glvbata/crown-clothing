import React from 'react';
import { Link } from 'react-router-dom';

import Directory from '../../components/directoryMenu/directory.component';

import './homepage.styles.scss';

const HomePage = () => (
    <div className='homepage'>
        <Link to='/topics'>Topics</Link>
        <Directory />
    </div>
)

export default HomePage;