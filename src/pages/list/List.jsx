import { styled } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Hero } from '../dashboard/Hero'
import {CardPlace} from './CardPlace'

import { allPlaces } from "../../redux/appRedux"
import { useSelector } from 'react-redux'

const ListStyles =  styled(Box)`
    display: grid;
    /* grid-template-columns: repeat(auto-fit,1fr); */
    grid-template-columns: repeat(auto-fit,minmax(370px,1fr));
    gap: 35px;
`

export const List = () => {

    const places = useSelector((state) => state.placesReducer.places)
    const dispatcher = useDispatch()

    console.log(places)

    useEffect(()=>{
        dispatcher(allPlaces())
    }, [dispatcher])
  
    return (
    <>
        {/* <Hero /> */}
        <ListStyles >
            {places.map((place, index)=>(
                <CardPlace key={index} place={place} />
            ))}
    </ListStyles>
    </>
  )
}
