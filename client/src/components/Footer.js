import React from 'react';
import './footer.css'
import { TiSocialYoutube,TiSocialLinkedin,TiSocialTwitter,TiSocialFacebook  } from "react-icons/ti";
import { FaHeart } from "react-icons/fa";

import { FaGithub } from "react-icons/fa";
import { FaH, FaPhoneVolume } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";




export default function Footer() {
  return (
    
    <div className='row footer text-center'>

        
        <div className='col-lg-4 col-md-6  col-sm-12  mb-4'>
        <span ><a href=''><  TiSocialFacebook className='facebook' style={{color: '#1877f2', fontSize: '50px', backgroundColor:'#b9b9b9', padding:'5px', marginRight:'10px' ,borderRadius:'4px', cursor:'pointer'}}  /></a></span>
      <span className='youtube'><a href=''><TiSocialYoutube style={{color: '#ff0000', fontSize: '50px', backgroundColor:'#b9b9b9', padding:'5px', marginRight:'10px' ,borderRadius:'4px' , cursor:'pointer'}}/></a></span>
      <span className='github'> <a href='https://github.com/fawziahayoun'><FaGithub style={{color: 'black', fontSize: '50px', backgroundColor:'#b9b9b9', padding:'5px',marginRight:'10px' , cursor:'pointer', borderRadius:'4px'}}/></a></span>
      <span className='linkedin'><a href='https://www.linkedin.com/in/fawzi-ahayoun-6936a0288/'><TiSocialLinkedin style={{color: '#2196f3', fontSize: '50px', backgroundColor:'#b9b9b9', padding:'5px' ,borderRadius:'4px' , cursor:'pointer'}} /></a></span>


        </div>
        <div className='col-lg-4 col-md-6 col-sm-12 mb-2  '>
            <p>Made With <span><FaHeart  size={25}  color="red"/></span> By Fawzi Ahayoun</p>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12  '>
            <div className='mb-2'   >
                <span className='me-2' >< FaPhoneVolume size={26}  color="#2196f3" /></span>
                <span   >06 98 71 23 66 </span>


            </div>
            <div className=' '>
                <span className='me-1 ' ><  IoLocationSharp size={35}  color="#2196f3"/></span>
                <span >Karia Sale Morocco</span>


            </div>
        </div>
      
    </div>

  )
}
