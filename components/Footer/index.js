import React, { Component } from "react";
import pkg from "package.json";

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      show: !this.state.show,
    });
  }

  render() {
    return (
      <footer className="bg-transparent text-xs footer">
        <div className="flex justify-between absolute left-0 right-0 bottom-0 footer__holder">
          <ul
            className={`overflow-hidden footer__list ${
              this.state.show ? "show" : "hide"
            }`}
          >
            <li className="flex">
              <p>Version: {pkg.version}</p>
            </li>
            <li>
              <p>Environment: {process.env.NODE_ENV}</p>
            </li>
            {/* <li>
                                        {typeof window !== 'undefined' && (
                                            <>
                                                <p>Browser: {Browser.browser.toString()}</p>
                                                <p>isFacebookWebview: {Browser.isFacebookWebview.toString()}</p>
                                                <p>isInAppWebview: {Browser.isInAppWebview.toString()}</p>
                                            </>
                                        )}
                                    </li> */}
          </ul>
          <button
            className="bg-transparent cursor-pointer footer__toggler"
            onClick={this.toggle}
          >
            toggle
          </button>
        </div>
        <style jsx>{`
          .footer {
            position: relative;
            min-height: 1px;
            overflow: hidden;
            &:hover {
              overflow: visible;
              .footer__holder {
                transform: translateY(0);
              }
            }
          }
          .footer__holder {
            transform: translateY(100%);
          }
          .footer__list {
            transition: all 0.3s ease-in-out;

            &.show {
              height: auto;
            }
            &.hide {
              height: 0;
            }
          }
          .footer__toggler {
            border: 0 none;
          }
        `}</style>
      </footer>
    );
  }
}

export default Footer;
