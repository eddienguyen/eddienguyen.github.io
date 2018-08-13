import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tab from 'components/Tab/Tab';
import { TabList } from './Tabs.style';

// Tabs will display a list of clickable Tab components,
// this also holds a state for which tab is active, and the active tab's contents 

class Tabs extends Component {
    static propTypes = {
        // children: PropTypes.instanceof(Array).isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            activeTab: this.props.children[0].props.label
        };
    };

    onClickTabItem = (tab) => {
        this.setState({ activeTab: tab })
    };

    render() {

        const {
            onClickTabItem,
            props: {
                children
            },
            state: {
                activeTab
            }
        } = this;

        return (
            <div className='tabs'>
                <TabList>

                    {children.map((child) => {
                        const { label } = child.props;

                        return (
                            <Tab
                                activeTab={activeTab}
                                key={label}
                                label={label}
                                onClick={onClickTabItem}
                            />
                        );

                    })}
                </TabList>

                <div className='tab-content'>
                    {children.map((child) => {
                        if (child.props.label !== activeTab) return undefined;
                        return child.props.children;
                    })}
                </div>
            </div>
        );
    }
}

export default Tabs;