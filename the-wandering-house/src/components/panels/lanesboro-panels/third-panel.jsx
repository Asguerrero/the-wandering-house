import React from 'react';
import Rectangle from '../../rectangle/rectangle.component.jsx';
import { Link } from "react-router-dom";

export const ThirdPanel = ({activePopUp, previousPanel}) => (
    <div className='lanesboro-third-panel-main-container'>
       <div className='arrow-div-left'><Link className='link-align' to="/"> <span className="material-symbols-outlined home-icon-white">home</span></Link><span onClick={() => previousPanel()} className="material-symbols-outlined arrows arrow-back">arrow_back_ios</span></div>
        
        <div className='third-panel-first-div'>
            <Rectangle key={20} height={90} onClick={() => activePopUp(20)}  id={20}  quilt={"lanesboro"} additionalClass={"rectangle-20"}/>
        </div>
       
        <div className='third-panel-second-div'>
            <div className='third-panel-second-div-first-container'>
                <Rectangle key={15} height={45} onClick={() => activePopUp(15)}  id={15}  quilt={"lanesboro"} additionalClass={"rectangle-15"}/>
                <Rectangle key={16} height={50} onClick={() => activePopUp(16)}  id={16}  quilt={"lanesboro"} additionalClass={"rectangle-16"}/>
            </div>
            
            <div className='third-panel-second-div-second-container'>
                <Rectangle key={21} height={55} onClick={() => activePopUp(21)}  id={21}  quilt={"lanesboro"} additionalClass={"rectangle-21"}/>
                <Rectangle key={22} height={40} onClick={() => activePopUp(22)}  id={22}  quilt={"lanesboro"} additionalClass={"rectangle-22"}/>
            </div>

            <div className='third-panel-second-div-third-container'>
                <div className='third-panel-title top'><span></span><h3>The Wandering House</h3></div>
                <div className='third-panel-title bottom'><span></span><h3>Lanesboro 2019 - 2022</h3></div>

            </div>
        </div>
       
        <div className='third-panel-third-div'>
            <Rectangle key={17} height={50} onClick={() => activePopUp(17)}  id={17}  quilt={"lanesboro"} additionalClass={"rectangle-17"}/>
            <Rectangle key={25} height={50} onClick={() => activePopUp(25)}  id={25}  quilt={"lanesboro"} additionalClass={"rectangle-25"}/>
        </div>
    
    </div>
)