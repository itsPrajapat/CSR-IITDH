import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

import img from '../assets/img/dummies/tech.png'

export default function Tech() {
    return (
        <>
            <Navbar />

            <section id="subintro">
                <div className="jumbotron subhead" id="overview">
                    <div className="container">
                        <div className="row">
                            <div style={{ paddingLeft: "150px", paddingRight: "150px" }}>
                                <div className="centered">
                                    <h2 className="pagehead">Our “Technology for Society” Programmes</h2>
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
                            <h4 className="mb-4" style={{ fontSize: "27px" }}>Welcome to IIT Dharwad Technology Programmes !</h4>
                            <p>
                                At IIT Dharwad, we are dedicated to leveraging technology to address the unique
                                challenges facing our society, particularly in the areas of water, waste management,
                                agriculture, and cultural preservation. We firmly believe that scalable solutions can be
                                achieved through robust prototypes developed in laboratory settings. As an academic
                                institution, we are well-positioned to identify societal problems and deliver cost-effective,
                                technology-driven solutions with the support of our dedicated faculty members and
                                students.
                            </p>

                            <div className="text-center">
                    <img src={img} alt="" style={{height: "400px", marginTop:"10px", marginBottom:"10px"}} />
                </div>

                            <p>
                                Our impactful projects include:
                            </p>

                            <ul className="list-group">
                                <li className="list-group-item" style={{ lineHeight: "25px", marginBottom: "10px" }}>
                                    Tribal Language Data Collection and Digitization Facility:
                                    We have established a state-of-the-art data collection and digitization
                                    facility in Mysuru, specifically focused on tribal languages. This initiative aims to
                                    preserve and promote the rich linguistic heritage of indigenous communities. By
                                    digitizing and archiving tribal languages, we ensure their preservation for future
                                    generations.
                                </li>
                                <li className="list-group-item" style={{ lineHeight: "25px", marginBottom: "10px" }}>
                                    Patient Rush Monitoring and Control Facility:
                                    In collaboration with a hospital in Hubballi, we have developed a patient
                                    rush monitoring and control facility. This innovative system enables efficient
                                    management of patient flow, ensuring timely and quality healthcare services.
                                    Over 500 people are benefiting from this facility, which has significantly improved
                                    the healthcare experience and outcomes for the community.
                                </li>
                                <li className="list-group-item" style={{ lineHeight: "25px", marginBottom: "10px" }}>
                                    Research Facilities at IIT Dharwad:
                                    We have established new research facilities at IIT Dharwad, enabling
                                    cutting-edge research and training opportunities for the next generation of
                                    scientists. These facilities have a profound impact on over 500 young individuals,
                                    providing them with access to advanced resources and fostering their scientific
                                    growth and innovation.
                                </li>
                            </ul>

                            

                            <p>
                                Our commitment to societal challenges goes beyond the mentioned projects. We
                                recognize the importance of clean potable water solutions, clean streets, and
                                making agriculture attractive. Through our interdisciplinary approach and
                                collaboration with stakeholders, we are actively developing and implementing
                                scalable solutions in these areas. Our goal is to enhance access to clean water,
                                improve waste management practices, promote sustainable agriculture, and
                                create a cleaner and healthier environment for all.
                            </p>

                            <p>
                                Additionally, we strongly believe that technology plays a crucial role in preserving
                                our culture and knowledge systems. In partnership with various bodies, we are
                                actively involved in initiatives to safeguard traditional music, rare manuscripts,
                                and cultural heritage. By leveraging technology, we ensure the preservation,
                                digitization, and wider accessibility of our rich cultural heritage for future
                                generations to cherish and learn from.
                            </p>

                            <p>
                                Join us in our CSR initiatives to make a significant impact on society, empower
                                India's future, and create a sustainable and culturally vibrant nation. Contact us
                                to explore partnership opportunities and contribute to these transformative
                                projects. Together, we can build a better tomorrow through technology-driven
                                solutions and cultural preservation.
                            </p>

                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    )
}
