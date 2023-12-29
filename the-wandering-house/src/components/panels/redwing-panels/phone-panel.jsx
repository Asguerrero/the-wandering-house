import React from 'react';
import Rectangle from '../../rectangle/rectangle.component.jsx'


export const PhonePanel = ({ rectangleArray, activePopUp }) => (
    <div className='phone-container rw-phone-container'>
        <img className='i-know-img-phone' src='https://main-page-images-quilt.s3.amazonaws.com/rw-i-know-home-sign.jpg'></img>
        
        <div className='rw-phone-sub-container'>
        {rectangleArray.map(id => (<Rectangle key={id} height={85} onClick={() => activePopUp(id)}  id={id}  quilt={"redwing"} additionalClass={`rectangle-phone`} />))}
        </div>
        <div className='rw-wandering-house-sign-div-phone'>
            <img className='rw-wandering-house-sign-phone' src='https://main-page-images-quilt.s3.amazonaws.com/wandering-house-sign-.png'></img>
        </div>
    </div>


)