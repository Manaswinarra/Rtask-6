import React from 'react';
import './intro.css';
import btnImg from '../../assets/hireme.png';
import {Link} from 'react-scroll';

const Intro = () =>{
    return (
        <section id = "intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className='introName'>Manaswi</span> <br /> Data analyst</span>
                <p className='introPara'>"Passionate Data Analyst with expertise in uncovering trends and patterns through advanced analytics. Proficient in data cleaning, visualization, and generating actionable insights for business improvement."
                </p>
                <Link><button className="btn"><img src = {btnImg} alt = "Hire Me"/>Hire Me</button></Link>
            </div> 
            
        </section>
    )
}

export default Intro;