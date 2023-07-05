import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

import img from '../assets/img/dummies/savant_agriculture-1.jpg'

export default function Incubation() {
    return (
        <>
            <Navbar />

            <section id="subintro">
                <div className="jumbotron subhead" id="overview">
                    <div className="container">
                        <div className="row">
                            <div style={{ paddingLeft: "150px", paddingRight: "150px" }}>
                                <div className="centered">
                                    <h2 className="pagehead">Incubation Space and Seed Funding Grants</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div id="maincontent" className='csr-page'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <h4 className="mb-4" style={{ fontSize: "27px" }}>Welcome to IIT Dharwad's Entrepreneurship and Innovation Initiatives!</h4>
                            <p>
                                At IIT Dharwad, we bridge cutting-edge research with entrepreneurship,
                                transforming prototypes developed in our academic labs into market-ready
                                products. We firmly believe that the impact of our research is maximized when it
                                is brought to society, creating new jobs and fostering innovation. Our focus is on
                                nurturing a thriving start-up ecosystem by incubating deep-tech start-ups.
                            </p>

                            <p>
                                India is rapidly emerging as a global start-up hub. However, many promising
                                start-ups face a significant challenge when it comes to accessing adequate
                                funding opportunities, particularly at the crucial ideation stage. This is where the
                                collaboration between IIT Dharwad and well-established corporates becomes
                                crucial. By joining forces and providing financial support, we can incubate
                                start-ups and provide them with the necessary resources and mentorship to
                                thrive.
                            </p>

                            <div className="text-center">
                                <img src={img} alt="" style={{ height: "400px", marginTop: "10px", marginBottom: "10px" }} />
                            </div>


                            <p>
                                Through our entrepreneurship and innovation initiatives, we aim to:
                            </p>

                            <ul className="list-group">
                                <li className="list-group-item" style={{ lineHeight: "25px", marginBottom: "10px" }}>
                                    Incubate Deep-Tech Start-ups:
                                    IIT Dharwad is strategically positioned to incubate and support
                                    deep-tech start-ups. Our state-of-the-art infrastructure, research expertise,
                                    and collaborative environment create an ideal ecosystem for nurturing
                                    entrepreneurial ventures. By partnering with us, you can contribute to the
                                    growth and success of innovative start-ups in emerging technology
                                    domains.
                                </li>
                                <li className="list-group-item" style={{ lineHeight: "25px", marginBottom: "10px" }}>
                                    Drive Entrepreneurial Success:
                                    We believe that entrepreneurship holds immense potential to drive
                                    economic growth and create employment opportunities. By transforming
                                    prototypes into market-ready products, we empower entrepreneurs to bring
                                    their ideas to fruition. Your support can play a pivotal role in providing
                                    budding entrepreneurs with the necessary guidance, mentorship, and
                                    financial resources to scale their ventures.
                                </li>
                                <li className="list-group-item" style={{ lineHeight: "25px", marginBottom: "10px" }}>
                                    Enhance Funding Opportunities:
                                    Limited funding opportunities often hinder the progress of promising
                                    start-ups. Your strong financial support as a private or public-sector
                                    company can make a significant difference. By collaborating with IIT
                                    Dharwad and contributing to our incubation programs, you can help bridge
                                    the funding gap, ensuring that innovative start-ups have the necessary
                                    resources to thrive.
                                </li>
                            </ul>

                            
                            <p>
                                We invite both private and public-sector companies to join us in our mission to
                                foster innovation, entrepreneurship, and job creation. By supporting our
                                entrepreneurship initiatives, you become a catalyst for societal progress and
                                contribute to the growth of a vibrant start-up ecosystem.

                            </p>
                            <p>
                                Contact us to explore partnership opportunities and discuss how your financial
                                support can incubate and empower start-ups at IIT Dharwad. Together, we can
                                nurture the next generation of entrepreneurs, drive technological advancements,
                                and shape a prosperous future.
                            </p>

                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    )
}
