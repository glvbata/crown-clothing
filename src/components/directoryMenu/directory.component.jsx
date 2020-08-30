import React from 'react';

import MenuItem from '../menuItem/menuItem.component'

import './directory.styles.scss'

class Directory extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sections: []
        };
    }

    componentDidMount() {
        fetch('/assets/data/directory.json')
        .then(response => response.json())
        .then((data) => {
            this.setState({
                sections: data.sections
            })
        });
    }

    getMenuItemListMarkup = () => {
        const { sections } = this.state;

        return (
            <React.Fragment>
                {
                    sections.map(({ id, ...currentSectionProps }) => (
                        <MenuItem 
                            key={ id }
                            { ...currentSectionProps }
                        />
                    ))
                }
            </React.Fragment>
        )
    }
    
    render() {
        return (
            <div className='directory-menu'>
                { this.getMenuItemListMarkup() }
            </div>
        )
    }
}

export default Directory;