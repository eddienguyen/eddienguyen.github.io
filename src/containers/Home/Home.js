import React, { Component } from 'react';

import Header from 'components/Header/Header';
import MoreIntro from 'components/MoreIntro/MoreIntro';

class Home extends Component {

    static propTypes = {};

    render() {

        return (
            <div>
                <Header />
                <MoreIntro />
            </div>
        );
    }
}

export default Home;

