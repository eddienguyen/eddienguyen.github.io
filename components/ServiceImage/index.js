import React, { Component } from "react";

import { color } from "@/styles/theme/variables";
import asset from "@/plugins/assets";

class ServiceImage extends Component {
  render() {
    return (
      <div className="service-image--container overflow-hidden">
        <div className="service-image__inner-container">
          <img
            src={asset(this.props.image.imgSrc)}
            alt={this.props.image.label}
            className="service-img"
          />
        </div>
        <div className="service-image__content-container">
          <h4 style={{ margin: "0.5em 0 0 0.3em" }}>
            {this.props.image.label}
          </h4>
          <p style={{ margin: "0.5em 0 0.5em .3em" }}>
            {this.props.image.content}
          </p>
        </div>
        <style jsx>{`
          .service-image--container {
            position: relative;
            background-color: ${color.white};
            color: ${color.black};
            box-shadow: 2px 3px 15px rgba(0, 0, 0, 0.26);
            border-radius: 3px;
            font-size: 0.9em;

            &:hover {
              .service-img {
                filter: blur(4px);
              }
              .service-image__content-container {
                visibility: visible;

                &:after {
                  content: " ";
                  position: absolute;
                  background-color: rgba(256, 256, 256, 0.3);
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  z-index: -1;
                  filter: blur(10px);
                }
              }
            }
          }

          .service-image__inner-container {
            width: 100%;
            position: relative;
            padding-top: 56.25%;
            background-color: ${color.black};
          }

          .service-img {
            position: absolute;
            width: 100%;
            top: -9999px;
            bottom: -9999px;
            left: -9999px;
            right: -9999px;
            margin: auto;
            filter: blur(0);
            transition: 0.2s ease-in-out;
          }

          .service-image__content-container {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 0;
            right: 0;
            text-align: center;
            background: transparent;
            width: 60%;
            margin: auto;
            transition: 0.1s linear;
            visibility: hidden;
            border: 2px solid ${color.black};
          }
        `}</style>
      </div>
    );
  }
}

export default ServiceImage;
