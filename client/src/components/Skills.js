import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Container, Row, Col} from 'react-bootstrap';
import { FaJsSquare } from "react-icons/fa";
import { TbBrandReact, TbBrandNodejs,TbBrandRedux  } from "react-icons/tb";
import { DiMongodb } from "react-icons/di";
import { FaGitAlt,FaGithubSquare } from "react-icons/fa";
import Heading from "./Heading";
import "./Skills.css"

import { SiHtml5, SiCss3, SiBootstrap,SiMysql, SiPhp } from "react-icons/si";

export default function Skills() {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000
        
        },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return(
<section className="skills  pt-3 pb-5" id="skills" >
<Heading text='My Skills'/>
    <Container>
        <Row>
            <Col>
            <div className="skills-box">
                

                <div className="row   items mb-5">
                    <div className="col-sm-12 col-md-6 col-lg-4 bg-white   mb-3 item" >
                        <h3 className=" fw-bold">Front-End</h3>
                        <div className="text-black-50 fs-5 fw-bold">Html , Css, Bootstrap, ReactJs, NextJs, React Native Redux
                         </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 bg-white mb-3  item" >
                        <h3 className=" fw-bold">Back-End</h3>
                        <div className="text-black-50 fs-5 fw-bold">NodeJs, ExpressJs, Mysql, Mongodb</div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 bg-white mb-3  item" >
                        <h3 className=" fw-bold">languages</h3>
                        <div className="text-black-50 fs-5 fw-bold">Javascript, Php</div>
                    </div>
                </div>
                <Carousel responsive={responsive} infinite={true} className="skills-slider">
                    <div className="item text-center">
                        <h5>Html</h5>
                        <div className="mt-2"><SiHtml5 size={70}  color="red"/></div>
                        <h5 className="mt-2 ">89%</h5>
                    </div>
                    <div className="item text-center">
                        <h5>Css</h5>
                        <div className="mt-2 "><SiCss3  color="blue" size={70}/></div>
                        <h5 className="mt-2 ">80%</h5>
                    </div>
                    <div className="item text-center">
                        <h5>Javascript</h5>
                        <div className="mt-2 "><FaJsSquare style={{fontSize:'70px', color:'yellow' , backgroundColor:'black', border:'white' }} /></div>
                        <h5 className="mt-2 " >76%</h5>
                    </div>
                    <div className="item text-center">
                        <h5>Redux</h5>
                        <div className="mt-2 "><TbBrandRedux color="blueviolet" size={80} /></div>
                        <h5 className="mt-2 ">70%</h5>
                    </div>
                    <div className="item text-center">
                        <h5>Bootstrap</h5>
                        <div className="mt-2 "><SiBootstrap color="blueviolet" size={80} /></div>
                        <h5 className="mt-2 ">73%</h5>
                    </div>
                    <div className="item text-center">
                        <h5>React</h5>
                        <div className="mt-2 "><TbBrandReact size={80} color="aqua" /></div>
                        <h5 className="mt-2 ">70%</h5>
                    </div>
                    <div className="item text-center">
                        <h5>Node Js</h5>
                        <div className="mt-2 "><TbBrandNodejs  size={80} color="green" /></div>
                        <h5 className="mt-2 ">61%</h5>
                    </div>
                    <div className="item text-center">
                        <h5>php</h5>
                        <div className="mt-2 "><SiPhp  size={80} color="blueviolet" /></div>
                        <h5 className="mt-2 ">60%</h5>
                    </div>
                    <div className="item text-center text-center">
                        <h5 >Mysql</h5>
                        <div className="mt-2 "><SiMysql size={80} color="orange" /></div>
                        <h5 className="mt-2 ">79%</h5>
                    </div>
                    <div className="item text-center">
                        <h5>Mongodb</h5>
                        <div className="mt-2 "><DiMongodb  size={80} color="green"/></div>
                        <h5 className="mt2 ">60%</h5>
                    </div>
                    <div className="item text-center">
                        <h5>Git</h5>
                        <div className="mt-2 "><FaGitAlt  size={80}  color="red"/></div>
                        <h5 className="mt-2 ">72%</h5>
                    </div>
                    <div className="item text-center">
                        <h5>Github</h5>
                        <div className="mt-2 "><FaGithubSquare  size={80}  color="blacknpm "/></div>
                        <h5 className="mt-4  ">58%</h5>
                    </div>
                </Carousel>
            </div>
            </Col>
        </Row>
    </Container>

</section>
    )



}