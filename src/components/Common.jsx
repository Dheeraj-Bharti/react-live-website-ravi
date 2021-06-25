import React from 'react'
import { NavLink } from 'react-router-dom';
import web from "../../src/images/img2.svg"

const Common = (props) => {
    return (
        <>
       
            <section id="header" className=" d-flex align-items-center" >
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justigy-content-center flex-column">
                                    <h1 className="home_heading"> {props.name} <strong className="brand-name">Ravi Kumar Ravi</strong> </h1>
                                    <h2 className="my-3">
                                        <ul className="my-list">
                                            <li>	Ex- Nuclear Scientist at B.A.R.C. (Government of India) </li>
                                            <li>	Selected in ISRO, SAIL, IOCL & Coal India </li>
                                            <li>	Ex- Educator at Unacademy </li>
                                            <li>	Received best educator award at Unacademy </li>
                                            <li>	Currently Ph.D. Research Scholar at IIT Madras </li>
                                            <li>	M. Tech from NIT Rourkela </li>
                                            <li>	GATE 2019 All India Rank 174 </li>
                                            <li>	GATE 2017 All India Rank 1397 </li>
                                        </ul>
                                    </h2>
                                    <div className="mt-3">
                                        <NavLink to={props.visit} className="btn-get-started">{props.btname}</NavLink>
                                    </div>
                                </div>

                                <div className="col-lg-6 order-1 oder-lg-2 header-img">
                                    <img src={props.imgsrc} className="img-fluid animated w-50" alt="" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
           
        </>

    )
}

export default Common;