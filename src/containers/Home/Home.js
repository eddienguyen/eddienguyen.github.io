import React, { Component } from 'react';

import { Container } from 'theme/grid';
import {
    Intro,
    IntroBanner,
    Image,
    RevealP
} from './Home.style';

class Home extends Component {

    static propTypes = {};

    render() {

        return (
            <Container>
                <Intro>
                    <IntroBanner>
                        <h1 style={{ color: "#fff" }}>
                            Hi,
                            <br />
                            I'm <span style={{ color: '#00d8ff' }}>Eddie</span>,
                            <br />
                            Front-end developer.
                        </h1>
                        <Image src={require('assets/Ava-portrait.jpg')} alt='portrait' />
                    </IntroBanner>
                    <RevealP >
                        A 21 year old web developer based in Hanoi, Viet Nam. I enjoy building everything from web applications to rich interactive website. I have worked with small projects and for large company over the last year. My core skills are HTML/CSS, JS, React and Nodejs.  If you are a bussiness seeking for a web presence or an employer looking to hire, you can get in touch with me here.
                    </RevealP>
                </Intro>
            </Container>
        );
    }
}

export default Home;