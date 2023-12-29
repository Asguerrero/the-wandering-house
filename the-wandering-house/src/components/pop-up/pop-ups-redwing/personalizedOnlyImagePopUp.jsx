import React from 'react';
import '../pop-up.style.css';

export const PersonalizedOnlyImagePopUp = ({ age, translation, embroiderer, title, onClick, id}) => (
  
<div className='pop-up-div-only-audio redwing-pop-up rw-personalized' onClick={onClick}>
    <div className='rw-personalized-first-pop-up-div'>
        <div className='rw-only-audio-pop-up-container-left'>
            <div className='pop-up-flex-box'>
            <div className='personalized-only-audio-pop-up-flex-column'>
    
            <img
                alt='rectangle'
                src={`https://redwing-images-low-quality.s3.amazonaws.com/${id}.jpeg`}
                style={{height: '100%'}}
                className='pop-up-img'
            />
            
            </div>
            <p className='embroiderer-name' style={{fontWeight: 'bold', marginTop: '1rem'}}>Embroiderer: {embroiderer}</p>

            </div>
        </div>
    
        <div className='only-audio-pop-up-container-right'>
            <div><h2  className='personalized-title'>{title}</h2></div>
    
            {translation === undefined ?
            null
            :
            <div className='redwing-translation'> <h3>{`${translation}`}</h3> </div>
            }
            <img
                alt='rectangle'
                src={`https://redwing-written-bits.s3.amazonaws.com/${id}.jpeg`}
                style={{width: '100%'}}
                className='written-bit'
            />
            <p className='emborider-info-text'><i>{`At the time of the recording in 2022 the person was ${age == 'teen'? 'a' : age == 'adult' ? 'an' : '' } ${age}`}</i></p>
           
        </div>
    </div>
    
    <div className='second-pop-up-div'>
    </div>
    
   </div>
);

export default PersonalizedOnlyImagePopUp;