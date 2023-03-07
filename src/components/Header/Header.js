import React, { Component } from 'react';

import { Container } from 'theme/grid';
import {
    Background,
    Intro,
    IntroBanner
} from './Header.style';

import { color } from 'theme/variables';

import { lightBlue } from 'theme/variables';


class Header extends Component {

    render() {
        return (
            <div style={{borderBottom: `2px solid ${color.lightBlue}`}}>
                <Background />
                <Container>
                    <Intro>
                        <IntroBanner>
                            <h1 className='text-3xl font-bold underline'>
                                Hi,
                            <br />
                                I'm <span style={{ color: lightBlue }}>Eddie</span>,
                            <br />
                                Front-end developer.
                        </h1>
                            {/* <Image src={require('assets/Ava-portrait.jpg')} alt='portrait' /> */}
                        </IntroBanner>
                    </Intro>
                </Container>
            </div>
        );
    }
}

export default Header;