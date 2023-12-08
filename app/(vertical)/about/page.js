"use client";

import AppLink from "@/components/AppLink";
import Container from "@/components/Container";
import Section from "@/components/Section";
import AppEvent from "@/modules/constants/event_names";
import { sendEvent } from "@/plugins/utils/events";
import personalInfo from "public/data/about.json";
import { useContext, useLayoutEffect } from "react";
import SideNav from "@/components/SideNav";
import { UIContext } from "@/components/contexts/UIProvider";

function AboutPage(props) {
  const { handlePageLoaded } = useContext(UIContext);

  const init = async () => {
    // wait for extra stuff
    console.log("[Aboutpage] init");
    // sendEvent(AppEvent.PAGE_LOADED);
    handlePageLoaded();
  };

  useLayoutEffect(() => {
    init();
  }, []);

  return (
    <main className="about-page">
      <SideNav />

      <Section className="first">
        <Container>
          <h1 className="my-8 text-5xl font-bold text-center text-primary-red uppercase">
            About me
          </h1>
          <h2 className="my-7 text-4xl font-bold">{personalInfo.fullname}</h2>
          <h6 className="my-9 text-base font-bold uppercase">
            {personalInfo.position}
          </h6>
          <div className="copy">
            <ul>
              <li>{personalInfo.phonenumber}</li>
              <li>
                <AppLink
                  className="anchor"
                  href={`mailto:${personalInfo.email}`}
                >
                  {personalInfo.email}
                </AppLink>
              </li>
              <li>
                <AppLink
                  className="anchor"
                  href={`https:${personalInfo.homepage}`}
                  target="_blank"
                >
                  {personalInfo.homepage}
                </AppLink>
              </li>
            </ul>
            <hr className="my-3" />

            <div className="grid grid-cols-5">
              <div className="col-span-5 md:col-span-1">
                <h3 className="my-7 text-3xl font-bold text-primary-red">
                  Objective
                </h3>
              </div>
              <div className="col-span-5 md:col-span-4">
                <p>
                  Gain exeprience in web development - both frontend and
                  backend. Take advantages of team work skills & understading of
                  how corporations work. From that, I will contribute to
                  development of your company.
                </p>
              </div>
            </div>

            <hr className="my-3" />

            <div className="grid grid-cols-5">
              <div className="col-span-5 md:col-span-1">
                <h3 className="my-7 text-3xl font-bold text-primary-red">
                  Experience
                </h3>
              </div>
              <div className="col-span-5 md:col-span-4">
                <h4 className="list-title">FRONT-END DEVELOPER: </h4>
                <p>DIGITOP – WEARETOPGROUP – 08/2018 – NOW</p>
                <ul>
                  <li>Working as a full-time employee.</li>
                  <li>
                    <AppLink
                      href="https://www.digitop.vn/digital/home"
                      target="_blank"
                      className="anchor"
                    >
                      digitop.vn/digital/home
                    </AppLink>
                  </li>
                </ul>

                <br />

                <h4 className="list-title">INTERN WEB DEVELOPER:</h4>
                <p>VTC ONLINE, HANOI -- 04 - 07/2018</p>
                <ul>
                  <li>Learn and Work with PHP, HTML, CSS, JavaScripts</li>
                </ul>
              </div>
            </div>
            <hr className="my-3" />
            <div className="grid grid-cols-5">
              <div className="col-span-5 md:col-span-1">
                <h3 className="my-7 text-3xl font-bold text-primary-red">
                  Education
                </h3>
              </div>
              <div className="col-span-5 md:col-span-4">
                <h4 className="list-title">INFORMATION TECHNOLOGY:</h4>
                <p>
                  Hanoi university of Business and Technology (Hanoi) 2014 –
                  2018
                </p>
                <ul>
                  <li>Specialization in programming</li>
                  <li>Learn how to make websites, games, applications,...</li>
                </ul>

                <br />

                <h4 className="list-title">THIRD GRADE : </h4>
                <p>Pham Hong Thai High School (Hanoi) 2011 - 2014</p>
              </div>
            </div>
            <hr className="my-3" />
            <div className="grid grid-cols-5">
              <div className="col-span-5 md:col-span-1">
                <h3 className="my-7 text-3xl font-bold text-primary-red">
                  Most Recent Projects
                </h3>
              </div>
              <div className="col-span-5 md:col-span-4">
                <h4 className="list-title">
                  WEBSITE: <i>Yamaha Janus Promotion</i>{" "}
                </h4>
                <ul>
                  <li>
                    <AppLink
                      className="anchor"
                      href="https://iujanus.com"
                      target="_blank"
                    >
                      iujanus.com
                    </AppLink>
                  </li>
                </ul>

                <h4 className="list-title">
                  WEBSITE: <i>Prince7</i>{" "}
                </h4>
                <ul>
                  <li>
                    <AppLink
                      className="anchor"
                      href="https://prince7.com.vn"
                      target="_blank"
                    >
                      prince7.com.vn
                    </AppLink>
                  </li>
                </ul>

                <h4 className="list-title">
                  WEBSITE: <i>Yamaha Exciter</i>{" "}
                </h4>
                <ul>
                  <li>
                    <AppLink
                      className="anchor"
                      href="https://khuyenmainvx.com"
                      target="_blank"
                    >
                      khuyenmainvx.com
                    </AppLink>
                  </li>
                  <li>
                    <AppLink
                      className="anchor"
                      href="https://dev4.digitop.vn/yamaha-nvx-promotion-tet-2019"
                      target="_blank"
                    >
                      dev4.digitop.vn/yamaha-nvx-promotion-tet-2019
                    </AppLink>
                  </li>
                </ul>

                <h4 className="list-title">
                  WEBSITE: <i>Yamaha Orion Swing 2018</i>{" "}
                </h4>
                <ul>
                  <li>
                    <AppLink
                      className="anchor"
                      href="https://swing.com.vn"
                      target="_blank"
                    >
                      swing.com.vn
                    </AppLink>
                  </li>
                  <li>
                    <AppLink
                      className="anchor"
                      href="https://dev4.digitop.vn/orion-swing-2018"
                      target="_blank"
                    >
                      dev4.digitop.vn/orion-swing-2018
                    </AppLink>
                  </li>
                </ul>

                <h4 className="list-title">
                  WEBSITE: <i>SIMILAC 2018</i>{" "}
                </h4>
                <ul>
                  <li>
                    <AppLink
                      className="anchor"
                      href="https://dev4.digitop.vn/similac-2018"
                      target="_blank"
                    >
                      dev4.digitop.vn/similac-2018
                    </AppLink>
                  </li>
                </ul>

                <h4 className="list-title">
                  WEBSITE: <i>HONDA 2018</i>{" "}
                </h4>
                <ul>
                  <li>
                    <AppLink
                      className="anchor"
                      href="https://dev4.digitop.vn/honda/home.html"
                      target="_blank"
                    >
                      dev4.digitop.vn/honda/home.html
                    </AppLink>
                  </li>
                </ul>

                <h4 className="list-title">
                  WEBSITE: <i>DIANA 2018</i>{" "}
                </h4>
                <ul>
                  <li>
                    <AppLink
                      className="anchor"
                      href="https://dev4.digitop.vn/lacongaithattuyet"
                      target="_blank"
                    >
                      dev4.digitop.vn/lacongaithattuyet
                    </AppLink>
                  </li>
                </ul>

                <h4 className="list-title">
                  WEBSITE: <i>SUNPLAY He Cuong Nhiet 2018</i>{" "}
                </h4>
                <ul>
                  <li>
                    <AppLink
                      className="anchor"
                      href="https://dev4.digitop.vn/sunplay-hecuongnhiet/home.html"
                      target="_blank"
                    >
                      dev4.digitop.vn/sunplay-hecuongnhiet/home.html
                    </AppLink>
                  </li>
                  <li>
                    <AppLink
                      className="anchor"
                      href="https://hecuongnhiet.sunplay.com.vn"
                      target="_blank"
                    >
                      hecuongnhiet.sunplay.com.vn
                    </AppLink>
                  </li>
                </ul>

                <h4 className="list-title">
                  WEBSITE: <i>YAMAHA WHY NOT</i>{" "}
                </h4>
                <ul>
                  <li>
                    <AppLink
                      className="anchor"
                      href="https://xetayga-yamahawhynot.com"
                      target="_blank"
                    >
                      xetayga-yamahawhynot.com
                    </AppLink>
                  </li>
                  <li>
                    <AppLink
                      className="anchor"
                      href="https://dev4.digitop.vn/yamaha-whynot"
                      target="_blank"
                    >
                      dev4.digitop.vn/yamaha-whynot
                    </AppLink>
                  </li>
                </ul>

                <h4 className="list-title">
                  WEBSITE: <i>SENKA</i>{" "}
                </h4>
                <ul>
                  <li>
                    <AppLink
                      className="anchor"
                      href="https://senkavietnam.com.vn/vi"
                      target="_blank"
                    >
                      senkavietnam.com.vn/vi
                    </AppLink>
                  </li>
                  <li>
                    <AppLink
                      className="anchor"
                      href="https://dev4.digitop.vn/senka/homepage.html"
                      target="_blank"
                    >
                      dev4.digitop.vn/senka/homepage.html
                    </AppLink>
                  </li>
                </ul>

                <h4 className="list-title">
                  PROJECT: <i>SAMSUNG (OUTSOURCE)</i>{" "}
                </h4>
                <ul>
                  <li>
                    <AppLink
                      className="anchor"
                      href="https://www.samsung.com/vn/smarthub"
                      target="_blank"
                    >
                      www.samsung.com/vn/smarthub
                    </AppLink>
                  </li>
                  <li>
                    <AppLink
                      className="anchor"
                      href="https://www.samsung.com/vn/tvs"
                      target="_blank"
                    >
                      www.samsung.com/vn/tvs
                    </AppLink>
                  </li>
                  <li>
                    <AppLink
                      className="anchor"
                      href="https://www.samsung.com/vn/tv-so1-the-gioi/uu-dai"
                      target="_blank"
                    >
                      www.samsung.com/vn/tv-so1-the-gioi/uu-dai
                    </AppLink>
                  </li>
                  <li>
                    <AppLink
                      className="anchor"
                      href="https://www.samsung.com/vn/refrigerators"
                      target="_blank"
                    >
                      www.samsung.com/vn/refrigerators
                    </AppLink>
                  </li>
                  <li>
                    <AppLink
                      className="anchor"
                      href="https://www.homeappliances.hitachi.com/vn/giattanloau"
                      target="_blank"
                    >
                      www.homeappliances.hitachi.com/vn/giattanloau
                    </AppLink>
                  </li>
                </ul>
              </div>
            </div>
            <hr className="my-3" />

            <div className="grid grid-cols-5">
              <div className="col-span-5 md:col-span-1">
                <h3 className="my-7 text-3xl font-bold text-primary-red">
                  Skills
                </h3>
              </div>
              <div className="col-span-5 md:col-span-4">
                <h4 className="list-title">SOFTWARE:</h4>
                <p>
                  Adobe Photoshop, Adobe Illustrator, Adobe Dreamweaver, HTML5,
                  CSS3, JQUERY, JAVASCRIPT, SASS, NPM, GULP, GIT, Javascript
                  Frameworks and Plug-ins.
                </p>

                <h4 className="list-title">PERSONAL SKILLS : </h4>
                <p>Stamina, Flexible, Ideas, Creative</p>

                <h4 className="list-title">PERSONAL INTEREST : </h4>
                <p>
                  reading clean code and browsing beautiful animation websites.
                </p>

                <h4 className="list-title">LANGUAGE : </h4>
                <p>Vietnamese and English(Intermediate)</p>
              </div>
            </div>
          </div>
          {/* .copy */}
        </Container>
      </Section>
      <style jsx>{`
        .about-page {
          .anchor {
            word-break: break-word;
          }
        }
        .list-title {
          & + p {
            margin-top: 0.5em;
          }
        }
      `}</style>
    </main>
  );
}

export default AboutPage;
