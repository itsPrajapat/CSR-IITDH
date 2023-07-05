import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

import img from '../assets/img/dummies/education.jpg'

export default function Education() {
    return (
        <>
            <Navbar />

            <section id="subintro">
                <div className="jumbotron subhead" id="overview">
                    <div className="container">
                        <div className="row">
                            <div style={{ paddingLeft: "150px", paddingRight: "150px" }}>
                                <div className="centered">
                                    <h2 className="pagehead">Educational Programmes</h2>
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
                            <h4 className="mb-4" style={{fontSize:"27px"}}>Welcome to IIT Dharwad CSR Initiatives!</h4>
                            <p>
                                At IIT Dharwad, we have a proven track record of delivering successful Corporate Social Responsibility (CSR) projects in various domains. With a focus on rural and tribal education, healthcare, research capacity building, upskilling, and research facility creation, our initiatives have made a significant impact on the lives of over 1,000 people. Additionally, we have successfully raised over Rs. 5 crores in CSR funds.
                            </p>

                            <p>
                                We are committed to training manpower and contributing to capacity building in emerging areas of science and technology, addressing the growing need for quality professionals in the country.
                            </p>

                            <p>
                                Your support under CSR can help us carry out the following educational and academic activities:
                            </p>

                            <ul className="list-group">
                                <li className="list-group-item" style={{ lineHeight: "25px", marginBottom: "10px" }}>
                                    Sponsoring motivated MS and PhD students: Your support can provide scholarships and financial assistance to deserving students pursuing higher education at IIT Dharwad.
                                </li>
                                <li className="list-group-item" style={{ lineHeight: "25px", marginBottom: "10px" }}>
                                    Funds for technical, scientific, and cultural activities by students: By sponsoring various activities such as technical competitions, scientific events, and cultural programs, you can help foster holistic development among our students.
                                </li>
                                <li className="list-group-item" style={{ lineHeight: "25px", marginBottom: "10px" }}>
                                    Funding research travels for students and faculty members: Support for research-related travel expenses will enable our students and faculty to collaborate with renowned institutions and attend conferences, enhancing their academic and research pursuits.
                                </li>
                                <li className="list-group-item" style={{ lineHeight: "25px", marginBottom: "10px" }}>
                                    Young Scientist Awards to faculty members: By recognizing the achievements and contributions of our faculty, your sponsorship can encourage excellence in research and innovation.
                                </li>
                                <li className="list-group-item" style={{ lineHeight: "25px", marginBottom: "10px" }}>
                                    Enriching the Institute Central and Departmental libraries: Contributions toward expanding and upgrading our libraries will provide students and researchers with access to a wider range of academic resources, fostering a culture of knowledge dissemination.
                                </li>
                            </ul>

                            <div className="text-center">
                                <img src={img} alt="" style={{height: "400px", marginTop:"10px", marginBottom:"10px"}} />
                            </div>

                            <p>
                                In our commitment to mentor neighboring institutions, we aim to improve the quality of teachers and lecturers, leaving a lasting impact on students' education. Our planned activities in this regard include:
                            </p>

                            <ul className="list-group">
                                <li className="list-group-item" style={{ lineHeight: "25px", marginBottom: "10px" }}>
                                    Training faculty members of engineering colleges: We organize workshops and training sessions on emerging areas such as Blockchain, IoT, 5G, Software Defined Networking, Machine Learning, Parallel Computing, and Supercomputing, equipping educators with the latest knowledge and skills.
                                </li>
                                <li className="list-group-item" style={{ lineHeight: "25px", marginBottom: "10px" }}>
                                    Live streaming of presentations by world-renowned scholars: Through the use of technology, we plan to broadcast presentations by distinguished scholars visiting IIT Dharwad to neighboring schools and colleges, facilitating access to valuable insights and expertise.
                                </li>
                                <li className="list-group-item" style={{ lineHeight: "25px", marginBottom: "10px" }}>
                                    Training and motivating neighboring school children: Our dedicated students will provide training and motivation to school children, inspiring their interest in science, technology, engineering, and mathematics (STEM) fields through interactive sessions and mentorship programs.
                                </li>
                                <li className="list-group-item" style={{ lineHeight: "25px", marginBottom: "10px" }}>
                                    Offering student internships: By supporting student internships, you can provide hands-on learning opportunities to young talents, enabling them to apply their theoretical knowledge in practical settings.
                                </li>
                            </ul>

                            <p>
                                By partnering with IIT Dharwad and supporting our CSR initiatives, you can make a meaningful contribution to society, education, and research. Together, we can shape a brighter future and empower the next generation of innovators and change-makers. Contact us to discuss how you can be a part of our CSR endeavors and make a lasting impact.
                            </p>

                            <p>
                                Contact us to discuss how you can be a part of our CSR endeavors and make a lasting impact.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    )
}
