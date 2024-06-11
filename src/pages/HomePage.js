import React from 'react';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="home-page container text-light">
            <div className='row start-block container-fluid'>
                <div className='col justify-content-lg-start'>
                    <h1><span class="gradient-text">Dive</span> Into The Depths <br/> Of <span class="gradient-text"> Virtual Reality</span></h1>
                    <p className="intro-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore 
                        nisl tincidunt eget. Lectus mauris eros in vitae .
                    </p>
                    <button className="filled-button" onClick={() => window.location.href='/about'}>
                        BUILD YOUR WORLD
                    </button>
                </div>
                <div className='col justify-content-lg-end d-flex'>
                    <div className='start-img-block'>
                        <img className="start-img" src="./img/start-img.png" alt="Logo"/>                
                    </div>
                </div>
            </div>
            <div className='start-contacts-block row container-fluid'>
                <div className='col justify-content-lg-start d-flex align-items-center border-end' style={{gap: '5%', paddingRight: '15px'}}>
                    <img className="logo" src="./img/Location-icon.svg" alt="Logo" style={{width: '50px', height: '50px'}}/>
                    <div>
                        <h2>Pay Us a Visit</h2>
                        <p>Union St, Seattle, WA 98101, United States</p>
                    </div>
                </div>
                <div className='col justify-content-lg-center d-flex align-items-center border-end' style={{gap: '5%', paddingLeft: '15px'}}>
                    <img className="logo" src="./img/phone-call.svg" alt="Logo" style={{width: '50px', height: '50px'}}/>
                    <div>
                        <h2>Give Us a Call</h2>
                        <p>(110) 1111-1010</p>
                    </div>
                </div>
                <div className='col justify-content-lg-end d-flex align-items-center' style={{gap: '5%', paddingLeft: '15px'}}>
                    <img className="logo" src="./img/mail.svg" alt="Logo" style={{width: '50px', height: '50px'}}/>
                    <div>
                        <h2>Send Us a Message</h2>
                        <p>Contact@HydraVTech.com</p>
                    </div>
                </div>
            </div>
            <div className='about-block row container-fluid mt-6 d-flex'>
                <div className='col justify-content-lg-start'>
                    <h2 className='fw-bold fs-1'>
                        INTRODUCTION
                    </h2>
                    <h2 className='fw-light'>
                        TO HYDRA VR
                        <img className="about-img hide" src="./img/arrow.svg" alt="arrow" style={{width: '228px', height: '100px', paddingLeft:'10%'}}/>                
                    </h2>
                </div>
                <div className='col justify-content-lg-end d-flex '>
                    <p>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat  nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo  quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>
                </div>
            </div>
            <div className='about-block row container-fluid mt-6'>
                <div className='col justify-content-lg-start'>
                    <img className="about-img" src="./img/about-block.png" alt="howto"/>                
                </div>
                <div className='col justify-content-lg-end d-flex flex-column align-self-center'>
                    <h2 className='fw-bold'>
                        ABOUT
                    </h2>
                    <h2 className='fw-light'>
                        HYDRA VR
                    </h2>
                    <p className='pt-4'>
                    Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi n tempor.
                    </p>
                    <button className="filled-button mt-4 w-50" onClick={() => window.location.href='/how-to'}>
                        LET’S GET IN TOUCH
                    </button>
                </div>
            </div>
            <div className='about-block row container-fluid mt-6 d-flex'>
                <div className='col justify-content-lg-start'>
                    <h2 className='fw-bold fs-1'>
                        WHY BUILD
                    </h2>
                    <h2 className='fw-light fs-2'>
                        WITH HYDRA?
                        <img className="about-img hide" src="./img/arrow.svg" alt="arrow" style={{width: '228px', height: '100px', paddingLeft:'10%'}}/>                
                    </h2>
                </div>
                <div className='col justify-content-lg-end d-flex '>
                    <p>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat  nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo  quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>
                </div>
            </div>
            <div className='cards-block row container-fluid mt-6'>
                <div className='card col text-light d-flex'>
                    <div className='align-self-center mt-3'>
                        <img className="card-img" src="./img/card1.png" alt="card1" style={{width: '228px', height: '100px'}}/>
                    </div>
                    <h2 className='mt-3 align-self-center'>SIMULATION</h2>
                    <hr className='w-75 align-self-center'/>
                    <p>Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.</p>
                    <button className="filled-button mt-3" onClick={() => window.location.href='/services'}>
                        TRY IT NOW
                    </button>
                </div>
                <div className='card col text-light'>
                    <div className='align-self-center mt-3'>
                        <img className="card-img" src="./img/card2.png" alt="card1" style={{width: '228px', height: '100px'}}/>
                    </div>
                    <h2 className='mt-3 align-self-center'>EDUCATION</h2>
                    <hr className='w-75 align-self-center'/>
                    <p>Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.</p>
                    <button className="filled-button mt-3" onClick={() => window.location.href='/services'}>
                        TRY IT NOW
                    </button>
                </div>
                <div className='card col text-light'>
                    <div className='align-self-center mt-3'>
                        <img className="card-img" src="./img/card3.png" alt="card1" style={{width: '228px', height: '100px'}}/>
                    </div>                    
                    <h2 className='mt-3 align-self-center'>SELF-CARE</h2>
                    <hr className='w-75 align-self-center'/>
                    <p>Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.</p>
                    <button className="filled-button mt-3" onClick={() => window.location.href='/services'}>
                        TRY IT NOW
                    </button>
                </div>
                <div className='card col text-light'>
                    <div className='align-self-center mt-3'>
                        <img className="card-img" src="./img/card4.png" alt="card1" style={{width: '228px', height: '100px'}}/>
                    </div>                    
                    <h2 className='mt-3 align-self-center'>OUTDOOR</h2>
                    <hr className='w-75 align-self-center'/>
                    <p>Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.</p>
                    <button className="filled-button mt-3" onClick={() => window.location.href='/services'}>
                        TRY IT NOW
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;