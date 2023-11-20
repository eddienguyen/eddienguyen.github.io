import Section from "@/components/Section";
import AppLink from "@/components/AppLink";
import asset from "../../plugins/assets";
import APP_ROUTES from "@/modules/constants/app_routes";

function SectionContactAdress(props) {
  return (
    <Section className="section__address relative">
      <div className="background w-1/2 mr-auto">
        <div
          className="img img-cover scale-ratio w-full"
          style={{ backgroundImage: `url(${asset("/img/camp.jpg")})` }}
        ></div>
      </div>

      <div className="address__text absolute w-1/2 pl-11 text-left">
        <h4 className="text__top uppercase text-xs text-blue-rock">My Camp</h4>
        <h2 className="text__title my-14 font-serif font-bold text-3xl leading-snug text-primary-black">
          HaNoi, VN
          <br />
          Long Bien
          <br />
          Nguyen Van Cu St
        </h2>

        <AppLink href={APP_ROUTES.ABOUT.INDEX} className="link-spacing">
          Get in Touch
        </AppLink>
      </div>
      <style jsx>{`
        .address__text {
          top: 50%;
          left: 50%;
          transform: translateY(-50%);
        }
        .background {
          .img {
            &:before {
              padding-top: 63%;
            }
          }
        }
        .text__top {
          letter-spacing: 0.6em;
        }
        .text__title {
          padding-left: 3.5vw;
        }
      `}</style>
      <style jsx global>{`
        .section__address {
          padding-top: 75px;
          padding-bottom: 75px;
        }
      `}</style>
    </Section>
  );
}

export default SectionContactAdress;
