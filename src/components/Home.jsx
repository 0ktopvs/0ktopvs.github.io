import React from 'react';
import RoundedImage from './RoundedImage';
import SocialLinks from './SocialLinks';
import '../styles.css';

const Home = () => {
  return (
    <div align="center">

      <RoundedImage />
      <h1 className='text-with-shadow'>Gennaro Sigillo</h1>
      <p className='description'>Software engineer - FullStack developer</p>
      <div className='d-flex justify-content-center'>
        <SocialLinks />
      </div>
    </div>
    
  );
};

export default Home;