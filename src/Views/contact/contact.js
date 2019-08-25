import React, { Component } from 'react';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import './Contact.css';

export default class Contact extends Component {
    render() {
        return (
            <div className='contact' id='contact'>
                <h1>Contact</h1>
                <div className='footer'>
                <div className='address'>
                    <a>Brittany Hancock</a>
                    <a>Salt Lake City, UT 84109</a>
                    <a href='mailto:brittanymhancock@gmail.com'>brittanymhancock@gmail.com</a>
                </div>
                <div className='contact-logos'>
                    <a href='https://www.linkedin.com/in/brittanymhancock/'>
                    <img src={linkedin} className='contact-logo'/>
                    </a>
                    <a href='https://github.com/birdnmax'>
                    <img src={github} className='contact-logo'/>
                    </a>
                </div>
                </div>
            </div>
        )
    }
}
