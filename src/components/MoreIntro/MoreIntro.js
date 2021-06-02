import React, { Component } from 'react';

import { RevealP, Background } from './MoreIntro.style';
import { Container } from 'theme/grid';
import WhenInView from 'components/WhenInView/WhenInView';
import { Anchor } from 'theme/types';
class MoreIntro extends Component {
    render() {
        return (
            <section>
                <Background />
                <Container>
                    <WhenInView>

                        {({ isInView }) =>
                            <RevealP hide={!isInView}>
                                A 25 year old web developer based in Hanoi, Viet Nam. I enjoy building everything from web applications to rich interactive website. I have worked with small projects and for large company over the last year. My core skills are HTML/CSS, JS, React and Nodejs.  If you are a bussiness seeking for a web presence or an employer looking to hire, you can get in touch with me <Anchor href="/about">here</Anchor>.
                            </RevealP>
                        }
                    </WhenInView>
                </Container>
            </section>
        );
    };
}

export default MoreIntro;