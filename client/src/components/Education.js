import "./Skills.css"
import { IoSchoolSharp } from "react-icons/io5";
import { BsPersonWorkspace } from "react-icons/bs";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Heading from "./Heading";
import './Education.css'
export default function Educationpart() {


    return(
        <div className="education  pt-5 pb-5"  id="education">
        <div className="container  ">
        <Heading text='My Education & Expreanses'/>

           
           <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work "
    contentStyle={{ background: '#fff', color: '#777',border:'black' }}
    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
    date="2016 - 2017"
    iconStyle={{ background: '#052c65', color: '#fff' , border:'black',}}
    icon={<IoSchoolSharp />}
  >
    <h3 className="vertical-timeline-element-title">Baccalaureate</h3>
    <h5 className="vertical-timeline-element-subtitle">jabir ibn hayyan</h5>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#fff', color: '#777' }}
    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
    date="2010 - 2011"
    iconStyle={{ background: '#052c65', color: '#fff' }}
    icon={<IoSchoolSharp />}
  >
    <h3 className="vertical-timeline-element-title">Bachelor’s Degree in Fundamental
Studies</h3>
    <h5 className="vertical-timeline-element-subtitle">University Mohamed V</h5>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#fff', color: '#777' }}
    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
    date="2023/4 - 2023/8"
    iconStyle={{ background: '#ffc107', color: '#fff' }}
    icon={<BsPersonWorkspace />}
  >
    <h3 className="vertical-timeline-element-title">Full Stack Web Developer</h3>
    <h5 className="vertical-timeline-element-subtitle">Freelance</h5>
    <p>
    1.Coding in Nodejs (Linux, Nginx, MongoDb, and
ExpressJs) environment.
2.Developing responsive interfaces using Bootstrap and
utilizing SASS for CSS.
3.Developing NodeJS, ExpressJs, Mongodb, HTML, CSS,
JavaScript, and ReactJs applications according to project
requirements
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#fff', color: '#777' }}
    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
    date="2021- 2023"
    iconStyle={{ background: '#052c65', color: '#fff' }}
    icon={<IoSchoolSharp />}
  >
    <h3 className="vertical-timeline-element-title">Technician Specialise</h3>
    <h5 className="vertical-timeline-element-subtitle">Miage</h5>
    <p>
    IT development
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: '#fff', color: '#777' }}
    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
    date="2023/7 - 2023/10"
    iconStyle={{ background: '#ffc107', color: '#fff' }}
    icon={<BsPersonWorkspace />}
  >
    <h3 className="vertical-timeline-element-title">Full Stack Web Developer</h3>
    <h5 className="vertical-timeline-element-subtitle">Center Privileg(CDI)</h5>
    <p>
    1.Coding In Nodejs(Linux, mysql , and Express Js)
environment.
2.Developing resonsive interfacesvusing Bootstrap and
Utilizing SASS for Css.
3.Developing NodeJs,ExpressJs,Mysql,HTML,CSS,
JavaScript ans ReactJs application according to project
requirements.
4.web Hosting Software: Nginx, Vercel, Netlify, Render,
Heroku, OVH, DigitalOcean, Mongodb Atlas
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>    

                  </div>
                  </div>

          


    )
}