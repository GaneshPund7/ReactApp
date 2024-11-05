import React from 'react';
import Home1 from '../assets/IMG1.jpg';  
import Home2 from '../assets/verver.jpg';  
import ourWork1 from '../assets/ourWork1.jpg';  
import ourWork2 from '../assets/ourWork2.jpg';  
import ourWork3 from '../assets/ourWork3.jpg';  
import './Home.css'; 
import Manager from '../assets/manager.jpg'; 


const Home = () => {
  return (
    <div className="container-fluid p-0">
      {/* Home Imgs */}
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
              <div className='col-lg-12 mt-5'>
                <div className='row'>
                <div className='col-lg-5 d-flex justify-content-center align-items-center mt-5' style={{ height: '100%' }}>
  <div className="text-center">
    <h4 className="WecomeTag"><b>About Us</b></h4>
    <h1 className="mt-3" style={{ fontSize: '2.5vw', color: 'rgb(28, 28, 87)' }}>
      <h1 style={{ fontSize: '5.5vw', color: 'rgb(28, 28, 87)' }}><b>Proxima</b></h1>
    </h1>
    <p>Retail and office axis Proxima</p>
    <p>Kasarvadi</p>
    <p>Nashik Phata area</p>
    <button className="btn btn-primary text-white bookApointment rounded-pill">View Our work</button>
  </div>
</div>
                  <div className='col-lg-7'>
                    <img src={Home1} className="d-block w-100" alt="Slide 1" style={{ maxHeight: '100%', objectFit: 'cover' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
              <div className='col-lg-12'>
                <div className='row'>
                <div className='col-lg-5 d-flex justify-content-center align-items-center mt-5' style={{ height: '100%' }}>
  <div className="text-center">
    <h4 className="WecomeTag"><b></b></h4>
    <h1 className="mt-3" style={{ fontSize: '2.5vw', color: 'rgb(28, 28, 87)' }}>
      <h1 style={{ fontSize: '5.5vw', color: 'rgb(28, 28, 87)' }}><b>Verana</b></h1>
    </h1>
    <p>Retail and office axis Proxima</p>
    <p>Kasarvadi</p>
    <p>Nashik Phata area</p>
    <button className="btn btn-primary text-white bookApointment rounded-pill">View Our work</button>
  </div>
</div>
                  <div className='col-lg-7'>
                    <img src={Home2} className="d-block w-100" alt="Slide 2" style={{ maxHeight: '100%', objectFit: 'cover' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Add more carousel items as needed */}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* About us  data */}
      <div className="col-lg-12 ">
      <div className="row">
        <div className="col-lg-5">
          <img src={Manager} alt="Dental Health" className="w-100 h-100" />
        </div>
        <div className="col-lg-7 mt-5">
          <div>
            <h4 className="WecomeTag d-flex justify-content-start"><b>About Us</b></h4>
            <h1 className="mt-3 d-flex justify-content-center" style={{ fontSize: '2vw', color: 'rgb(28, 28, 87)' }}>
              <b>We are the best Interior, Exterior & Architecture Firm</b>
            </h1>
            <p style={{ fontSize: '1.5vw'}}>Our design process is the expression of the dialog between client and architect; a willingness to explore possibilities with the realization that there is never a single answer or solution. Rather, there is the elegant solution, the one that delights and satisfies.</p>
            <p style={{ fontSize: '1.5vw'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, fuga, sed aperiam quibusdam earum id vel ratione cum debitis eveniet ducimus totam aut consequuntur quos sint ab quasi ut incidunt.</p>
            <button className="btn btn-lg text-white bookApointment w-25 border-0">READ MORE</button>
          </div>
        </div>
      </div>
    </div>
    <div className=''>
     <div className='col-lg-12 p-5'>
      <div className='row'>
        <div className='col-lg-3 p-2'>
          <h1>Our Specialities</h1>
        </div>
        <div className='col-lg-8 mt-4 ms-4'>
           <p style={{ fontSize: '1.5vw'}}>
          <ul className=""><li>Knowledgeable team of professional</li></ul></p>
        </div>
      </div>
     </div>
    </div>
    <div>
    <div className='col-lg-12'>
      <div className='row'>
        <div className='col-lg-4 p-3'>
        <img src={ourWork1} alt='work'></img>
          <h3>Our Services</h3>
          <ul style={{ fontSize: '1.5vw'}}>
           <li> Architectural Planning</li>
           <li> 3D design</li>
           <li>Structural design</li>
           <li>Interior design</li>
           <li>Surveying</li>
           <li>Counsulting Enginee </li>
          </ul>
        </div>
        <div className='col-lg-4 p-3'>
        <img src={ourWork2} alt='work'></img>
        <h3>VISSION</h3>
           <p style={{ fontSize: '1.5vw'}}><li>To become a leading Architectural & Engineering firm in creative designs solution that fulfills everyone's Social, Environmental & Economics needs.</li></p>
        </div>
        <div className='col-lg-4 p-3'>
        <img src={ourWork3} alt='work'></img>
        <h3>MISSION</h3>
           <p style={{ fontSize: '1.5vw'}}><li>To complete 2150 projects by December 2025.</li></p>
        </div>
      </div>
     </div>
    </div>
    </div>
    
  );
};

export default Home;
