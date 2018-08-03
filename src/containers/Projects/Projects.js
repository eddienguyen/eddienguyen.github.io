import React, { Component } from 'react';
import Zommy from 'react-zoomy';

import { Container, Flex } from 'theme/grid';
import { A } from 'theme/types';
import { ImageButton } from './Project.style';

class Projects extends Component {
    render() {
        return (
            <Container>
                <h1>PROJECTS</h1>
                <Flex column justify='center' align='center' marginBottom='100px'>
                    <h3><A href='https://leapthew3-webapp.herokuapp.com/' target='_blank'>Leap The World-wide-web</A></h3>
                    <Zommy
                        imageUrl={require('assets/ProfilePage.png')}
                        renderThumbnail={({ showImage }) =>
                            <ImageButton onClick={showImage} >
                                <img src={require('assets/ProfilePage_thumbnail.png')} alt='ProfilePage_thumbnail' />
                            </ImageButton>
                        }
                        scale={[1.1, 1.1]}
                    />
                </Flex>
                <Flex column justify='center' align='center' marginBottom='100px'>
                    <h3><A href='https://drive.google.com/file/d/1frwwbry_qbg_fP2cE4HMibmxYoJP3Iiw/view' target='_blank'>Smith-it Smith</A></h3>
                    <iframe 
                        src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Feddie.aquarious.96%2Fvideos%2F1461503510571314&width=560&show_text=false&height=400&appId" 
                        title='SiS-video'
                        width="560" 
                        height="400" 
                        style={{border:'none',overflow:'hidden'}} 
                        frameborder="0" 
                        allowTransparency="true" 
                        allow="encrypted-media" 
                        allowFullScreen="true">
                    </iframe>
                </Flex>
            </Container>
        );
    }
}

export default Projects;