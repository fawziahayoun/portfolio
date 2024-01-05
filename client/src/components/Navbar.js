import { useState } from 'react'
import css from './Navbar.css'
import { TiSocialFacebook, TiSocialLinkedin} from "react-icons/ti";
import { FaGithub } from "react-icons/fa";

import { TbDeviceDesktopHeart } from "react-icons/tb";

export default function  Navbar() {
    const [active , setActive] = useState('home');
    const [scrolled , setScrolled] = useState('true');

    const  onscrolls = () => {
         if (window.scrollY > 50) {
            setScrolled('false')
         } else {
            setScrolled('false')
         }


         window.addEventListener("scroll", onscrolls);
         return () => window.removeEventListener("scroll", onscrolls);

    }


   const   updateLink = (value) => {
      setActive(value)

    }


    return (

        <div>
            <nav className={scrolled ? "scrolled  navbar fixed-top navbar-expand-lg text-light" : " navbar navbar-expand-lg "} >
  <div className="container-fluid">
    <a className="navbar-brand  text-warning fs-2 fw-bold" href="#">Fawzi <TbDeviceDesktopHeart color='red' /></a>
    <button className="navbar-toggler bg-light text-light " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon bg-light"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a   aria-current="page" href="#bunner" className={ active === 'home' ? " active nav-link text-info " : "nav-link no-active text-light"} onClick={() => updateLink('home')} >Bunner</a>
        </li>
        <li className="nav-item ">
          <a className={ active === 'Education' ? " active nav-link text-info" : "nav-link no-active text-light"}  href="#education" onClick={() => updateLink('Education')}>Education</a>
        </li>
        <li className="nav-item">
        <a href='#skills'   className={ active === 'skills' ? " active nav-link text-info " : "nav-link no-active text-light"}  onClick={() => updateLink('skills')}>Skills</a>
          
        </li>
        <li className="nav-item">
        <a href='#projects'   className={ active === 'projects' ? " active nav-link text-info " : "nav-link no-active text-light"}  onClick={() => updateLink('projects')}>Projects</a>
          
        </li>
        
        
        
       
        
        
      </ul>
      
        <div className='social'>
      <span className='face'><a href=''><  TiSocialFacebook  /></a></span>
      <span className='git'><a href='https://github.com/fawziahayoun'><FaGithub/></a></span>
      <span className='lin'><a href='https://www.linkedin.com/in/fawzi-ahayoun-6936a0288/'><TiSocialLinkedin/></a></span></div>
      

      <a href='#section-form' className='connect'>Let's Connect</a>


      
      
      

     
    </div>
  </div>
</nav>
        </div>
    )

}