import React, { Component } from 'react';

import { Container } from 'theme/grid';
import { 
    Background,
    Intro,
    IntroBanner,
    Image
 } from './Header.style';
 import { A } from 'theme/types';

 import { lightBlue } from 'theme/variables';


class Header extends Component {

    render() {
        return(
            <div>
            <Background />
            <Container>
                <A href='/projects'>Projects</A>
                <Intro>
                    <IntroBanner>
                        <h1>
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