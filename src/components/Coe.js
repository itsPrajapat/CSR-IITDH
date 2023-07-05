import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import img from '../assets/img/dummies/coe.png'

export default function Coe() {

    

    return (
        <>
        <Navbar/>
            <section id="subintro">
                <div className="jumbotron subhead" id="overview">
                    <div className="container">
                        <div className="row">
                            <div style={{ paddingLeft: "150px", paddingRight: "150px" }}>
                                <div className="centered">
                                    <h2 className="pagehead" >Development of Centres of Excellence (CoEs)
                                    </h2>
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
                            <h4 className="mb-4" style={{fontSize:"27px"}}>Welcome to IIT Dharwad Centers of Excellence!</h4>
                            <p>
                                At IIT Dharwad, we strive to revolutionize India's future by establishing specialized
                                Centers of Excellence (CoEs) that focus on sustainable, technology-driven
                                advancements in critical sectors. CoEs are instrumental in capacity building and play a
                                vital role in shaping the progress of a nation. With a keen understanding of regional
                                needs, we are targeting the setup of CoEs in the following thematic areas:
                            </p>

                            <div className="text-center">
                                <img src={img} alt="" style={{height: "400px", marginTop:"10px", marginBottom:"10px"}} />
                            </div>


                            <ul className="list-group-item">
                                <li className="list-group-item" style={{ lineHeight: "25px", marginBottom: "10px" }}>Precision Agriculture for Indian Farms: Our CoE in Precision Agriculture aims to
                                    leverage advanced technologies and data-driven approaches to enhance
                                    agricultural practices in India. By integrating sensors, automation, and artificial
                                    intelligence, we seek to optimize crop productivity, resource management, and
                                    sustainable farming techniques. This initiative will contribute to the growth and
                                    modernization of Indian agriculture, ensuring food security and economic
                                    prosperity.</li>
                                <li className="list-group-item" style={{ lineHeight: "25px", marginBottom: "10px" }}>Cyber Physical Systems & IoT: The CoE in Cyber Physical Systems and Internet
                                    of Things (IoT) will focus on developing innovative solutions for the convergence
                                    of physical and digital systems. Through research, development, and
                                    collaboration, we aim to advance technologies that enable seamless
                                    communication, intelligent automation, and secure connectivity. This CoE will
                                    drive advancements in areas such as smart cities, industrial automation,
                                    healthcare, transportation, and more.</li>
                                <li className="list-group-item" style={{ lineHeight: "25px", marginBottom: "10px" }}>Clean Energy & Environment: With a dedicated CoE in Clean Energy and
                                    Environment, we aim to address the pressing challenges of sustainable energy
                                    generation and environmental conservation. Our research will focus on
                                    renewable energy technologies, energy storage systems, energy-efficient
                                    processes, waste management, and pollution control. By promoting clean energy
                                    adoption and environmental stewardship, we contribute to a greener and more
                                    sustainable future.</li>
                                <li className="list-group-item" style={{ lineHeight: "25px", marginBottom: "10px" }}>Green Mobility: The CoE in Green Mobility at IIT Dharwad is committed to
                                    advancing eco-friendly transportation solutions. Our research and development
                                    efforts will focus on electric vehicles, hybrid technologies, sustainable fuels,
                                    intelligent transportation systems, and efficient mobility infrastructure. By
                                    promoting green mobility alternatives, we aim to reduce carbon emissions,
                                    alleviate traffic congestion, and enhance the overall transportation ecosystem.</li>
                                <li className="list-group-item" style={{ lineHeight: "25px", marginBottom: "10px" }}>Health Care Science and Engineering: Through the CoE in Health Care Science
                                    and Engineering, we strive to leverage technology and interdisciplinary research
                                    to address healthcare challenges in India. Our focus areas include medical
                                    diagnostics, telemedicine, biomedical devices, healthcare data analytics, and
                                    precision medicine. By promoting technological innovations in healthcare, we aim
                                    to improve diagnostics, treatment outcomes, and accessibility to quality
                                    healthcare services.</li>
                            </ul>
                            <p>
                                By supporting our Centers of Excellence, your CSR initiatives can contribute to the
                                development and deployment of cutting-edge technologies in these critical sectors.
                                Together, we can drive sustainable growth, foster innovation, and create a positive
                                impact on society and the environment.
                            </p>

                            <p>
                                Contact us to explore partnership opportunities and join us in revolutionizing India's
                                future through our specialized Centers of Excellence at IIT Dharwad.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    )
}
