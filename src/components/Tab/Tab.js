import React, { Component } from 'react';

import PropTypes from 'prop-types';

// Tab will display this tab's label, handles click events and let the Tabs component
// knows which Tab has been clicked.

class Tab extends Component {
    static PropTypes = {
        activeTab: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired
    };

    onClick = () => {
        const { label, onClick } = this.props;
        onClick(label);
    }

    render() {
        const {
            onClick,
            props: {
                activeTab,
                label
            }
        } = this;

        let className = 'tab-list-item';

        if (activeTab === label) {
            className += ' tab-list-active';
        };

        return (
            <li
                className={className}
                onClick={onClick}
            >
                {label}
            </li>
        );
    }
}

export default Tab;