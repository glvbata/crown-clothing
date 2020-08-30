import React from 'react';
import CollectionItem from '../collectionItem/collectionItem.components.jsx';

import './collectionPreview.styles.scss';

const ITEM_LIMIT = 4;

const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{ title.toUpperCase() }</h1>
        <div className='preview'>
            {
                items
                .filter((item, index) => index < ITEM_LIMIT)
                .map(({ id, ...collectionItemProps }) => (
                    <CollectionItem key={ id } { ...collectionItemProps } />
                ))
            }
        </div>
    </div>
)

export default CollectionPreview;