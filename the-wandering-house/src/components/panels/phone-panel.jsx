import React from 'react';
import Rectangle from '../rectangle/rectangle.component.jsx'


export const PhonePanel = ({ rectangleArray, activePopUp }) => (
    <div className='phone-container'>
        <div className='title-div'>
                <h2 className='title-text phone-title'> I KNOW I AM HOME WHEN</h2>
        </div>
        <div className='phone-sub-container'>
        {rectangleArray.map(id => (<Rectangle key={id} height={50} onClick={() => activePopUp(id)}  id={id}  quilt={"lanesboro"} additionalClass={`rectangle-phone-${id}`} />))}
        </div>
    </div>


)