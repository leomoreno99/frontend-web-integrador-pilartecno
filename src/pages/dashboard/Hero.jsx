import { styled } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const HeroStyles =  styled(Box)`
    position: relative;
    left: calc((((100vw)-1200px)/2)*-1);
    top: -50px;
    width: 100vw;
    border: 1px solid red;
`

export const Hero = () => {
  return (
      <HeroStyles>
          <img src="https://blog.foto24.com/wp-content/uploads/2014/07/pexels-photo-247599-1024x683.jpeg" alt="portada"/>
      </HeroStyles>
    )
}
