import React, { Component } from 'react';
import styled from 'styled-components';

import Container from '../theme/grid/Container';

class Home extends Component {

    render() {
        const Intro = styled.div`
            display: flex;
            flex-direction: column;
        `;
        const IntroBanner = styled.div`
            width: 100%;
            background: #0E0E0E;
            display: flex;
            flex-flow: row nowrap;
            overflow: hidden;
            align-items: center;
        `;

        const Image = styled.img`
            max-width: 60%;
        `;

        return (
            <Container>
                <Intro>
                    <IntroBanner>
                        <h1 style={{ color: "#fff" }}>
                            Hi,
                            <br />
                            I'm Eddie,
                            <br />
                            Front-end developer.
                        </h1>
                        <Image src={require('../assets/RTR-portrait.jpg')} alt='portrait' />
                    </IntroBanner>
                    <p>
                        A 21 year old web developer based in Hanoi, Viet Nam. I enjoy building everything from web applications to rich interactive website. I have worked with small projects and for large company over the last year. My core skills are HTML/CSS, JS, React and Nodejs.  If you are a bussiness seeking for a web presence or an employer looking to hire, you can get in touch with me here.
                    </p>
                </Intro>
            </Container>
        );
    }
}

export default Home;