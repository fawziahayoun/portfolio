import oneP from "../assets/p1.png";
import twoP from "../assets/p2.png";
import threeP from "../assets/p3.png";
import FourthP from "../assets/p4.png";
import faivthP from "../assets/p5.png";
import sexth from "../assets/p6.png";
import seventhP from "../assets/p7.png";
import eigthP from "../assets/p8.png";
 import nainthP from "../assets/p13.png"
import tenthP from "../assets/p14.png";
import alevenThP from "../assets/p10.png";
import tweelvthP from "../assets/p11.png";
import sextenththP from "../assets/p16.png";
import sevenththP from "../assets/p17.png";
import css from './Project.css'


import Heading from "./Heading";

import ProjectCard from "./ProjectCard";

export default function Project() {

const projects = [

{
    title:"Learning Css",
    description: "Made By Html And Css",
    img : threeP,
    href :"https://github.com/fawziahayoun/html-css-js-two" ,

},
{
    title:"Info Game",
    description: "Made by Html, Css And Js",
    img : FourthP,
    href :"https://github.com/fawziahayoun/game-info" ,


},
{
    title:"FootBall Info",
    description: "Made by Html, Css And Js",
    img : faivthP,
    href :"https://fawziahayoun.github.io/soccer-top-info/" ,


},
{
    title:"Todo tasks",
    description: "Made by Html, Css And Js",
    img : sexth,
    href :"https://github.com/fawziahayoun/tasks",
},
{
    title:"Use Localstorag",
    description: "Made by Html, Css And Js",
    img : seventhP,
    href :"https://github.com/fawziahayoun/use-localstorage",


},
{
    title:"Get Repo",
    description: "Made by Html, Css And Js",
    img : eigthP,
    href :"https://github.com/fawziahayoun/get-repo",


},
{
    title:"Memory Game",
    description: "Made by Html, Css And Js",
    img : nainthP,
    href :"https://fawziahayoun.github.io/memory-game/",
},
{
    title:"Bootstrap",
    description: "Made by Html, Css And Bootstrap",
    img : tenthP,
    href :"https://github.com/fawziahayoun/bootstrap",


},
{
    title:"HangMan Game",
    description: "Made by Html, Css And Js",
    img : alevenThP,
    href :"https://github.com/fawziahayoun/game-info",
},
{
    title:"Quiz App",
    description: "Made by Html, Css And Js",
    img : tweelvthP,
    href :"https://fawziahayoun.github.io/quiz-app/",


},
{
    title:"Php Crud ",
    description: "Made by Php And Bootstrap",
    img : sextenththP,
    href :"https://github.com/fawziahayoun/php-crud",


},
{
    title:"Ecomerce Website",
    description: "Made by Html, Css, Bootstrap, ReactJs And Fairbase ",
    img : sevenththP,
    href :"https://github.com/fawziahayoun/comercial",


},
{
    title:"crud method app ",
    description: "Made By Html ,Css, Bootstrap, ReactJs, NodeJs ,ExpressJs And Mysql",
    img : oneP,
    href :"https://github.com/fawziahayoun/mrn-crud-app",


},
{
    title:"FullStack App ",
    description: "Made By Html ,Css, Bootstrap, ReactJs, NodeJs ,ExpressJs And Mysql",
    img : twoP,
    href :"https://github.com/fawziahayoun/full-stack-app",

},





];


    return(
        <div className="project pt-3 pb-5">
<div className="container ">
<Heading text='My Projects'/>

        <div className="row   " id="project">
            {
                projects.map((card, index)=> {  
               return(
                <>  
                <ProjectCard key ={index}  {...card}  />
</>
               )

                })
            }
 </div>
 </div>
 </div>
    )
}