import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import me from '../Hero/me.jpg'
import { NavLink } from 'react-router-dom';

function Hero({refProps}) {
    return (
        <header style={{ paddingLeft: 0 }} ref = {refProps}>
          <div
            className='p-5 text-center bg-image no-repeat'
            style={{ backgroundImage: "url('https://wallpaperaccess.com/full/96462.jpg')", height:"100vh", width: 'auto', backgroundPosition: "50%", backgroundAttachment: "cover"}}
          >
            <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
            <div className='d-flex justify-content-center align-items-center h-100' style={{ minHeight: '500px' }}>
                <div className='text-white'>
                  <h1 className='mb-3'>David Jolley</h1>
                  <h4 className='mb-3'>Web Developer</h4>
                  <NavLink 
                to="../about"
                exact
                className='btn btn-outline-light btn-lg'
                activeClassName="nav-link"
                style={{paddingLeft: '2%'}}
              >
              Check out my Work!
              </NavLink>
                </div>
                <div style={{ width: '30%', height: '30%', paddingLeft: '10%'}}>
                <img src={me} style={{ width: '100%', height: '100%', borderRadius: '5px' }} />
                </div>
              </div>
            </div>
          </div>
        </header>
      );
  }

export default Hero;