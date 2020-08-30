import React from 'react';
import { withRouter } from 'react-router-dom';

import './menuItem.styles.scss'

const MenuItem = ({
    title,
    subtitle,
    imageUrl,
    size,
    linkUrl,
    history,
    match
}) => (
    <div
        className={`menu-item ${size}`}
        onClick={ () => history.push(`${match.url}${linkUrl}`) }
        style={
            {
                backgroundImage: `url(${imageUrl})`
            }
        }>
        <div className='content'>
            <h1 className='title'>{ title }</h1>
            <span className='subtitle'>{ subtitle.toUpperCase() }</span>
        </div>
    </div>
)

export default withRouter(MenuItem);