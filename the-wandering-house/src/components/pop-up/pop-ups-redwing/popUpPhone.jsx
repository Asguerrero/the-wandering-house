import React from 'react';
import '../pop-up.style.css';

export const PopUpPhone = ({ age, statement, translation, embroiderer, title, onClick, id, rectanglesWithoutAudio}) => (
  
  <div className='pop-up-div' onClick={onClick}>
     
    <div className='pop-up-container-left'>
        <div className='pop-up-flex-box'>
         <div className='pop-up-flex-column'>

          <img
            alt='rectangle'
            src={`https://redwing-images-low-quality.s3.amazonaws.com/${id}.jpeg`}
            
            style={{height: '100%'}}
            className='pop-up-img'
          />
        
          </div>
          <p className='embroiderer-name' style={{fontWeight: 'bold', marginTop: '0rem'}}>Embroiderer: {embroiderer}</p>
          {console.log(`test ${rectanglesWithoutAudio}`)}
          { !rectanglesWithoutAudio.includes(id)?
            <audio controls="controls" style={{width: '90%'}} 
            src={`https://redwing-audio.s3.amazonaws.com/${id}.mp3` }>
            </audio> :
            null
          }
          
          <p className='emborider-info-text'><i>{`At the time of the recording in 2022 the person was ${age == 'teen'? 'a' : age == 'adult' ? 'an' : '' } ${age}`}</i></p>
          
        </div>
    </div>

    <div className='pop-up-container-right'>
        <div className='main-text' ><h2>{title}</h2></div>

        {translation === undefined ?
        null
        :
        <div className='translation' > <h4>{`${translation}`}</h4> </div>
        }
       

        { statement === undefined ?
         null 
        :
        <p className='pop-up-by-embroiderer-text'>{`Statement by ${embroiderer}:`}</p> }

        <p className='pop-up-statement-text'>{statement}</p>

        {/* {
            rectanglesWithoutAudio.includes(id)?
            <img
            alt='rectangle'
            src={`https://redwing-written-bits.s3.amazonaws.com/${id}.jpeg`}
            style={{width: '90%'}}
            className='written-bit'
            /> : null
        } */}
       

    </div>
   
  </div>
);

export default PopUpPhone;