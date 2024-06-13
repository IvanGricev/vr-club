import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap'; 
import './HomePage.css';


const HomePage = () => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        phone: '',
        theme: '',
        message: ''
    });
    
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // накинуть логики
    };
    
    return (
        <div className="home-page text-light container">
            <div className='row start-block'>
                <div className='col-lg-6 order-lg-2'>
                    <h1><span className="gradient-text">Dive</span> Into The Depths <br/> Of <span className="gradient-text"> Virtual Reality</span></h1>
                    <p className="intro-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore 
                        nisl tincidunt eget. Lectus mauris eros in vitae.
                    </p>
                    <button className="btn filled-button" onClick={() => window.location.href='/about'}>
                        BUILD YOUR WORLD
                    </button>
                </div>
                <div className='col-lg-6 order-lg-1 d-flex justify-content-end'>
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
                <div className='col justify-content-lg-end algin-items-center'>
                    <p>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat  nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo  quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>
                </div>
            </div>
            <div className='about-block row container-fluid d-flex mt-6'>
                <div className='col justify-content-lg-start'>
                    <img className="about-img" src="./img/about-block.png" alt="howto"/>                
                </div>
                <div className='col justify-content-lg-end flex-column align-self-center'>
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
                <div className='col justify-content-lg-end d-flex algin-items-center'>
                    <p>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat  nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo  quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>
                </div>
            </div>
            <div className='cards-block row container-fluid mt-6 hide'>
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
            <div className='tecnologis-block container-fluid mt-6 hide-tec'>
                <div class="row tecnologi-main-img justify-content-lg-center align-items-center">
                    <div class="col text-center">
                        <h2 className='fs-1'>TECHNOLOGIES & HARDWARE</h2>
                        <p className='fs-2'>USED BY HYDRA VR.</p>
                    </div>
                </div>
                <div className='row tecnologi-imgs justify-content-lg-center'>
                    <div className='tecnologi col'>
                        <img className="tecnologis-img" src="./img/unreal.png" alt="tecnologis-main" style={{width: '100%', height: '100%'}}/>
                    </div>
                    <div className='tecnologi col'>
                        <img className="tecnologis-img" src="./img/unity.png" alt="tecnologis-main" style={{width: '100%', height: '100%'}}/>
                    </div>
                    <div className='tecnologi col'>
                        <img className="tecnologis-img" src="./img/oculus.png" alt="tecnologis-main" style={{width: '100%', height: '100%'}}/>
                    </div>
                    <div className='tecnologi col'>
                        <img className="tecnologis-img" src="./img/vive.png" alt="tecnologis-main" style={{width: '100%', height: '100%'}}/>
                    </div>
                </div>
            </div>
            <div className='row container-fluid mt-6 d-flex'>
                <div className='col justify-content-lg-start'>
                    <h2 className='fw-bold fs-1'>
                        HOW WE BUILD
                    </h2>
                    <h2 className='fw-light fs-2'>
                        WITH HYDRA VR?
                        <img className="about-img hide" src="./img/arrow.svg" alt="arrow" style={{width: '228px', height: '100px', paddingLeft:'10%'}}/>                
                    </h2>
                </div>
                <div className='col justify-content-lg-end d-flex algin-items-center'>
                    <p>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>
                </div>
            </div>
            <div className='row container-fluid mt-5 m-4'>
                <div className='col flex-column'>
                    <div className="buble d-flex justify-content-center align-items-center">
                        <h2>01</h2>
                    </div>
                    <p className='buble-content d-inline-flex'>
                        <img className="about-img hide" src="./img/arrow-small.svg" alt="arrow" style={{width: '57px', height: '57px'}}/>                
                        3D Conception & Design
                    </p>
                </div>
                <div className='col flex-column'>
                    <div className="buble d-flex justify-content-center align-items-center">
                        <h2>02</h2>
                    </div>
                    <p className='buble-content d-inline-flex'>
                        <img className="about-img hide" src="./img/arrow-small.svg" alt="arrow" style={{width: '57px', height: '57px'}}/>                
                        Interaction Design                    
                    </p>
                </div>
                <div className='col flex-column'>
                    <div className="buble d-flex justify-content-center align-items-center">
                        <h2>03</h2>
                    </div>
                    <p className='buble-content d-inline-flex'>
                        <img className="about-img hide" src="./img/arrow-small.svg" alt="arrow" style={{width: '57px', height: '57px'}}/>                
                        VR World
                        User Testing
                    </p>
                </div>
                <div className='col flex-column'>
                    <div className="buble d-flex justify-content-center align-items-center">
                        <h2>04</h2>
                    </div>
                    <p className='buble-content d-inline-flex'>
                        <img className="about-img hide" src="./img/arrow-small.svg" alt="arrow" style={{width: '57px', height: '57px'}}/>                
                        Hydra VR Deploy
                    </p>
                </div>
            </div>
            <div className='form-container container-fluid mt-5 m-4'>
                <div className='row'>
                    <div className='col flex-column d-flex align-items-center fs-1 fw-light'>
                        <h2>JOIN HYDRA</h2>
                        <p>Let’s Build Your VR Experience</p>
                    </div>
                </div>
                <Form onSubmit={handleSubmit} className='From'>
                    <div className="row mb-3">
                        <div className="col-md-6">
                        <Form.Group controlId="nameInput">
                            <Form.Control className='input' type="text" name="name" placeholder="First Name" onChange={handleChange} />
                        </Form.Group>
                        </div>
                        <div className="col-md-6">
                        <Form.Group controlId="surnameInput">
                            <Form.Control className='input' type="text" name="surname" placeholder="Last Name" onChange={handleChange} />
                        </Form.Group>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6">
                        <Form.Group controlId="emailInput">
                            <Form.Control className='input' type="email" name="email" placeholder="Email" onChange={handleChange} />
                        </Form.Group>
                        </div>
                        <div className="col-md-6">
                        <Form.Group controlId="phoneInput">
                            <Form.Control className='input' type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} />
                        </Form.Group>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-12">
                        <Form.Group controlId="themeInput">
                            <Form.Control className='input' type="text" name="theme" placeholder="Subject" onChange={handleChange} />
                        </Form.Group>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-12">
                        <Form.Group controlId="messageInput">
                            <Form.Control className='input' as="textarea" name="message" rows={3} placeholder="Tell Us Something..." onChange={handleChange} />
                        </Form.Group>
                        </div>
                    </div>
                    <Button type="submit" className='filled-button button-submit text-black'>
                        SEND TO HYDRA
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default HomePage;