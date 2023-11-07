import React, { Component } from "react";

import Tab from "components/Tab";

// Tabs will display a list of clickable Tab components,
// this also holds a state for which tab is active, and the active tab's contents

class Tabs extends Component {
  static propTypes = {
    // children: PropTypes.instanceof(Array).isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  };

  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab },
    } = this;

    return (
      <div className="tabs">
        <ul className="tab-list" style={{ borderBottom: "0px" }}>
          {children.map((child) => {
            const { label } = child.props;

            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
                className="w-full md:w-auto mx-0 md:mx-2.5"
              />
            );
          })}
        </ul>

        <div className="tab-content">
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
        <style jsx>{`
          .tab-list {
            border-bottom: 1px solid #ccc;
            padding-left: 0;
            list-style-type: none;
            text-align: center;
          }
          .tab-content {
            padding-top: 1rem;
            padding-bottom: 1rem;
          }
        `}</style>
      </div>
    );
  }
}

export default Tabs;
