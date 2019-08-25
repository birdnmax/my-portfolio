import React, { Component } from 'react';
import './About.css';
import brit from '../assets/brit-pic.jpg'

export default class About extends Component {
    render() {
        return (
            <div className='about' id='about'>
                <h1>About</h1>
                <div className='about-stuff'>
                    <a className='about-info'>lorem ipsum</a>
                    <img src={brit} className='brit-pic' alt='Brit'/>
                </div>
            </div>
        )
    }
}
