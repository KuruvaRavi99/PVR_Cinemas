import React from 'react';
import './NotFound.css'
import { Color } from 'ogl';

const NotFound = () => {
  return (
    <div className='not-found'>
      <h1 className='not-found-message'><span style={{ color: 'var(--color-primary)' }}>404</span> No Data Found !</h1>
      <img src="./src/assets/Images/NotFound.png" alt="" className="notFoundImage" />
    </div>
  );
};

export default NotFound;