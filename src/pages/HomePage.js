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
        </div>
    );
};

export default HomePage;