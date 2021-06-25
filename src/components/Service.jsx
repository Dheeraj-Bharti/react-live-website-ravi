import React from 'react';
import web from '../../src/images/marketing.jpg';
import Cards from './Card';
import Sdata from '../Sdata';
const Service = () => {
    return (
        <>
        <div></div>
            <div id="header" className="my-5">
                <h1 className="text-center">Courses I offer</h1>
                <div className="container-fluid mb-5">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row gy-4">
                                <Cards
                                    imgsrc={web}
                                    title="Mechanical Engg"
                                />

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Service;