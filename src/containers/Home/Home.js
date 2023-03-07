import React, { Component } from 'react';

import Header from 'components/Header/Header';
import MoreIntro from 'components/MoreIntro/MoreIntro';
import Features from 'components/Features/Features';
import Services from 'components/Services/Services';
import { ParallaxProvider } from 'react-scroll-parallax';
import Footer from 'components/Footer';

class Home extends Component {

    static propTypes = {};

    render() {

        return (
            <div>
                <ParallaxProvider>
                    <Header />
                    <MoreIntro />
                    <Features />
                    <Services />
                    <Footer />
                </ParallaxProvider>
            </div>
        );
    }
}

export default Home;

