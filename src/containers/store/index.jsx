import React from 'react';
import HeroContainer from '../../components/heroContainer/'



const StorePage = () => {
  const title = 'The way to buy 3D models';
  const subTitle = 'High-quality 3D models for VFX, game development, VR/AR, architecture, and animation.'

  return (
    <>
      <HeroContainer title={ title } subTitle={ subTitle } />
    </>
  )
}

export default StorePage;