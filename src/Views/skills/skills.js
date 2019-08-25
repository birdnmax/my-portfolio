import React, { Component } from 'react';
import react from '../assets/React.png';
import redux from '../assets/redux.png';
import postgresql from '../assets/postgresql.png';
import javascript from '../assets/javascript.png';
import html from '../assets/HTML.png';
import css from '../assets/CSS.png';
import './Skills.css';

export default class Skills extends Component {
    render() {
        return (
            <div className='skills' id='skills'>
                <h1>Skills</h1>
                <div className='skill-pics'>
                    <div className='skill'>
                        <img src={react} className='skill-pic' alt='react'/>
                        React
                    </div>
                    <div className='skill'>
                        <img src={redux} className='skill-pic' alt='redux'/>
                        Redux
                    </div>
                    <div className='skill'>
                        <img src={postgresql} className='skill-pic' alt='postgresql'/>
                        PostgresQL
                    </div>
                    <div className='skill'>
                        <img src={javascript} className='skill-pic' alt='javascript'/>
                        JavaScript
                    </div>
                    <div className='skill'>
                        <img src={html} className='skill-pic' alt='html'/>
                        HTML5
                    </div>
                    <div className='skill'>
                        <img src={css} className='skill-pic' alt='css'/>
                        CSS3
                    </div>
                </div>
            </div>
        )
    }
}
