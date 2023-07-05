import React, {useRef} from 'react'
import emailjs from 'emailjs-com'
import Footer from './Footer'
import Navbar from './Navbar'

export default function ContactUs() {

    // const form = useRef();

    // const sendEmail = (e)=>{
    //   e.preventDefault();
  
    //   emailjs.sendForm(
    //     "service_c3hhaqq",
    //     "template_7msi2ke",
    //     form.current,
    //     "TBfj8-31HGgmlNRWN"
    //   ).then(
    //     (result) => {
    //       console.log(result.status, result.text);
    //       form.current.reset();
    //       alert('message sent')
    //     },
    //     (error) => {
    //       console.log(error.status, error.text);
    //     }
    //   );
    // };

    return (
        <>
        <Navbar/>
            <section id="subintro">
                <div class="jumbotron subhead" id="overview">
                    <div class="container">
                        <div class="row">
                            <div class="span12">
                                <div class="centered">
                                    <h3>Contact Us</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="maincontent">
                <div class="container">
                    <div class="row">
                        <div class="span4">
                            <aside>
                                <div class="widget">
                                    <h4>Get in touch with us</h4>
                                    <ul>
                                        <li><label><strong>Phone : </strong></label>
                                            <p style={{ fontWeight: "600", color: "black" }}>
                                                +91 836 2212 839
                                            </p>
                                        </li>
                                        <li><label><strong>Email : </strong></label>
                                            <p style={{ fontWeight: "600", color: "black" }}>
                                                csr@iitdh.ac.in
                                            </p>
                                        </li>
                                        <li><label><strong>Adress : </strong></label>
                                            <p style={{ fontWeight: "600", color: "black" }}>
                                                WALMI Campus, PB Road, near High Court, Karnataka 580011
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <div class="widget">
                                    <h4>Social network</h4>
                                    <ul class="social-links">
                                        <li><a href="https://twitter.com/iitdhrwd" target="_blank" title="Twitter"><i class="icon-rounded icon-32 icon-twitter"></i></a></li>
                                        <li><a href="https://www.facebook.com/iitdharwadofficial/" target="_blank" title="Facebook"><i class="icon-rounded icon-32 icon-facebook"></i></a></li>
                                    </ul>
                                </div>
                            </aside>
                        </div>
                        <div class="span8">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30754.966616013044!2d74.88740447431636!3d15.51823900000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf3374630048df%3A0xce8a50f437a61c46!2sIndian%20Institute%20Of%20Technology%20Dharwad!5e0!3m2!1sen!2sin!4v1687542554628!5m2!1sen!2sin" width="100%" height="475" frameborder="0" style={{ border: "0" }} allowfullscreen></iframe>

                            {/* <div class="spacer30"></div>

                            <div id="sendmessage">Your message has been sent. Thank you!</div>
                            <div id="errormessage"></div>
                            <form ref={form} onSubmit={sendEmail} class="contactForm">
                                <div class="row">
                                    <div class="span4 form-group">
                                        <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4"
                                            data-msg="Please enter at least 4 chars" required />
                                        <div class="validation"></div>
                                    </div>

                                    <div class="span4 form-group">
                                        <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email"
                                            data-msg="Please enter a valid email" required />
                                        <div class="validation"></div>
                                    </div>
                                    <div class="span8 form-group">
                                        <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4"
                                            data-msg="Please enter at least 8 chars of subject" required />
                                        <div class="validation"></div>
                                    </div>
                                    <div class="span8 form-group">
                                        <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us"
                                            placeholder="Message" required></textarea>
                                        <div class="validation"></div>
                                        <div class="text-center">
                                            <button class="btn btn-color btn-rounded" type="submit">Send message</button>
                                        </div>
                                    </div>
                                </div>
                            </form> */}

                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </>
    )
}
