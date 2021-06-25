import React from 'react'
import { NavLink } from 'react-router-dom';
import web from "../../src/images/img2.svg"
import Common from './Common';

const About = () => {
    return (
        <>
            <section id="header" className="d-flex align-items-center" >
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justigy-content-center flex-column">
                                    <h1> About <strong className="brand-name">The Advantage</strong> </h1>
                                    <h2 className="my-3">
                                        <ul>
                                            <li>	Aim is to help you score marks (>75 +) in GATE</li>
                                            <li>	FREE & Quality videos for your preparation</li>
                                            <li>	Videos will strictly cover only GATE relevant concepts</li>
                                            <li>	No rubbish or out of syllabus topic coverage [Strictly]</li>
                                            <li>	A lot of short tricks in every subject will be discussed</li>
                                            <li>	Perfect approach to solve GATE numerical</li>

                                        </ul>
                                    </h2>
                                    <div className="mt-3">
                                        <NavLink to='/contact' className="btn-get-started">Contact Us</NavLink>
                                    </div>
                                </div>

                                <div className="col-lg-6 order-1 oder-lg-2 header-img">
                                    <img src={web} className="img-fluid animated" alt="" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;