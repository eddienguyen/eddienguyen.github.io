import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { Flex } from 'theme/grid';

import { ImageResponsive } from './ViewCard.style';
import { ParallaxBanner } from 'react-scroll-parallax';
// import 6 ViewCards
// with props: label & content
// grid style
class ViewCard extends Component {
  static PropTypes = {
    label: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {

    }
  }
  render() {
    // const {
    //   props: {
    // label,
    // content,
    // icon
    //   }
    // } = this;

    return (
      <Flex height='100%' bgColor='white' fontColor='black' floating>
        <div>
          <ImageResponsive className='image-responsive'>
            <ParallaxBanner
              className='class-name'
              layers={[
                {
                  image: 'https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg',
                  amount: 0.1,
                  slowerScrollRate: false
                }
              ]}
              style={{ height: '700px' }}
            >
              <h1> Banner Children</h1>
            </ParallaxBanner>
          </ImageResponsive>
        </div>
        <Flex column >
          <h3>h3</h3>
          <p>paragraph</p>
        </Flex>
      </Flex>
    );
  }
}

export default ViewCard;