import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

import img1 from '../assets/img/cover-photo.png'

import blog1 from '../assets/img/dummies/blog-1.jpg'
import blog2 from '../assets/img/dummies/blog-2.jpg'
import blog3 from '../assets/img/dummies/blog-3.jpg'
import blog4 from '../assets/img/dummies/blog-4.jpg'
import Footer from './Footer'

export default function Home() {

    let navigate = useNavigate();

    const handleEducationClick = ()=>{
        navigate('/education')
    }
    const handleCOEClick = ()=>{
        navigate('/coe')
    }
    const handleTechClick = ()=>{
        navigate('/technology')
    }
    const handleIncubationClick = ()=>{
        navigate('/incubation-space')
    }

    return (
        <>
            <Navbar />

            <section id="intro">
                <div className="jumbotron masthead">
                    <div className="container">
                        {/* <!-- end slider navigation --> */}
                        <div className="row">
                            <div className="span12">
                                <div id="slider_holder">
                                    <div id="sequence">
                                        <ul>
                                            {/* <!-- Layer 1 --> */}
                                            <li>
                                                <div className="info animate-in">
                                                    <h2>CSR</h2>
                                                    <br />
                                                    <h3>IIT DHARWAD</h3>
                                                    <p>
                                                        WE CAN NOW PARTNER TO MAKE IMPACT IN THE SOCIETY.
                                                    </p>
                                                </div>
                                                <img className="slider_img animate-in" src={img1} alt="" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <!-- Sequence Slider::END--> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="maincontent" style={{ fontFamily: 'Arial, Helvetica, sans-serif'}}>
                <div className="container">

                    <div className="row">
                        <div className="home-posts">

                            <div className="span12">
                                <h3>Broad Avenues for CSR Activities</h3>
                            </div>

                            <div className="span3">
                                <div className="post-image">
                                    <a >
                                        <img onClick={handleEducationClick} src={blog1} alt="Education" style={{height:"153px", cursor:"pointer"}}  />
                                    </a>
                                </div>
                                {/* <!-- end .entry-meta --> */}
                                <div className="entry-body">
                                    <a onClick={handleEducationClick} style={{cursor:"pointer"}}>
                                        <h5  className="title" style={{fontWeight:"700"}}>Educational Programmes</h5>
                                    </a>
                                    <p>
                                    Empower India's future through IIT Dharwad's comprehensive education initiatives, fostering innovation, research, and collaborative learning in emerging technologies.
                                    </p>
                                </div>
                                {/* <!-- end .entry-body --> */}
                                <div className="clear">
                                </div>
                            </div>


                            <div className="span3">
                                <div className="post-image">
                                    <a  onClick={handleEducationClick} style={{cursor:"pointer"}}><img src={blog2} alt=""/></a>
                                </div>
                                {/* <!-- end .entry-meta --> */}
                                <div className="entry-body">
                                    <a onClick={handleCOEClick} style={{cursor:"pointer"}}>
                                        <h5 className="title" style={{fontWeight:"700"}}>Development of Centres of Excellence (CoEs)</h5>
                                    </a>
                                    <p>
                                    Revolutionize India's future through specialized Centers of Excellence at IIT Dharwad, focusing on sustainable, tech-driven advancements in critical sectors.
                                    </p>
                                </div>
                                {/* <!-- end .entry-body --> */}
                                <div className="clear">
                                </div>
                            </div>


                            <div className="span3">
                                <div className="post-image">
                                    <a ><img onClick={handleTechClick} style={{cursor:"pointer"}} src={blog3} alt="" /></a>
                                </div>
                                {/* <!-- end .entry-meta --> */}
                                <div className="entry-body">
                                    <a onClick={handleTechClick} style={{cursor:"pointer"}}>
                                        <h5 className="title" style={{fontWeight:"700"}}>Our “Technology for Society" Programmes</h5>
                                    </a>
                                    <p>
                                    Empowering India's future through technology: Solving water, waste, agriculture challenges while preserving culture and knowledge with innovative solutions.
                                    </p>
                                </div>
                                {/* <!-- end .entry-body --> */}
                                <div className="clear">
                                </div>
                            </div>

                            <div className="span3">
                                <div className="post-image">
                                    <a onClick={handleIncubationClick} style={{cursor:"pointer"}}><img src={blog4} alt=""  style={{height:"153px"}} /></a>
                                </div>
                                
                                {/* <!-- end .entry-meta --> */}
                                <div className="entry-body">
                                    <a onClick={handleIncubationClick} style={{cursor:"pointer"}}>
                                        <h5 className="title" style={{fontWeight:"700"}}>Incubation Space and Seed Funding Grants</h5>
                                    </a>
                                    <p>
                                        Bridging cutting-edge research with entrepreneurship, transforming prototypes into market-ready products, and fostering innovation for a thriving start-up ecosystem.
                                    </p>
                                </div>
                                {/* <!-- end .entry-body --> */}
                                <div className="clear">
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section id="maincontent" class="tagline">
                <div class="container">
                    <div class="row">
                        <div class="span3 features">
                            <h3 class="numtext">People Impacted</h3>
                            <p class="numbers">1000+</p>
                        </div>
                        <div class="span3 features">
                            <h3 class="numtext">Total Funds</h3>
                            <p class="numbers">5+ Cr.</p>
                        </div>
                        <div class="span3 features">
                            <h3 class="numtext">Events Conducted</h3>
                            <p class="numbers">15+</p>
                        </div>
                        <div class="span3 features">
                            <h3 class="numtext">Partnered Companies</h3>
                            <p class="numbers">10+</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
