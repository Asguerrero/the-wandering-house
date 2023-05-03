import React  from 'react';
import Rectangle from '../rectangle/rectangle.component.jsx'
import { Link } from "react-router-dom";


export const FirstPanel = ({activePopUp, nextPanel}) => (
    <div className='lanesboro-main-container'>
    {/* <div className='link-container'><Link className='link-align' to="/"> <span className="material-symbols-outlined home-icon-white">home</span></Link> <span></span></div> */}
    <div className='lanesboro-vertical-container'>
        <div className='vertical-container-sub'>
        <div className='link-container'><Link className='link-align' to="/"> <span className="material-symbols-outlined home-icon-white">home</span></Link> <span></span></div>
        <Rectangle key={1} height={50} onClick={() => activePopUp(1)}  id={1}  quilt={"lanesboro"} additionalClass={"rectangle-1"}/>
        <Rectangle key={7} height={40} onClick={() => activePopUp(7)}  id={7}  quilt={"lanesboro"} additionalClass={"rectangle-7"}/>
        <Rectangle key={6} height={40} onClick={() => activePopUp(6)}  id={6}  quilt={"lanesboro"} additionalClass={"rectangle-6"}/>
        </div>
    </div>

    <div className='lanesboro-horizontal-container'>
        <div className='first-div'>
            <Rectangle key={2} height={80} onClick={() => activePopUp(2)}  id={2}  quilt={"lanesboro"} additionalClass={"rectangle-2"}/>
            <Rectangle key={3} height={45} onClick={() => activePopUp(3)}  id={3}  quilt={"lanesboro"} additionalClass={"rectangle-3"}/>
            <Rectangle key={4} height={45} onClick={() => activePopUp(4)}  id={4}  quilt={"lanesboro"} additionalClass={"rectangle-4"}/>

        </div>
        
        <div className='title-container'>
            <div className='title-div'>
                <h2 className='title-text'> I KNOW I'M HOME WHEN</h2>
            </div>
            <div className='arrow-div-first-napel'><span onClick={() => nextPanel()} className="material-symbols-outlined arrows arrow-forward">arrow_forward_ios</span></div>
        </div>

        <div className='third-div'>
            <Rectangle key={8} height={60} onClick={() => activePopUp(8)}  id={8}  quilt={"lanesboro"} additionalClass={"rectangle-"}/>
            <Rectangle key={9} height={70} onClick={() => activePopUp(9)}  id={9}  quilt={"lanesboro"} additionalClass={"rectangle-9"}/>
            <Rectangle key={10} height={50} onClick={() => activePopUp(10)}  id={10}  quilt={"lanesboro"} additionalClass={"rectangle-"}/>
            <Rectangle key={11} height={70} onClick={() => activePopUp(11)}  id={11}  quilt={"lanesboro"} additionalClass={"rectangle-11"}/>

        </div>

    </div>

    
</div>
)