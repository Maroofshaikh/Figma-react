import React, { useState } from 'react';
import "./Home.css"
import { FaInstagram } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";
import logo from "./img/logo.jpg"
import scroll from "./img/scroll.jpg"
import scroll2 from "./img/scroll2.jpg"
import scroll3 from "./img/scroll3.jpg"
import scroll4 from "./img/scroll4.jpg"
import s5 from "./img/s5.jpg"
import s6 from "./img/s6.jpg"
import s7 from "./img/s7.jpg"
import s8 from "./img/s8.jpg"
import s9 from "./img/s9.jpg"
import s10 from "./img/s10.jpg"
import s11 from "./img/s11.jpg"
import a1 from "./img/a1.jpg"
import a2 from "./img/a2.jpg"
import a3 from "./img/a3.jpg"
import a4 from "./img/a4.jpg"
import a5 from "./img/a5.jpg"
import a6 from "./img/a6.jpg"
import b1 from "./img/b1.jpg"
import h1 from "./img/h1.jpg"
import { CiYoutube } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { GiPaperPlane } from "react-icons/gi";


function Navbar() {

    const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
  };

  const slides = [
    {
      title: 'Lessons and insights from 8 years',
      text: 'Where to grow your business as a photographer: site or social media?',
      buttonText: 'Register',
      image: {
        src: 'https://www.pexels.com/photo/computer-coding-web-development-1698315/',
        alt: 'Image for slide 1',
      },
    },
    {
      title: 'Slide 2',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      buttonText: 'Learn More',
      image: {
        src: 'https://www.pexels.com/photo/man-using-laptop-1181610/',
        alt: 'Image for slide 2',
      },
    },
    {
      title: 'Slide 3',
      text: 'Nulla vitae elit libero, a pharetra augue.',
      buttonText: 'Get Started',
      image: {
        src: 'https://www.pexels.com/photo/businessman-using-laptop-at-the-office-2475356/',
        alt: 'Image for slide 3',
      },
    },
  ];
  return (
    <>
    <nav className="navbar">
      <div className="logo" style={{ marginLeft:"10em", marginRight:"10em" }}>
        <img src={h1} alt="Logo" style={{ height:"2.5em", width:"4em" }} />
      </div>
      <ul className="nav-links">
        <li style={{ marginRight:"2em" }}>
          <a href="#">Home</a>
        </li>
        <li  style={{ marginRight:"2em" }}>
          <a href="#">Service</a>
        </li>
        <li style={{ marginRight:"2em" }}>
          <a href="#">Feature</a>
        </li>
        <li style={{ marginRight:"2em" }}>
          <a href="#">Product</a>
        </li>
        <li style={{ marginRight:"2em" }}>
          <a href="#">Testimonial</a>
        </li>
        <li style={{ marginRight:"2em" }}>
          <a href="#">FAQ</a>
        </li>
      </ul>
      <div className="buttons" style={{ marginRight:"10em" }}>
        <button className="btn">Login</button>
        <button className="btn1">Sign up</button>
      </div>
    </nav>

    <div class="container17  count17" style={{ marginTop:"6em" }}>
        <div class="connt">
        <h1 style={{ marginBottom:"-10px" }}>Lessons and insights</h1>
        <h2 style={{ marginBottom:"-10px" }}>from 8 years</h2>
        <p>Where to grow your business as a photographer: site or social media?</p>
        <a href="#" class="button17">Register</a>
        </div>
        <div className="image12">
       <img src={scroll} style={{ height:"20em", width:"30em" }} />
     </div>
    </div>

    <div class="pagination">
        <div class="dot active"></div>
        <div class="dot"></div>
        <div class="dot"></div>
    </div>
<div className="clients" style={{ marginTop:"3em" }}>
<h2>Our Clients</h2>
<p>We have been working with some Fortune 500+ clients</p>
<div className="logos" style={{ display:"flex", justifyContent:"space-around", marginLeft:"10em", marginRight:"10em", marginTop:"5em" }}>
  <div>
    <img src={a1} alt="Google Logo" />
  </div>
  <div>
    <img src={a2} alt="Apple Logo" />
  </div>
  <div>
    <img src={a3} alt="Facebook Logo" />
  </div>
  <div>
    <img src={a4} alt="Microsoft Logo" />
  </div>
  <div>
    <img src={a5} alt="Amazon Logo" />
  </div>
  <div>
    <img src={a6} alt="Twitter Logo" />
  </div>
  <div>
    <img src={a3} alt="Netflix Logo" />
  </div>
</div>
</div>
<div className="App11" style={{ marginTop:"10em" }}>
      <div className="header11">
        <h1>Manage your entire community</h1>
        <h2>in a single system</h2>
        <p>Who is Nextcent suitable for?</p>
      </div>
      <div className="content">
        <div className="card">
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm0 6c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
          </div>
          <h3>Membership</h3>
          <h3>Organisations</h3>
          <p>Our membership management software provides full automation of membership renewals and payments</p>
        </div>
        <div className="card">
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 11v6h8v-6h-8zm-1.5 3c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM12 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
          </div>
          <h3>National</h3>
          <h3>Associations</h3>
          <p>Our membership management software provides full automation of membership renewals and payments</p>
        </div>
        <div className="card">
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.65 18.59c-.21.35-.51.67-.85.95-.34.28-.72.49-1.13.66-.41.17-.86.27-1.34.33-.48.06-.98.07-1.48.04-.5-.03-1-.08-1.5-.16-.5-.08-1-.19-1.5-.34-.5-.15-1-.34-1.5-.57-.5-.23-1-.49-1.5-.78-.5-.29-1-.59-1.5-.92-.5-.33-1-.68-1.5-1.05-.5-.37-1-.77-1.5-1.19-.5-.42-1-.86-1.5-1.33-.49-.47-1-.97-1.5-1.5-.5-.53-1-1.07-1.5-1.64-.5-.57-1-1.16-1.5-1.78-.5-.62-1-1.25-1.5-1.9-.5-.65-1-1.32-1.5-2-.5-.68-1-1.37-1.5-2.08-.5-.71-1-1.44-1.5-2.18-.5-.74-1-1.49-1.5-2.27-.5-.78-1-1.57-1.5-2.39-.5-.82-1-1.64-1.5-2.49-.5-.85-1-1.7-1.5-2.57-.5-.87-1-1.75-1.5-2.65-.5-.9-1-1.8-1.5-2.7-.5-.9-1-1.81-1.5-2.74-.5-.93-1-1.85-1.5-2.8-.5-.95-1-1.92-1.5-2.91-.5-.99-1-1.99-1.5-3.01-.5-1.02-1-2.04-1.5-3.08-.5-1.04-1-2.08-1.5-3.14-.49-1.06-1-2.13-1.5-3.22-.5-1.09-1-2.18-1.5-3.3-.5-1.12-1-2.24-1.5-3.38-.47-1.14-.96-2.28-1.5-3.44-.53-1.16-1-2.33-1.5-3.52-.49-1.19-1-2.38-1.5-3.6-.5-1.22-1-2.45-1.5-3.7-.5-1.25-1-2.5-1.5-3.76-.5-1.26-1-2.53-1.5-3.81-.5-1.28-1-2.56-1.5-3.85-.5-1.29-1-2.58-1.5-3.89-.5-1.3-1-2.6-1.5-3.92-.5-1.32-1-2.64-1.5-3.98-.5-1.34-1-2.68-1.5-4.04-.49-1.36-1-2.72-1.5-4.09-.49-1.37-1-2.74-1.5-4.12-.5-1.38-1-2.75-1.5-4.19-.5-1.44-1-2.89-1.5-4.35-.5-1.46-1-2.92-1.5-4.4-.5-1.48-1-2.96-1.5-4.45-.5-1.49-1-2.98-1.5-4.52-.5-1.54-1-3.09-1.5-4.67-.5-1.58-1-3.16-1.5-4.76-.5-1.58-1-3.17-1.5-4.78-.5-1.59-1-3.19-1.5-4.81-.5-1.6-1-3.21-1.5-4.83-.5-1.62-1-3.24-1.5-4.87-.5-1.63-1-3.26-1.5-4.9-.5-1.64-1-3.28-1.5-4.93-.5-1.65-1-3.3-1.5-4.97-.5-1.66-1-3.33-1.5-5-.5-1.67-1-3.34-1.5-5.02-.48-1.68-1-3.35-1.5-5.04-.5-1.69-1-3.37-1.5-5.07-.5-1.7-1-3.39-1.5-5.11-.5-1.71-1-3.42-1.5-5.14-.49-1.72-1-3.44-1.5-5.17-.5-1.73-1-3.46-1.5-5.2-.5-1.74-1-3.48-1.5-5.24-.49-1.75-1-3.5-1.5-5.27-.5-1.76-1-3.52-1.5-5.3-.5-1.77-1-3.54-1.5-5.33-.5-1.78-1-3.56-1.5-5.4-.5-1.79-1-3.58-1.5-5.44-.5-1.8-1-3.6-1.5-5.47-.5-1.81-1-3.62-1.5-5.5-.5-1.82-1-3.64-1.5-5.54-.5-1.83-1-3.66-1.5-5.57-.5-1.84-1-3.67-1.5-5.6-.5-1.85-1-3.69-1.5-5.64-.5-1.86-1-3.71-1.5-5.67-.5-1.87-1-3.73-1.5-5.71-.49-1.88-1-3.76-1.5-5.74-.5-1.89-1-3.79-1.5-5.77-.5-1.9-1-3.81-1.5-5.8-.5-1.91-1-3.83-1.5-5.84-.5-1.92-1-3.85-1.5-5.87-.49-1.93-1-3.87-1.5-5.9-.5-1.94-1-3.9-1.5-5.93-.5-1.95-1-3.92-1.5-5.96-.49-1.96-1-3.94-1.5-5.98-.5-1.97-1-3.96-1.5-6-.5-2-1-4-1.5-6-.5-2-1-4-1.5-6-.5-2-1-4-1.5-6-.49-2-1-4-1.5-6-.5-2-1-4-1.5-6-.5-2-1-4-1.5-6-.5-2-1-4-1.5-6-.5-2-1-4-1.5-6-.5-2-1-4-1.5-6-.49-2-1-4-1.5-6-.5-2-1-4-1.5-6-.5-2-1-4-1.5-6-.5-2-1-4-1.5-6-.49-2-1-4-1.5-6-.5-2-1-4-1.5-6
           "/></svg>
          </div>
          <h3>Clubs And</h3>
          <h3>Groups</h3>
          <p>Our membership management software provides full automation of membership renewals and payments</p>
        </div>
      </div>
    </div>
     <div className="container12" style={{ marginLeft:"5em", marginRight:"5em" }}>
         <div className="image12">
       <img src={scroll2} alt="people using a computer" style={{ marginLeft:"3em" }} />
     </div>
     <div className="content12">
       <h1>The unseen of spending three years at Pixelgrade</h1>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
       <button className="learn-more12">Learn More</button>
     </div>
    
   </div>
   <div className="container13">
   <div className="content13" style={{ marginLeft:"15em" }}>
     <h1>Helping a local<br />business reinvent itself</h1>
     <p>We reached here with our hard work and dedication</p>
   </div>
   <div className="stats13">
  <div className="stats-row" style={{ display: "flex", flexWrap: "wrap" }}>
    <div className="stat13" style={{ display: "flex", flexDirection: "row", flex: "1 1 50%" }}>
      <img src={s8} alt="Members" />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h2>2,245,341</h2>
        <p>Members</p>
      </div>
    </div>
    <div className="stat13" style={{ display: "flex", flexDirection: "row", flex: "1 1 50%" }}>
      <img src={s9} alt="Event Bookings" />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h2>828,867</h2>
        <p>Event Bookings</p>
      </div>
    </div>
  </div>
  <div className="stats-row" style={{ display: "flex", flexWrap: "wrap" }}>
    <div className="stat13" style={{ display: "flex", flexDirection: "row", flex: "1 1 50%" }}>
      <img src={s10} alt="Clubs" />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h2>46,328</h2>
        <p>Clubs</p>
      </div>
    </div>
    <div className="stat13" style={{ display: "flex", flexDirection: "row", flex: "1 1 50%" }}>
      <img src={s11} alt="Payments" />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h2>1,926,436</h2>
        <p>Payments</p>
      </div>
    </div>
  </div>
</div>

   </div>
 


<div className="container12"  style={{ marginLeft:"5em", marginRight:"7em" }}>
         <div className="image12">
       <img src={scroll3} alt="people using a computer" style={{ height:"30em", width:"40em", marginTop:"5em", marginLeft:"5px", marginRight:"10px" }}/>
     </div>
     <div className="content12">
       <h1>How to design your site footer like we did</h1>
       <p>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida. </p>
       <button className="learn-more12">Learn More</button>
     </div>
    
   </div>


<div className="container12">
<div className="image12">
<img src={scroll4} alt="people using a computer" style={{ height:"20em", width:"30em", marginLeft:"5em" }} />
</div>
<div className="content12" style={{ width:"55em" }}>
<p>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
<h2 style={{ color:"green" }}>Tim Smith</h2>
<p>British Dragon Boat Racing Association</p>
<div style={{ display: "flex", gap: "5em", transform: "scale(0.6)", transformOrigin: "0 0" }}>
<div >
    <img src={a1} alt="Google Logo" />
  </div>
  <div>
    <img src={a2} alt="Apple Logo" />
  </div>
  <div>
    <img src={a3} alt="Facebook Logo" />
  </div>
  <div>
    <img src={a4} alt="Microsoft Logo" />
  </div>
  <div>
    <img src={a5} alt="Amazon Logo" />
  </div>
  <div>
    <img src={a6} alt="Twitter Logo" />
  </div>
  <div>
    <img src={a3} alt="Netflix Logo" />
  </div>
  <div style={{ marginRight:"30em", color:"green", fontSize: "16px", fontWeight: "bold", whiteSpace: "nowrap",  transform: "scale(1.9)", transformOrigin: "0 0" }}>
    Meet All Customers &rarr;
  </div>
</div>
<button className="learn-more12">Learn More</button>
</div>

</div>
   <div className="container14">
      <h1 className="title14">Caring is the new marketing</h1>
      <p className="subtitle14">
        The Nexcent blog is the best place to read about the latest
        membership insights, trends and more. See who’s joining the community,
        read about how our community are increasing their membership income and
        lot’s more.
      </p>
      <div className="cards14">
        <div className="card14">
          <img
            className="card-img14"
            src={s5}
            alt="Woman on sofa"
          />
          <div className="card-content14">
            <h3>Creating Streamlined Safeguarding Processes with OneRen</h3>
            <a className="card-button14" href="#">
              Readmore →
            </a>
          </div>
        </div>
        <div className="card14">
          <img
            className="card-img14"
            src={s6}
            alt="Person working on a laptop"
          />
          <div className="card-content14">
            <h3>
              What are your safeguarding responsibilities and how can you
              manage them?
            </h3>
            <a className="card-button14" href="#">
              Readmore →
            </a>
          </div>
        </div>
        <div className="card14">
          <img
            className="card-img14"
            src={s7}
            alt="Person working on laptop with a plant beside"
          />
          <div className="card-content14">
            <h3>
              Revamping the Membership Model with Triathlon Australia
            </h3>
            <a className="card-button14" href="#">
              Readmore →
            </a>
          </div>
        </div>
      </div>
    </div>
    

    <div className="container15">
    <h1 className="heading15">Pellentesque suscipit fringilla libero eu.</h1>
    <button className="button15">Get a Demo →</button>
  </div>

<div className="container16">
<div className="footer-content16">
  <div className="footer-section16">
  <img  src={b1} alt='logo' ></img>
    <p>Copyright © 2020 Nexcent Itd.</p>
    <p>All rights reserved</p>
    <div className="social-icons16" style={{ marginLeft:"-8em" }}>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"><FaInstagram /></i>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-dribbble"><LuTwitter /></i>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter"><CiYoutube /></i>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter"><FaWhatsapp /></i>
      </a>
    </div>
  </div>
  <div className="footer-section16">
    <h3>Company</h3>
    <ul>
      <li><a href="#">About us</a></li>
      <li><a href="#">Blog</a></li>
      <li><a href="#">Contact us</a></li>
      <li><a href="#">Pricing</a></li>
      <li><a href="#">Testimonials</a></li>
    </ul>
  </div>
  <div className="footer-section16">
    <h3>Support</h3>
    <ul>
      <li><a href="#">Help center</a></li>
      <li><a href="#">Terms of service</a></li>
      <li><a href="#">Legal</a></li>
      <li><a href="#">Privacy policy</a></li>
      <li><a href="#">Status</a></li>
    </ul>
  </div>
  <div className="footer-section16">
    <h3>Stay up to date</h3>
    <form className='form16'>
      <input type="email" placeholder="Your email address" />
      <button type="submit" className='button16'>
        <i className="fas16 fa-paper-plane"><GiPaperPlane /></i>
      </button>
    </form>
  </div>
</div>
</div>
</>
  );
}

export default Navbar;
