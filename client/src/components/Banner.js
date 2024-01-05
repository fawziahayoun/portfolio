import lol from "../assets/fawzi.jpg"
import { useEffect, useState } from "react";
import './Banners.css'

export default function Banner() {

/*const [ isdeleted, setIsDeleted] = useState(false);
const work = 'developer';
const [text, setText] = useState('')
const [count , setCount] = useState(300 - Math.random() * 100);
const period = 2000;
useEffect(()=> {

    let ticker = setInterval =(() => {

  tick();

    }, count);

    return () => {clearInterval(ticker)};

}, [text]);

const tick = () => {
    
    const upDateText = isdeleted ? work.substring(0, text.length - 1) : work.substring(0, text.length + 1) ;
    setText(upDateText);

    if(isdeleted ){
        setCount(prevCount => prevCount /2);
    }

    if(!isdeleted && text === work){
        setIsDeleted(true)
        setCount(period)
    }
    else if(isdeleted && upDateText === ""){
        setIsDeleted(false)
        setCount(5000)
    };
             <h1>{`Hi I'm`}<span className="wrap">{text}</span></h1>

};*/


      return(
 <section className="banner pt-5 pb-5" id="bunner">
    <div className="container">
    <div className="row     align-items-center
  ">
        <div className="col-sm-12 col-md-6 col-lg-7 text-black-50 pt-5">
            <p className="tagline ">Hey, I'm Fawzi Ahayoun</p>
            <h1 className="type">Full Stack <p >Developer <span >( M e r n - S t a c k )</span></p> </h1>
            <p className="text ">Passionated by technology with strong technical knowledge and
               business background that I accumulate during more than one
           years of experience as full stack developper. My natural
          curiosity and critical mind helped me to ensure the smooth runing of the projects</p>
            
            <a href="#section-form" className=" connect  ">Let's Connect</a>
        
        
        </div>
        <div className="images col-sm-12 col-md-6 col-lg-5 text-center mt-4">
            <img src={lol}  alt="hadder img"/>
        
        
        </div>


        
    </div>
    </div>

 </section>



      )
}