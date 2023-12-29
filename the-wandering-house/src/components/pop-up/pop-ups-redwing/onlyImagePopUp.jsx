import React from 'react';
import '../pop-up.style.css';

export const OnlyImagePopUp = ({ age, translation, embroiderer, title, onClick, id}) => (
  
<div className='pop-up-div-only-audio redwing-pop-up' onClick={onClick}>
    <div className='first-pop-up-div'>
        <div className='only-audio-pop-up-container-left'>
            <div className='pop-up-flex-box'>
            <div className='only-audio-pop-up-flex-column'>
    
            <img
                alt='rectangle'
                src={ id == 18 ? `https://redwing-images-low-quality.s3.amazonaws.com/${id}.png` : 
                    `https://redwing-images-low-quality.s3.amazonaws.com/${id}.jpeg`}
                style={{width: '100%'}}
                className='pop-up-img'
            />
            
            </div>
            <p className='embroiderer-name' style={{fontWeight: 'bold', marginTop: '1rem'}}>Embroiderer: {embroiderer}</p>
            
            </div>
        </div>
    
        <div className='only-audio-pop-up-container-right'>
            <div className='redwing-title'><h2>{title}</h2></div>
    
            {translation === undefined ?
            null
            :
            <div className='redwing-translation'> <h3>{`${translation}`}</h3> </div>
            }
             
           
        </div>
    </div>
    
    <div className='second-pop-up-div'>
        <img
            alt='rectangle'
            src={`https://redwing-written-bits.s3.amazonaws.com/${id}.jpeg`}
            style={{width: '79%'}}
            className='written-bit'
        /> 
         <p className='emborider-info-text'><i>{`At the time of the recording in 2022 the person was ${age == 'teen'? 'a' : age == 'adult' ? 'an' : '' } ${age}`}</i></p>
    </div>
    
   </div>
);

export default OnlyImagePopUp;