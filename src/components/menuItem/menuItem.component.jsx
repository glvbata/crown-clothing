import React from 'react';

import './menuItem.styles.scss'

const MenuItem = ({
    title,
    subtitle,
    imageUrl,
    size
}) => (
    <div
        className={`menu-item ${size}`}
        style={
            {
                backgroundImage: `url(${imageUrl})`
            }
        }
    >
        <div className='content'>
            <h1 className='title'>{ title }</h1>
            <span className='subtitle'>{ subtitle.toUpperCase() }</span>
        </div>
    </div>
)

export default MenuItem;