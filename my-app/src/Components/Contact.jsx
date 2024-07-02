import React from 'react'
import './styles.css'
import contactPic from './contactPic.jpg'


function Contact() {
  return (
   <>
   <div>
   
    {/*Navbar of contact page*/}
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
       <h3>Bookstore</h3>
      </div>
     
    </div>
  </div>
  <div className="navbar-center">
    <a className="btn btn-ghost text-xl">Contact us</a>
    
 
  </div>
  <div className="navbar-end">
    <button className="btn btn-ghost btn-circle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </button>
    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
  </div>
</div>


<div className="contact">
<img src={contactPic} className="contactimg"></img>


<div className="contactform ">
 <div className="write"><h1>Contact Us</h1></div>
 <p className="text-blue-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum vitae doloribus magnam incidunt, eum fugit quia, dolor voluptatum dolorem deserunt!</p>
 <div className="form">
        <div className="email">
        <span>Email</span>
        <br/>
       <input type="email" placeholder="Enter your Email" className="w-80 px-3 py-1 border rounded-md outline-none "
       />
       </div>
       <br/>

      <div className="name">
      <span>Your Name</span>
        <br/>
       <input type="text" placeholder="Enter your Name" className=" w-80 px-3 py-1 border rounded-md outline-none"
       />
       </div>
       <br/>
       <div className="msg">
       <span>Your Message</span>
        <br/>
       <input type="text" placeholder="Enter your message" className="w-80 px-3 py-5 border rounded-md outline-none"
       />
       <br/>
       </div>
      
    </div>



</div>
</div>
</div>

  </>
  )
}


export default Contact
