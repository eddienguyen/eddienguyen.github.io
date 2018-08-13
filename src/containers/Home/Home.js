import React, { Component } from 'react';

import Header from 'components/Header/Header';
import MoreIntro from 'components/MoreIntro/MoreIntro';
import Features from '../../components/Features/Features';

class Home extends Component {

    static propTypes = {};

    render() {

        return (
            <div>
                <Header />
                <MoreIntro />
                <Features />
            </div>
        );
    }
}

export default Home;

