import React from "react";

import { Anchor } from "theme/types";
import { Container, Flex } from "theme/grid";
import { Copy, Title } from './style';


function AboutContainer(props) {
    return (
        <Container>
            <Title>About me</Title>

            <h2>Quân Nguyễn</h2>
            <h6>FRONT-END DEVELOPER</h6>

            <Copy>
                <ul>
                    <li> (+84) 1676664296</li>
                    <li> <Anchor href="mailto:eddienguyen996@gmail.com">eddienguyen996@gmail.com</Anchor></li>
                    <li> <Anchor href="https://eddienguyen.github.io">eddienguyen.github.io</Anchor></li>
                </ul>


                <hr />
                <Flex>
                    <div className="col-2">

                        <h3>Objective</h3>
                    </div>
                    <div className="col-10">
                        <p>Gain exeprience in web development - both frontend and backend. Take advantages of team work skills & understading of how corporations work. From that, I will contribute to development of your company.</p>
                    </div>
                </Flex>

                <hr />
                <Flex>
                    <div className="col-2">

                        <h3>Experience</h3>
                    </div>
                    <div className="col-10">
                        <h4>FRONT-END DEVELOPER: </h4>
                        <p>DIGITOP – WEARETOPGROUP – 08/2018 – NOW</p>
                        <ul>
                            <li>Working as a full-time employee.</li>
                            <li><Anchor href="https://www.digitop.vn/digital/home" target="_blank">digitop.vn/digital/home</Anchor></li>
                        </ul>

                        <br />

                        <h4>INTERN WEB DEVELOPER:</h4>
                        <p>VTC ONLINE, HANOI -- 04 - 07/2018</p>
                        <ul>
                            <li>Learn and Work with PHP, HTML, CSS, JavaScripts</li>
                        </ul>
                    </div>
                </Flex>

                <hr />

                <Flex>
                    <div className="col-2">

                        <h3>Education</h3>
                    </div>
                    <div className="col-10">
                        <h4>INFORMATION TECHNOLOGY:</h4>
                        <p>Hanoi university of Business and Technology (Hanoi) 2014 – 2018</p>
                        <ul>
                            <li>Specialization in programming</li>
                            <li>Learn how to make websites, games, applications,...</li>
                        </ul>

                        <br />

                        <h4>THIRD GRADE : </h4>
                        <p>Pham Hong Thai High School (Hanoi) 2011 - 2014</p>
                    </div>
                </Flex>
                <hr />

                <Flex>
                    <div className="col-2">

                        <h3>Most Recent Projects</h3>
                    </div>
                    <div className="col-10">
                        <h4>WEBSITE: <i>Yamaha Janus Promotion</i> </h4>
                        <ul>
                            <li><Anchor href="https://iujanus.com" target="_blank">iujanus.com</Anchor></li>
                        </ul>

                        <h4>WEBSITE: <i>Prince7</i> </h4>
                        <ul>

                            <li><Anchor href="https://prince7.com.vn" target="_blank">prince7.com.vn</Anchor></li>
                        </ul>

                        <h4>WEBSITE: <i>Yamaha Exciter</i> </h4>
                        <ul>

                            <li><Anchor href="https://khuyenmainvx.com" target="_blank">khuyenmainvx.com</Anchor></li>
                            <li><Anchor href="https://dev4.digitop.vn/yamaha-nvx-promotion-tet-2019" target="_blank">dev4.digitop.vn/yamaha-nvx-promotion-tet-2019</Anchor></li>
                        </ul>

                        <h4>WEBSITE: <i>Yamaha Orion Swing 2018</i> </h4>
                        <ul>

                            <li><Anchor href="https://swing.com.vn" target="_blank">swing.com.vn</Anchor></li>
                            <li><Anchor href="https://dev4.digitop.vn/orion-swing-2018" target="_blank">dev4.digitop.vn/orion-swing-2018</Anchor></li>
                        </ul>

                        <h4>WEBSITE: <i>SIMILAC 2018</i> </h4>
                        <ul>

                            <li><Anchor href="https://dev4.digitop.vn/similac-2018" target="_blank">dev4.digitop.vn/similac-2018</Anchor></li>
                        </ul>

                        <h4>WEBSITE: <i>HONDA 2018</i> </h4>
                        <ul>

                            <li><Anchor href="https://dev4.digitop.vn/honda/home.html" target="_blank">dev4.digitop.vn/honda/home.html</Anchor></li>
                        </ul>

                        <h4>WEBSITE: <i>DIANA 2018</i> </h4>
                        <ul>

                            <li><Anchor href="https://dev4.digitop.vn/lacongaithattuyet" target="_blank">dev4.digitop.vn/lacongaithattuyet</Anchor></li>
                        </ul>

                        <h4>WEBSITE: <i>SUNPLAY He Cuong Nhiet 2018</i> </h4>
                        <ul>

                            <li><Anchor href="https://dev4.digitop.vn/sunplay-hecuongnhiet/home.html" target="_blank">dev4.digitop.vn/sunplay-hecuongnhiet/home.html</Anchor></li>
                            <li><Anchor href="https://hecuongnhiet.sunplay.com.vn" target="_blank">hecuongnhiet.sunplay.com.vn</Anchor></li>
                        </ul>

                        <h4>WEBSITE: <i>YAMAHA WHY NOT</i> </h4>
                        <ul>

                            <li><Anchor href="https://xetayga-yamahawhynot.com" target="_blank">xetayga-yamahawhynot.com</Anchor></li>
                            <li><Anchor href="https://dev4.digitop.vn/yamaha-whynot" target="_blank">dev4.digitop.vn/yamaha-whynot</Anchor></li>
                        </ul>

                        <h4>WEBSITE: <i>SENKA</i> </h4>
                        <ul>

                            <li><Anchor href="https://senkavietnam.com.vn/vi" target="_blank">senkavietnam.com.vn/vi</Anchor></li>
                            <li><Anchor href="https://dev4.digitop.vn/senka/homepage.html" target="_blank">dev4.digitop.vn/senka/homepage.html</Anchor></li>
                        </ul>

                        <h4>PROJECT: <i>SAMSUNG (OUTSOURCE)</i> </h4>
                        <ul>

                            <li><Anchor href="https://www.samsung.com/vn/smarthub" target="_blank">www.samsung.com/vn/smarthub</Anchor></li>
                            <li><Anchor href="https://www.samsung.com/vn/tvs" target="_blank">www.samsung.com/vn/tvs</Anchor></li>
                            <li><Anchor href="https://www.samsung.com/vn/tv-so1-the-gioi/uu-dai" target="_blank">www.samsung.com/vn/tv-so1-the-gioi/uu-dai</Anchor></li>
                            <li><Anchor href="https://www.samsung.com/vn/refrigerators" target="_blank">www.samsung.com/vn/refrigerators</Anchor></li>
                            <li><Anchor href="https://www.homeappliances.hitachi.com/vn/giattanloau" target="_blank">www.homeappliances.hitachi.com/vn/giattanloau</Anchor></li>
                        </ul>

                    </div>

                </Flex>

                <hr />

                <Flex>
                    <div className="col-2">

                        <h3>Skills</h3>
                    </div>
                    <div className="col-10">
                        <h4>SOFTWARE:</h4>
                        <p>Adobe Photoshop, Adobe Illustrator, Adobe Dreamweaver, HTML5, CSS3, JQUERY, JAVASCRIPT, SASS, NPM, GULP, GIT, Javascript Frameworks and Plug-ins.</p>

                        <h4>PERSONAL SKILLS : </h4>
                        <p>Stamina, Flexible, Ideas, Creative</p>

                        <h4>PERSONAL INTEREST : </h4>
                        <p>reading clean code and browsing beautiful animation websites.</p>

                        <h4>LANGUAGE : </h4>
                        <p>Vietnamese and English(Intermediate)</p>
                    </div>
                </Flex>
            </Copy>


        </Container>
    );
}


export default AboutContainer;