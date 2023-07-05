import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function () {
  return (
    <>
      <Navbar />

      <section id="subintro">
        <div class="jumbotron subhead" id="overview">
          <div class="container">
            <div class="row">
              <div class="span12">
                <div class="centered">
                  <h2 style={{color:"white", marginBottom:"0px", fontWeight:"1000"}}>Donate Here</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="maincontent">
        <div class="container">
          <div class="row">
            <div class="span12">
              <h4>Account and Related Details</h4>
              <p>
                IIT Dharwad's CSR Registration Number is: CSR00006188. The account details for donations are as follows:
              </p>
              <hr style={{margin:"2px", borderWidth:"1px", borderColor:"darkgray"}}/>
                <div style={{overflow:"auto"}}>
                  <table class="course-details">
                    <tr>
                      <td><b>Name :</b></td>
                      <td>IIT Dharwad CSR and Donation</td>
                    </tr>
                    <tr>
                      <td><b>Account Number :</b></td>
                      <td>4070101002353</td>
                    </tr>
                    <tr>
                      <td><b>IFSC Code :</b></td>
                      <td>CNRB0004070</td>
                    </tr>
                    <tr>
                      <td><b>Bank & Branch :</b></td>
                      <td>Canara Bank, Belur Industrial Area, SME, Dharwad</td>
                    </tr>
                  </table>
                  <hr style={{margin:"2px", borderWidth:"1px", borderColor:"darkgray"}}/>
                </div><br/>

                  <p>
                    The Tax Exemption details are as follows: <br/>
                      The accounts are audited as per standard procedures and Income Tax Provision regarding the Donation is as below.<br/>
                        Donation/Contributions made to the Institute can be claimed as a deduction under Section 80G of the Income Tax Act. This deduction can only be claimed when the donation/contribution has been made via a cheque or a draft or in cash (less than INR 2000/-) or online transfer. The donation/contribution made to the Institute is eligible for 100% Deduction Without Qualifying Limit as per the section 80 G (2) (a) (iii) of the Income Tax Act 1961. For claiming the exemption in Income Tax, the following information may please be noted:
                      </p>
                      <hr style={{margin:"2px", borderWidth:"1px", borderColor:"darkgray"}}/>
                        <div style={{overflow:"auto"}}>
                          <table class="course-details">
                            <tr>
                              <td><b>Name of the Donee :</b></td>
                              <td>Indian Institute of Technology Dharwad</td>
                            </tr>
                            <tr>
                              <td><b>PAN No. of the Donee :</b></td>
                              <td>AAAGI0111B</td>
                            </tr>
                            <tr>
                              <td><b>Address of the Donee :</b></td>
                              <td>WALMI Campus, Belur Industrial Area, NH 4, Pune Bengaluru Road, Near High Court, Dharwad - 580011, Karnataka</td>
                            </tr>
                          </table>
                          <hr style={{margin:"2px", borderWidth:"1px", borderColor:"darkgray"}}/>
                        </div><br/>
                        </div>
                      </div>
                    </div>
                  </section>

                  <Footer />
                </>
                )
}
