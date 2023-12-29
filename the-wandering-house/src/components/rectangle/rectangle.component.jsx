import React from 'react';
import './rectangle.style.css';

export const Rectangle = ({height, onClick, id, quilt, additionalClass }) => (

  <div className='rectangle-container' >
    <img
      className={`rectangle-picture ${additionalClass} ${quilt == "lanesboro" ? `lanesboro-rectangle` : null} ${quilt == "redwing" ? `rw-rectangle-${id}` : null}`}
      alt='rectangle'
      src={ quilt == "redwing" ?
      id == 18 ? `https://redwing-images-low-quality.s3.amazonaws.com/${id}.png` : 
      `https://redwing-images-low-quality.s3.amazonaws.com/${id}.jpeg` :
      quilt === "northfield" ? 
      `https://northfield-images-low-quality.s3.amazonaws.com/${id}.jpg` :
      id == 18 || id == 22 || id == 25 || id == 20 ?
      `https://lanesboro-images-low-quality.s3.amazonaws.com/${id}.png` :
      `https://lanesboro-images-low-quality.s3.amazonaws.com/${id}.jpg`}
      style={{ width: `${height}%`
      }}
      onClick={onClick}
    />
  </div>
  
);

export default Rectangle;