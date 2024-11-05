import React from 'react';
import Manager from '../assets/manager.jpg'; 
import './About.css'; 

const About = () => {
  return (
    <div className='mt-5'>
      <div className='p-5 bg-primary mt-5' style={{ width :'100%', height:'300px'}}>
        <h1 className='d-flex justify-content-center mt-5 text-white' style={{ fontSize: '3.5vw'}}><b>About Us</b></h1>
        <div className="d-flex justify-content-center">
         <button className="btn btn-primary border-0 text-white">Home</button>
         <button className="btn btn-primary border-0 text-white">About Us</button>
         </div>
        </div> 
        <div className="col-lg-12">
            <div className="row">
                <div className="col-lg-6 p-5">
                 <div className="mb-4">
                 <h4>MISSION</h4>
                    <ul className="ul">
                        <li>To complete 2150 projects by December 2025</li>
                    </ul>
                 </div>
                    <div className="mt-5">
                    <h4>VISSION</h4>
                    <ul>
                        <li>
                        To become a leading Architectural & Engineering firm in creative designs
                         solution that fulfills everyone's Social, Environmental & Economics needs.
                        </li>
                    </ul>
                    </div>
                    <div className="mt-5"> 
                        <h4>AIM</h4>
                        <ul>
                            <li>Innovative, Responsibility, Commitment</li>
                        </ul>
                    </div>

                </div>
                <div className="col-lg-6 p-5">
                 <div className="mb-4">
                 <h4>Our Approach: Crafting Excellence in Every Detail</h4>
                    <ul className="ul">
                        <li>Was associated with ABC group Aurangabad Draftsman during 2013-2015</li>
                       <li> Was associated with CRV Corporation Aurangabad J.E during 2010-2013</li>
                       <li>Was associated with Patil & structural associates as structural engineer 2015-2018</li>
                        <li>Was associated with Excelize Pvt Ltd 2018-2019.</li>
                    </ul>
                 </div>
                </div>
            </div>

        </div>
      <div className="col-lg-12">
      <div className="row">
        <div className="col-lg-6 mt-5">
          <img src={Manager} alt="Dental Health" className="w-100 h-100" />
        </div>
        <div className="col-lg-6 mt-5">
          <div>
            <h4 className="WecomeTag d-flex justify-content-center mt-5" ><b>About Us</b></h4>
            <h1 className="mt-3 d-flex justify-content-center" style={{ fontSize: '2.5vw', color: 'rgb(28, 28, 87)' }}>
              <b>We are providing best services</b>
            </h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis porro repellat, aut est nihil quam aperiam cum tenetur excepturi voluptatum vero libero, sunt aliquid asperiores fugiat at modi eaque deserunt.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, fuga, sed aperiam quibusdam earum id vel ratione cum debitis eveniet ducimus totam aut consequuntur quos sint ab quasi ut incidunt.</p>
            <button className="btn btn-lg text-white bookApointment w-25 border-0">READ MORE</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
