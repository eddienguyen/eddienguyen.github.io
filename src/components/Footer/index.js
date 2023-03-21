import React, { Component } from 'react';
import * as pkg from "../../../package.json";

import { StyledFooter, StyledList, Toggler } from './style';
import { Flex } from "theme/grid";

class Footer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            show: false
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        return (
            <StyledFooter>
                <Flex
                    justify={"space-between"}
                >
                    <StyledList show={this.state.show}>
                        <li className='flex'>
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
                    </StyledList >
                    <Toggler
                        onClick={this.toggle}
                    >
                        toggle
                    </Toggler>
                </Flex>

            </StyledFooter>
        );
    }
}

export default Footer;