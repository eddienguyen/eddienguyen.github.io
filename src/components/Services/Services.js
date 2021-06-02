import React, { Component } from 'react';

import { Section, Container, Div } from 'theme/grid';
import data from 'assets/data/services.json';
import ServiceImage from 'components/ServiceImage/ServiceImage';

import { Title } from './Services.style';

class Services extends Component {
  state = {
    services: []
  };

  createImages = (images) => {
    // map through all img
    return images.map(img => 
      <div className='col-4' >
        <ServiceImage key={img.imgSrc} image={img} />
      </div>
    );
  };

  componentWillMount() {
    if (data) {
      this.setState({ services: data.data });

    } else {
      console.log('no data!');
    }
  }

  componentDidMount() {
    // call createImageViews -> map -> create ImageView
  };

  render() {
    return (
      <Section>
        <Container >
          <Title
            bgImagePath='assets/img/some-example.jpg'
          >
            <span>Services</span>
            <h3>What can I provide ?</h3>
          </Title>
          <Div className='row' marginTop='30px' marginBottom='30px' >
            {this.createImages(this.state.services)}
          </Div>
        </Container>
      </Section>
    );
  }
}

export default Services;