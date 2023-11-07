import React, { Component } from "react";

import PropTypes from "prop-types";
import { lightBlue } from "@/styles/theme/variables";

// Tab will display this tab's label, handles click events and let the Tabs component
// knows which Tab has been clicked.

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  };

  render() {
    const {
      onClick,
      props: { activeTab, label, className = "" },
    } = this;

    return (
      <li
        className={`tab-list-item floating ${className} ${
          activeTab === label ? "tab-list-active" : ""
        }`}
        onClick={onClick}
      >
        {label}

        <style jsx>{`
          .tab-list-item {
            background-color: ${lightBlue};
            margin-bottom: -1px;
            padding: 15px 40px;
            display: inline-block;
            cursor: pointer;
            border-radius: 4px 4px 0 0;
            list-style: none;
          }
          .tab-list-active {
            background-color: white;
            color: #00d8ff;
            border: solid #ccc;
            border-width: 1px 1px 0 1px;
          }
        `}</style>
      </li>
    );
  }
}

export default Tab;
