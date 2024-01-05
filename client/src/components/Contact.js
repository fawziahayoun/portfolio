import {  useState } from 'react';
import Axios from "axios";
import css from './Contact.css';
import Heading from './Heading'; 
export default function Contact(){
 
  const [firstName, setFirstName] = useState('');
  const [lasttName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(0);
  const [message, setMessage] = useState('');


  
  
  const handelSubmit = (e) => {
    // e.preventDefault()
 
     Axios.post("http://localhost:3005/create",{
       firstName : firstName,
       lastName : lasttName,
       email : email,
       phone : phone,
       message : message
     }).then(()=> {
       console.log("succes");
     });
   }

 return(
 <section className="section-form container pt-5 pb-5"  id="section-form">
            <div>
            <Heading text='Contact Me'/>

                <div>
        <div className=" container app mt-5  text-center form-container">
    <form className='' onSubmit={handelSubmit}>
    
<div class="mb-3">
  <label for="exampleInput1" class="form-label">Your First Name</label>
  <input type="text" class="form-control" id="exampleInput1"
   placeholder="your first Nane"onChange={(e) => {setFirstName( e.target.value)}}/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput2" class="form-label">You Last Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput2" 
  placeholder="Your Last Name" onChange={(e) => {setLastName( e.target.value)}}/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput3" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput3" 
  placeholder="name@example.com" onChange={(e) => {setEmail( e.target.value)}}/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput4" class="form-label">Your Phone</label>
  <input type="number" class="form-control" id="exampleFormControlInput4" 
  placeholder="Your Phone" onChange={(e) => {setPhone( e.target.value)}}/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">your Massage</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"  placeholder="Your Message"
  onChange={(e) => {setMessage( e.target.value)}} ></textarea>
</div>

<button type='submit'>submit</button>
</form>
</div>


</div>




            </div>


        </section>

       

    )
}