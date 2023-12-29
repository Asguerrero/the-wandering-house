import React  from 'react';
import Rectangle from '../../rectangle/rectangle.component.jsx'
import { Link } from "react-router-dom";
import './redwing-panels.css';


export const SecondPanel = ({activePopUp, nextPanel, previousPanel}) => (

    <div className='rw-main-div'>

        <div className='rw-home-icon-div'><Link className='link-align' to="/"> 
            <span className="material-symbols-outlined rw-home-icon">home</span></Link> <span></span>
            <div className='rw-arrow-back-div'>
                <span onClick={() => previousPanel()} className="material-symbols-outlined rw-arrows arrow-back">arrow_back_ios</span>
            </div>
        </div>

        <div className='rw-quilt-container'>
            <div className='rw-background extra-padding-top'> 
             <img className='rw-second-panel-river' src='https://main-page-images-quilt.s3.amazonaws.com/panel-2-river.png'></img>
                <div className="rw-second-panel-first-div">
                    <div>
                        <Rectangle key={51} height={75} onClick={() => activePopUp(51)}  id={51}  quilt={"redwing"} />
                        <Rectangle key={16} height={90} onClick={() => activePopUp(51)}  id={16}  quilt={"redwing"} />
                        <Rectangle key={2} height={70} onClick={() => activePopUp(2)}  id={2}  quilt={"redwing"} />
                    </div>

                    <div>
                        <Rectangle key={42} height={90} onClick={() => activePopUp(42)}  id={42}  quilt={"redwing"} />
                        <Rectangle key={43} height={78} onClick={() => activePopUp(43)}  id={43}  quilt={"redwing"} />
                        <Rectangle key={22} height={78} onClick={() => activePopUp(22)}  id={22}  quilt={"redwing"} />
                        <Rectangle key={24} height={78} onClick={() => activePopUp(24)}  id={24}  quilt={"redwing"} />
                        <Rectangle key={5} height={60} onClick={() => activePopUp(5)}  id={5}  quilt={"redwing"} />
                      
                        
                    </div>

                    <div>
                        <Rectangle key={48} height={80} onClick={() => activePopUp(48)}  id={48}  quilt={"redwing"} />
                        <div className='rw-second-panel-first-div-sub-div'>
                            <Rectangle key={11} height={180} onClick={() => activePopUp(11)}  id={11}  quilt={"redwing"} />
                            <Rectangle key={46} height={60} onClick={() => activePopUp(46)}  id={46}  quilt={"redwing"} />
                        </div>
                        <Rectangle key={50} height={75} onClick={() => activePopUp(50)}  id={50}  quilt={"redwing"} />
                        <Rectangle key={8} height={60} onClick={() => activePopUp(8)}  id={8}  quilt={"redwing"} />
                        
                    </div>
                </div>

               
            
                <div className="rw-second-panel-second-div">
                    <div>
                        <Rectangle key={18} height={65} onClick={() => activePopUp(18)}  id={18}  quilt={"redwing"} />
                        <Rectangle key={3} height={60} onClick={() => activePopUp(3)}  id={3}  quilt={"redwing"} />
                        <Rectangle key={12} height={60} onClick={() => activePopUp(12)}  id={12}  quilt={"redwing"} />
                        <Rectangle key={59} height={95} onClick={() => activePopUp(59)}  id={59}  quilt={"redwing"} />
                    </div>

                    <div>
                        <Rectangle key={57} height={100} onClick={() => activePopUp(57)}  id={57}  quilt={"redwing"} />
                    </div>

                    <div>
                        <Rectangle key={26} height={60} onClick={() => activePopUp(26)}  id={26}  quilt={"redwing"} />
                        <Rectangle key={35} height={75} onClick={() => activePopUp(35)}  id={35}  quilt={"redwing"} />
                        
                    </div>
                </div>
            
            </div> 
        </div>

        <div className='rw-next-arrow-div'>
            <span onClick={() => nextPanel()} className="material-symbols-outlined rw-arrows ">arrow_forward_ios</span>
        </div>

         {/* // <Rectangle key={1} height={10} onClick={() => activePopUp(1)}  id={1}  quilt={"redwing"} />
                // <Rectangle key={9} height={10} onClick={() => activePopUp(9)}  id={9}  quilt={"redwing"} />
                // <Rectangle key={2} height={10} onClick={() => activePopUp(2)}  id={2}  quilt={"redwing"} />
                // <Rectangle key={3} height={10} onClick={() => activePopUp(3)}  id={3}  quilt={"redwing"} />
                // <Rectangle key={13} height={10} onClick={() => activePopUp(13)}  id={13}  quilt={"redwing"} />
                // <Rectangle key={14} height={10} onClick={() => activePopUp(14)}  id={14}  quilt={"redwing"} />
                // <Rectangle key={20} height={10} onClick={() => activePopUp(20)}  id={20}  quilt={"redwing"} />
                // <Rectangle key={23} height={10} onClick={() => activePopUp(23)}  id={23}  quilt={"redwing"} />
                // <Rectangle key={25} height={10} onClick={() => activePopUp(25)}  id={25}  quilt={"redwing"} />
                // <Rectangle key={29} height={10} onClick={() => activePopUp(29)}  id={29}  quilt={"redwing"} />
                // <Rectangle key={37} height={10} onClick={() => activePopUp(37)}  id={37}  quilt={"redwing"} />
                // <Rectangle key={12} height={10} onClick={() => activePopUp(12)}  id={12}  quilt={"redwing"} />
                // <Rectangle key={36} height={10} onClick={() => activePopUp(36)}  id={36}  quilt={"redwing"} /> */}
    </div>
    
               
      
)