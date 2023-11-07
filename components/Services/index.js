import React, { Component } from "react";

import data from "public/data/services.json";
import ServiceImage from "components/ServiceImage";

// import { Title } from "./Services.style";
import Container from "../Container";
import Section from "../Section";
import asset from "@/plugins/assets";

class Services extends Component {
  state = {
    services: [],
  };

  createImages = (images) => {
    // map through all img
    return images.map((img, index) => (
      <div className="services-col h-100 " key={index}>
        <ServiceImage key={img.imgSrc} image={img} />
      </div>
    ));
  };

  componentDidMount() {
    if (data) {
      this.setState({ services: data.data });
    } else {
      console.log("no data!");
    }
    // call createImageViews -> map -> create ImageView
  }

  render() {
    return (
      <>
        <Section className="services__cover">
          <Container>
            <div className="services__title text-black">
              <span>Services</span>
              <h3 className="my-7 font-bold text-3xl">What can I provide ?</h3>
            </div>
            <div className="services__row grid grid-cols-1 md:grid-cols-3">
              {this.createImages(this.state.services)}
            </div>
          </Container>
        </Section>
        <style jsx>{`
          .services__title {
            display: flex;
            flex-flow: column nowrap;
            align-items: center;
          }
          .services__row {
            margin-top: 30px;
            grid-gap: 20px;
          }
          .services__col {
            height: 100%;
          }
        `}</style>
        <style jsx global>{`
          .services__cover {
            background: url(${asset("img/some-example.jpg")}) no-repeat top /
              cover;
            padding-bottom: 30px;
          }
        `}</style>
      </>
    );
  }
}

export default Services;
