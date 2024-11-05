import React from "react";
const Contact = () => {
    return (
        <div>
        <div className='p-5 bg-primary mt-5' style={{ width :'100%', height:'300px'}}>
        <h1 className='d-flex justify-content-center mt-5 text-white mt-5' style={{ fontSize: '3.5vw'}}><b>Contact Us</b></h1>
         <div className="d-flex justify-content-center">
         <button className="btn btn-primary border-0 text-white">Home</button>
         <button className="btn btn-primary border-0 text-white">Contact Us</button>
         </div>
        </div> 
        <div className="col-lg-12 p-5">
        <h4>Contact Information</h4>            
        <p>VB Designs is a mid-size architecture firm based Pune. Established in 2010 by founder and principal architect Vikesh Bhurat, a practicing architect since 2007, the experienced VB Designs team comprises 5 design professionals and has worked exclusively in different projects.</p>       
            <div className="row">
                <div className="col-lg-3 p-5">
                 <div className="mb-4">
                 <p>Address</p>    
                 <p>Head office:- 4, Second Floor, NISHA PRIDE , Malabar Gold, Mondha Naka, Jalna Road, Chhatrapati Sambhajinagar 431001</p> 
                 </div>
                </div>
                <div className="col-lg-3 p-5">
                 <div className="mb-4">
                 <p>Phone No:</p>
                 <p>+91-9730921825</p>
                 </div>
                </div>
                <div className="col-lg-3 p-5">
                 <div className="mb-4">
                 <p>Email:</p>
                 <p>amazegroup11@gmail.com</p>
                 </div>
                </div>
                <div className="col-lg-3 p-5">
                 <div className="mb-4">
                 <p>Website:</p>
                 <p>www.amazegroup.com</p>
                 </div>
                </div>
            </div>

        </div>

        </div>
    );
};
export default Contact; 
