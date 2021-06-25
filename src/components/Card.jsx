import React from 'react';
import web from '../../src/images/marketing.jpg';
import { NavLink } from 'react-router-dom';

const Cards = (props) => {
    return (
        <>
            <div  className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">{props.title}</h5>
                        <p className="card-text">For quick access please 
                        <a target="_blank" href="https://www.youtube.com/channel/UC4ZnJ7PZCvzNEFl29m3r2RQ/featured"> Go to My YouTube Channel</a></p>
                       
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards;