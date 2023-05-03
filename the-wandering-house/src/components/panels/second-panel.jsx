import React  from 'react';
import Rectangle from '../rectangle/rectangle.component.jsx'
import { Link } from "react-router-dom";

export const SecondPanel = ({activePopUp, nextPanel, previousPanel}) => (
    <div className='lanesboro-second-panel-main-container'>
        <div className='arrow-div-left'><Link className='link-align' to="/"> <span className="material-symbols-outlined home-icon-white">home</span></Link><span onClick={() => previousPanel()} className="material-symbols-outlined arrows arrow-back">arrow_back_ios</span></div>
        <div className='second-panel-first-div'>
            <div className='first-div-sub'>
                <Rectangle key={5} height={40} onClick={() => activePopUp(5)}  id={5}  quilt={"lanesboro"} additionalClass={"rectangle-5"}/>
                <Rectangle key={12} height={60} onClick={() => activePopUp(12)}  id={12}  quilt={"lanesboro"} additionalClass={"rectangle-12"}/>
            </div>
        </div>
        
        <div className='second-panel-second-div'>
            <Rectangle key={13} height={44} onClick={() => activePopUp(13)}  id={13}  quilt={"lanesboro"} additionalClass={"rectangle-13"}/>
            <div className='rectangle-18-sub-div'>
                <span></span>
                <Rectangle key={18} height={50} onClick={() => activePopUp(18)}  id={18}  quilt={"lanesboro"} additionalClass={"rectangle-18"}/>
            </div>
            <Rectangle key={23} height={44} onClick={() => activePopUp(23)}  id={23}  quilt={"lanesboro"} additionalClass={"rectangle-23"}/>
        </div>

        <div className='second-panel-third-div'>
            <div className='third-div-sub'>
                <Rectangle key={14} height={40} onClick={() => activePopUp(14)}  id={14}  quilt={"lanesboro"} additionalClass={"rectangle-14"}/>
                <div className='rectangle-19-sub-div'>
                    <span></span>
                    <Rectangle key={19} height={34} onClick={() => activePopUp(19)}  id={19}  quilt={"lanesboro"} additionalClass={"rectangle-19"}/>
                </div>
                <Rectangle key={24} height={44} onClick={() => activePopUp(24)}  id={24}  quilt={"lanesboro"} additionalClass={"rectangle-24"}/>
            </div>
        </div>

        <div className='arrow-div'><span onClick={() => nextPanel()} className="material-symbols-outlined arrows arrow-forward">arrow_forward_ios</span></div>

    </div>
)