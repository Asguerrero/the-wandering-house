import React  from 'react';
import Rectangle from '../../rectangle/rectangle.component.jsx'
import { Link } from "react-router-dom";
import './redwing-panels.css';



export const FirstPanel = ({activePopUp, nextPanel}) => (
   
   <div className='rw-main-div'>

        <div className='rw-home-icon-div-first-panel'><Link className='link-align' to="/"> 
            <span className="material-symbols-outlined rw-home-icon">home</span></Link> <span></span>
        </div>
 
        <div className='rw-quilt-container'>
            <div className='rw-background'> 
                <div className='rw-first-panel-first-div'>
                    <img className='i-know-img' src='https://main-page-images-quilt.s3.amazonaws.com/rw-i-know-home-sign.png'></img>
                    <div className='flex'>
                        <Rectangle key={6} height={110} onClick={() => activePopUp(6)}  id={6}  quilt={"redwing"} />
                        <Rectangle key={37} height={127} onClick={() => activePopUp(37)}  id={37}  quilt={"redwing"} />
                    </div>
                </div>
                <img className='rw-first-panel-river' src='https://main-page-images-quilt.s3.amazonaws.com/panel1-river.png'></img>
                <div  className='rw-first-panel-second-div'>
                    <div>
                        <Rectangle key={21} height={80} onClick={() => activePopUp(21)}  id={21}  quilt={"redwing"} />
                        <Rectangle key={33} height={100} onClick={() => activePopUp(33)}  id={33}  quilt={"redwing"} />
                        <Rectangle key={40} height={100} onClick={() => activePopUp(40)}  id={40}  quilt={"redwing"} />
                        <Rectangle key={54} height={100} onClick={() => activePopUp(54)}  id={54}  quilt={"redwing"} />
                        <div className='rw-first-panel-second-div-sub' >
                            <Rectangle key={53} height={100} onClick={() => activePopUp(53)}  id={53}  quilt={"redwing"} />
                            <Rectangle key={20} height={160} onClick={() => activePopUp(20)}  id={20}  quilt={"redwing"} />
                            <Rectangle key={17} height={100} onClick={() => activePopUp(17)}  id={17}  quilt={"redwing"} />
                            <Rectangle key={49} height={160} onClick={() => activePopUp(49)}  id={49}  quilt={"redwing"} />
                        </div>
                       
                    </div>

                    <div>
                        <Rectangle key={38} height={90} onClick={() => activePopUp(38)}  id={38}  quilt={"redwing"} />
                        <Rectangle key={15} height={80} onClick={() => activePopUp(15)}  id={15}  quilt={"redwing"} />
                        <Rectangle key={44} height={68} onClick={() => activePopUp(44)}  id={44}  quilt={"redwing"} />
                        <Rectangle key={55} height={60} onClick={() => activePopUp(55)}  id={55}  quilt={"redwing"} /> 
                    </div>

                    <div>
                        <Rectangle key={32} height={70} onClick={() => activePopUp(32)}  id={32}  quilt={"redwing"} />
                        <Rectangle key={45} height={70} onClick={() => activePopUp(45)}  id={45}  quilt={"redwing"} />
                        <Rectangle key={36} height={85} onClick={() => activePopUp(36)}  id={36}  quilt={"redwing"} />
                        <Rectangle key={60} height={90} onClick={() => activePopUp(60)}  id={60}  quilt={"redwing"} />
                    </div>
                </div>
            
            </div> 
        </div>

        <div className='rw-next-arrow-div'>
            <span onClick={() => nextPanel()} className="material-symbols-outlined rw-arrows ">arrow_forward_ios</span>
        </div>
      
        
         


        {/* <div className='redwing-first-panel-main-div'>
            <div className='redwing-home'><Link className='link-align' to="/"> <span className="material-symbols-outlined home-icon-blue">home</span></Link> <span></span></div>
            <div>
                <div className='lanesboro-background'>
                    <img className='test' src='https://main-page-images-quilt.s3.amazonaws.com/redWingSecondPanel.png'></img>
                </div> 
                <div className='first-panel-first-div'>
                
                    <div className='redwing-first-panel-welcome-sign'>
                        <div className='i-know-i-am-home'>I know I am home when...</div>
                    </div>
                    <div className='first-panel-first-sub-div'>
                        <Rectangle key={6} height={50} onClick={() => activePopUp(6)}  id={6}  quilt={"redwing"} />
                        <Rectangle key={37} height={50} onClick={() => activePopUp(37)}  id={37}  quilt={"redwing"} />
                    </div>
                </div>
                    <div className='red-wing-first-panel-second-main-div'>
                        <div className='red-wing-first-panel-first-column'>
                            <Rectangle key={21} height={26} onClick={() => activePopUp(21)}  id={21}  quilt={"redwing"} />
                            <Rectangle key={33} height={29} onClick={() => activePopUp(33)}  id={33}  quilt={"redwing"} />
                            <Rectangle key={40} height={32} onClick={() => activePopUp(40)}  id={40}  quilt={"redwing"} />
                            <Rectangle key={54} height={35} onClick={() => activePopUp(54)}  id={54}  quilt={"redwing"} />
                            <Rectangle key={27} height={25} onClick={() => activePopUp(27)}  id={27}  quilt={"redwing"} />
                            <Rectangle key={49} height={23} onClick={() => activePopUp(49)}  id={49}  quilt={"redwing"} />
                        </div>
                        <div className='red-wing-first-panel-second-column'>
                            <Rectangle key={38} height={26} onClick={() => activePopUp(38)}  id={38}  quilt={"redwing"} />
                            <Rectangle key={15} height={30} onClick={() => activePopUp(15)}  id={15}  quilt={"redwing"} />
                            <Rectangle key={44} height={26} onClick={() => activePopUp(44)}  id={44}  quilt={"redwing"} />
                            <Rectangle key={55} height={32} onClick={() => activePopUp(55)}  id={55}  quilt={"redwing"} />
                        </div>
                        <div className='red-wing-first-panel-third-column'>
                            <Rectangle key={32} height={20} onClick={() => activePopUp(32)}  id={32}  quilt={"redwing"} />
                            <Rectangle key={45} height={20} onClick={() => activePopUp(45)}  id={45}  quilt={"redwing"} />
                            <Rectangle key={36} height={30} onClick={() => activePopUp(36)}  id={36}  quilt={"redwing"} />
                            <Rectangle key={60} height={50} onClick={() => activePopUp(60)}  id={60}  quilt={"redwing"} />
                        </div>
                    </div>
                
               
            </div>
        
            <div className='red-wing-arrow-div-first-napel'><span onClick={() => nextPanel()} className="material-symbols-outlined arrows-redwing arrow-forward">arrow_forward_ios</span></div>
         </div> */}
   

    </div>
)