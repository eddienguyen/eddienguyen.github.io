import React, { Component } from 'react';

import { Container, Flex } from 'theme/grid';
import { Anchor } from 'theme/types';
import {
    ImageButton,
    Header
} from './Project.style';

import ImageParallax from 'react-image-parallax2';

class Projects extends Component {
    render() {
        return (
            <Container>
                <Header>
                    PROJECTS
                </Header>

                <Flex column justify='center' align='center' marginBottom='100px'>
                    <h3><Anchor href='https://leapthew3-webapp.herokuapp.com/' target='_blank'>Leap The World-wide-web</Anchor></h3>

                    <ImageButton>
                        {/* <ImageParallax
                            src={require('assets/ProfilePage.png')}
                            reduceHeight={1 / 3}
                        /> */}
                        <img src={require('assets/ProfilePage_thumbnail.png')} alt='ProfilePage_thumbnail' />
                    </ImageButton>
                </Flex>
                <Flex column justify='center' align='center' marginBottom='100px'>
                    <h3><Anchor href='https://drive.google.com/file/d/1frwwbry_qbg_fP2cE4HMibmxYoJP3Iiw/view' target='_blank'>Smith-it Smith</Anchor></h3>
                    <iframe
                        src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Feddie.aquarious.96%2Fvideos%2F1461503510571314&width=560&show_text=false&height=400&appId"
                        title='SiS-video'
                        width="560"
                        height="400"
                        style={{ border: 'none', overflow: 'hidden' }}
                        frameborder="0"
                        allowTransparency="true"
                        allow="encrypted-media"
                        allowFullScreen="true">
                    </iframe>
                </Flex>
                <Flex column justify='center' align='center'>
                    <h3>Demo with reat-image-parallax2</h3>
                    <ImageParallax
                        src={require('assets/img/MainPage.png')}
                        reduceHeight={1 / 3}
                    />
                </Flex>
            </Container>
        );
    }
}

export default Projects;