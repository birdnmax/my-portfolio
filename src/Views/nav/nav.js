import React from 'react';
import {Link, animateScroll as scroll} from 'react-scroll';
import {ScrollTo} from 'react-scroll-to';
import './Nav.css';
import '../assets/bird.png';

export default function Nav (){
    const scroll = id => {
		document.getElementById(id).scrollIntoView({ behavior: "smooth", block: "start"})
	}
    return (
        <nav className='nav' id='navbar'>
            <div className='nav-content'>
                {/* <img src='./bird.png' className='bird-logo' alt='bird' onClick={this.scrollToTop}/> */}
                <ul className='nav-items'>
                    <li onClick={() => scroll('home')} className='nav-item'>Home</li>
                    <li onClick={() => scroll('about')} className='nav-item'>About</li>
                    <li onClick={() => scroll('skills')} className='nav-item'>Skills</li>
                    <li onClick={() => scroll('projects')} className='nav-item'>Projects</li>
                    <li onClick={() => scroll('contact')} className='nav-item'>Contact</li>
                </ul>
            </div>
        </nav>
    )
}
