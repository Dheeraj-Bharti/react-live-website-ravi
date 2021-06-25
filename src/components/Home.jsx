import React from 'react'
import { NavLink } from 'react-router-dom';
import web from "../../src//images/ravi_home.png"
import Common from './Common';
const Home = () => {
    return (
       
         <>
         <div>
        <Common
        name='Grow your Knowledge with'
        imgsrc={web}
        visit="/courses" 
        btname = 'Get started'/>
        </div>
          </>
    )
}

export default Home;