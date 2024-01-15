import React from 'react';
import {Component} from 'react';
import { Link } from "react-router-dom";
import './main-menu.css';


class MainMenu extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      LanesboroBackground: null
    };

  }

  componentDidMount() {
    // Pre load all images 
    const LanesboroTopImg = new Image();
    const LanesboroMiddleImg = new Image();
    const RedWingImg = new Image();
    const RedWingFirstRiver = new Image();
    const RedWingSecondRiver = new Image();
    const RedWingThirdRiver = new Image();
    LanesboroTopImg.src = "https://main-page-images-quilt.s3.amazonaws.com/top-image.jpg";
    LanesboroMiddleImg.src = "https://main-page-images-quilt.s3.amazonaws.com/middle-image.jpg";
    RedWingImg.src = "https://main-page-images-quilt.s3.amazonaws.com/rw-background-17.jpg"; 
    RedWingFirstRiver.src = "https://main-page-images-quilt.s3.amazonaws.com/panel1-river.png"; 
    RedWingSecondRiver.src = "https://main-page-images-quilt.s3.amazonaws.com/panel-2-river.png"; 
    RedWingThirdRiver.src = "https://main-page-images-quilt.s3.amazonaws.com/panel-3-river.png"; 
    
    //All of northfield's rectangles 
    for (let id = 1; id <= 50; id++) {
      let northfieldRectangle = new Image();
      northfieldRectangle.src = `https://northfield-images-low-quality.s3.amazonaws.com/${id}.jpg`
    }

    //Lanesboro's rectangles 
    for (let id = 1; id <= 25; id++) {
      let lanesboroRectangle = new Image();
      lanesboroRectangle.src = `https://lanesboro-images-low-quality.s3.amazonaws.com/${id}.jpg`
    }

    //Red wing's rectangles 
    const redWingRectangleArray = [1,6,5,4,7,8,22,11,15,16,17,18,19, 21,10,41,27,28,30,33,31,34,35,38,39,49,42,44,45, 46,47,48,
    50,51,53,54, 56, 23, 55, 2, 3,13,14,20,25,57,29,58,9, 26, 32, 37, 59, 60, 12, 36]
    for (const id in redWingRectangleArray){
      let RedWingRectangle = new Image();
      RedWingRectangle.src = `https://redwing-images-low-quality.s3.amazonaws.com/${id}.jpeg`
    }
      
  }

  render() {
    return(
    <div className='home-page-div' >
    <div className='home-page-container'>
      <div className='main-page-ult-text'>
        <div className='main-page-title'>Welcome To The Wandering House </div>
        <div className='main-page-text'>
          <p>
            These sonic tapestries are digital replicas of physical quilts embroidered and assembled by community members in Northfield, Lanesboro, and Red Wing, Minnesota, in collaboration with artist and filmmaker Cecilia Cornejo Sotelo. The phrases featured in these works come from audio testimonials recorded by the artist between 2019 and 2023 through her multimedia project, <a className='hyperlink' href='https://thewanderinghouse.com/'>The Wandering House</a>. Through this project, the artist invited community members to reflect on the significance of home and to respond to the prompt I Know I'm Home When... The phrases were embroidered later by a different set of residents. The Northfield digital replica was developed by Valentina Guerrero Chala and Chisomnazu Oguh, both students at Carleton College, in Northfield. The Lanesboro and Red Wing replicas were developed by Valentina in collaboration with Cecilia.
            <br></br> <br></br>
            By listening to the original audio and reading a statement from the person who later embroidered the phrase, these sonic tapestries invite you to reflect on the layered meaning of community. To listen to the original audio testimonials recorded to date, visit <a className='hyperlink' href='https://sonicarchive.thewanderinghouse.com/'>The Wandering House ~ Sonic Archive</a>. 
          </p>
          
        </div>
      </div>

      <div className='home-page-pics'>
        <div className='img-botton-div'>
          <img
                alt='Bridge Square Picture'
                src={`https://main-page-images-quilt.s3.amazonaws.com/NCQ-min.jpg`}
                style={{width: '100%'}}
              />
           <Link to="northfield"> 
                          <button className='main-menu-button'>
                           Northfield Quilt
                          </button>
            </Link>
        </div>
        <div className='img-botton-div'>
          <img
              alt='Sergio Picture'
              src={`https://main-page-images-quilt.s3.amazonaws.com/LCQ-final.jpg`}
              style={{width: '100%'}}
            />  
           <Link to="lanesboro"> 
                          <button className='main-menu-button'>
                              Lanesboro Quilt
                          </button>
            </Link>

        </div>
        <div className='img-botton-div'>
          <img
              alt='Sergio Picture'
              src={`https://main-page-images-quilt.s3.amazonaws.com/rw-home-page-overview-quilt+(1).png`}
              style={{width: '100%'}}
            />  
          <Link to="redwing"> 
                          <button className='main-menu-button'>
                              Red Wing Quilt
                          </button>
          </Link>

        </div>
        
        
      </div>

      
     </div> 
  </div>
 ) }
}


export default MainMenu;