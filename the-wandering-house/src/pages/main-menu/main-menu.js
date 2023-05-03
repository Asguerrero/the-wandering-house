import React from 'react';
import { Link } from "react-router-dom";
import './main-menu.css';


export const MainMenu = ({ }) => (

    <div className='home-page-div' >
    <div className='home-page-container'>
      <div className='main-page-ult-text'>
        <div className='main-page-title'>Welcome To The Wandering House </div>
        <div className='main-page-text'>
          <p>
         <span className='italics'> The Northfield &amp; Lanesboro Sonic Quilts </span> are digital replicas of physical quilts embroidered and assembled by community members in Northfield and Lanesboro, Minnesota, in collaboration with Chilean/American artist and filmmaker Cecilia Cornejo Sotelo. The quotes come from audio testimonies recorded in 2019 by the artist’s ongoing project, <a className='hyperlink' href='https://thewanderinghouse.com/'> The Wandering House</a>. This multi-platform project invited community members in both places to reflect on the meaning of home and to respond to the prompt <a className='italics'>I Know I’m Home When… </a> In 2020, during the heart of the pandemic, the fragments were embroidered by a different set of residents. These digital replicas were developed by Computer Science students, Valentina Guerrero Chala &amp; Chisomnazu Oguh, from Carleton College, who worked in close collaboration with Cecilia. By listening to the original audio and reading a brief statement by the artist who later embroidered the quote, these sonic quilts invite you to reflect on the layered meaning of community.


          </p>
          

        </div>
      </div>

      <div className='home-page-pics'>
        <img
              alt='Bridge Square Picture'
              src={`https://main-page-images-quilt.s3.amazonaws.com/NCQ-min.jpg`}
              style={{width: '100%'}}
            />
        <img
              alt='Sergio Picture'
              src={`https://main-page-images-quilt.s3.amazonaws.com/LCQ-final.jpg`}
              style={{width: '100%'}}
            />  
      </div>

      <div className='main-page-container-sub'>
                <div className='second-main-menu-container'>
                <Link to="northfield"> 
                        <button className='main-menu-button'>
                        Explore Northfield Quilt
                        </button>
                    </Link>

                    <Link to="lanesboro"> 
                        <button className='main-menu-button'>
                            Explore Lanesboro Quilt
                        </button>
                    </Link>
                </div>
              
            </div>
      
     </div> 
  </div>
)


export default MainMenu;