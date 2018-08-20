import React, { Component } from 'react';


import { Image, ImageContainer, ServiceImageContainer, ContentContainer } from './ServiceImage.style';

class ServiceImage extends Component {
    render() {
        return (
            <ServiceImageContainer>
                <ImageContainer>
                    <Image 
                        src={require(`assets/img/services/${this.props.image.imgSrc}`)} alt={this.props.image.label} />
                </ImageContainer>
                <ContentContainer>
                    <h4 style={{margin: '0.5em 0 0 0.3em'}}>{this.props.image.label}</h4>
                    <p style={{margin: '0.5em 0 0.5em .3em'}}>{this.props.image.content}</p>
                </ContentContainer>
            </ServiceImageContainer>
        );
    }
}

export default ServiceImage;