import React, { Component } from 'react';

import { Flex, Section } from 'theme/grid';
import { FeaturesContainer } from './Features.style';

import Tabs from 'components/Tabs/Tabs';

import ViewCard from 'components/ViewCard/ViewCard';

class Features extends Component {
    // tabs: Introduction, about, features
    // each tab content holds: img (parallax) with h4 as title && paragraph, all in row

    render() {
        return (
            <Section>
                    <FeaturesContainer>
                        <Flex column align='center'>
                            <span>Features</span>
                            <h3>Who am I ?</h3>
                        </Flex>
                        <Tabs>
                            <div label='Experiences'>
                                A year in web development industry.
                                </div>
                            <div label='Education'>
                                    I'm completing my Bachelor's degree at HaNoi University of Bussiness and Technology - Information Technology Engineering
                            </div>
                            <div label="Features">
                                My main features are:
                            <em> HTML</em>,
                            <em> CSS</em>,
                            <em> Javascript</em>,
                            <em> ReactJS</em>,
                            <em> NodeJS </em> and
                            <em> Java</em>
                            </div>
                        </Tabs>
                    </FeaturesContainer>
                    
            </Section>
        );
    }
}

export default Features;