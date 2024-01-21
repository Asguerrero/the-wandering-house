import React  from 'react';
import Rectangle from '../../rectangle/rectangle.component.jsx'
import { Link } from "react-router-dom";


export const ThirdPanel = ({activePopUp, nextPanel, previousPanel}) => (

    <div className='rw-main-div'>

        <div className='rw-home-icon-div'><Link className='link-align' to="/"> 
            <span className="material-symbols-outlined rw-home-icon">home</span></Link> <span></span>
            <div className='rw-arrow-back-div'>
                <span onClick={() => previousPanel()} className="material-symbols-outlined rw-arrows arrow-back">arrow_back_ios</span>
            </div>
        </div>

        <div className='rw-quilt-container'>
            <div className='rw-background'> 
                <img className='rw-third-panel-river' src='https://main-page-images-quilt.s3.amazonaws.com/panel-3-river.png'></img>
                <div className='rw-third-panel-first-div'>
                    <div>
                        <Rectangle key={34} height={70} onClick={() => activePopUp(34)}  id={34}  quilt={"redwing"} />
                        <Rectangle key={56} height={98} onClick={() => activePopUp(56)}  id={56}  quilt={"redwing"} />
                        <div className='rw-third-panel-first-div-sub-div'>
                            <Rectangle key={9} height={100} onClick={() => activePopUp(9)}  id={9}  quilt={"redwing"} />
                            <Rectangle key={28} height={120} onClick={() => activePopUp(28)}  id={28}  quilt={"redwing"} />
                        </div>
                        <Rectangle key={27} height={78} onClick={() => activePopUp(27)}  id={27}  quilt={"redwing"} />
                    </div>

                    <div>
                        <Rectangle key={47} height={100} onClick={() => activePopUp(47)}  id={47}  quilt={"redwing"} />
                        <Rectangle key={30} height={75} onClick={() => activePopUp(30)}  id={30}  quilt={"redwing"} />
                        <Rectangle key={39} height={80} onClick={() => activePopUp(39)}  id={39}  quilt={"redwing"} />
                        <Rectangle key={52} height={96} onClick={() => activePopUp(52)}  id={52}  quilt={"redwing"} />
                        <div className='rw-third-panel-first-div-second-sub-div'>
                            <Rectangle key={7} height={140} onClick={() => activePopUp(7)}  id={7}  quilt={"redwing"} />
                            <Rectangle key={19} height={60} onClick={() => activePopUp(19)}  id={19}  quilt={"redwing"} />
                        </div>
                        <Rectangle key={4} height={75} onClick={() => activePopUp(4)}  id={4}  quilt={"redwing"} />
                    </div>

                    <div>
                        <Rectangle key={58} height={80} onClick={() => activePopUp(58)}  id={58}  quilt={"redwing"} />
                        <Rectangle key={23} height={47} onClick={() => activePopUp(23)}  id={23}  quilt={"redwing"} />
                        <Rectangle key={25} height={64} onClick={() => activePopUp(25)}  id={25}  quilt={"redwing"} />
                        <Rectangle key={14} height={67} onClick={() => activePopUp(14)}  id={14}  quilt={"redwing"} />
                        <Rectangle key={41} height={37} onClick={() => activePopUp(41)}  id={41}  quilt={"redwing"} />
                    </div>

                </div>

                <div className='rw-third-panel-second-div'>
                    <div>
                        <Rectangle key={31} height={76} onClick={() => activePopUp(31)}  id={31}  quilt={"redwing"} />
                        <Rectangle key={1} height={90} onClick={() => activePopUp(1)}  id={1}  quilt={"redwing"} />
                    </div>

                    <div>
                        <Rectangle key={13} height={84} onClick={() => activePopUp(13)}  id={13}  quilt={"redwing"} />
                        <Rectangle key={10} height={82} onClick={() => activePopUp(10)}  id={10}  quilt={"redwing"} />
                        
                    </div>
                        
                    <div>
                        <Rectangle key={29} height={114} onClick={() => activePopUp(29)}  id={29}  quilt={"redwing"} />
                    </div>

                    <div>
                        <img className='rw-wandering-house-sign' src='https://main-page-images-quilt.s3.amazonaws.com/wandering-house-sign.jpg'></img>
                    </div>
                    
                </div>
            
            
            </div> 
        </div>

        <div className='rw-next-arrow-div'>
            
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