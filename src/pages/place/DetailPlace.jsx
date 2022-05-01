import { DeleteOutline, EditOutlined } from '@mui/icons-material'
import { Button, IconButton, styled, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { changeFlagCreateOrEdit, delPlace, placeById } from '../../redux/appRedux'
import { PlaceImageList } from './ImageList'

const DetailPlaceStyles =  styled('div')`
    display: flex;
    justify-content: space-between;
    gap: 20px;

    & .detail__container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        /* border: 1px solid red; */
        padding: 5px;
    }

    & .detail__buttons {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    & .icon_button_delete, 
      .icon_button_edit {
          margin: 0 15px;
      }

    & .icon_button_delete {
        border: 1px solid rgb(243, 68, 97, 0.5);
    }
    
    & .icon_button_edit {
        border: 1px solid rgb(57, 130, 144, 0.5);
    }
`


export const DetailPlace = () => {

    const params = useParams()
    const {name, description, _id, imgUrl, location} = useSelector(state=>state.placesReducer.place)
    const dispatcher = useDispatch()

    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)

    

    const navigate = useNavigate()

    useEffect(()=>{
        dispatcher(placeById(params.id))
    },[])

    useEffect(()=>{
        if(name !== undefined){
            setLatitude(location[0].latitude)
            setLongitude(location[0].longitude)
        }
    },[name])

    const handleDeleteButton = () => {
        dispatcher(delPlace(_id))
    }

    const handleEditButton = async () => {
        await dispatcher(changeFlagCreateOrEdit(1)); 
        await navigate(`/editPlace/${_id}`)
    }

  return (
    <DetailPlaceStyles>
        <div className='detail__container' >
            <div className='detail__text' >
                <Typography variant='h2' >{name}</Typography>
                <Typography variant='p' >{description}</Typography>
            </div>
            <div className='detail__buttons' >
                <div className='detail__buttons__left' >
                    <Button
                    variant='outlined'
                    key= 'Reportes'
                    href={`https://www.google.com/maps/@${latitude},${longitude},15z`}
                    target='_blank'
                    sx={{ my: 2, borderRadius:' 50px' }}
                    >Ir al mapa
                    </Button>
                </div>
                <div className='detail__buttons__right' >
                    <IconButton onClick={()=> handleDeleteButton()} className='icon_button_delete' aria-label="deleteoutline" color="secondary" size='small' >
                        <DeleteOutline />
                    </IconButton>
                    <IconButton onClick={()=> handleEditButton()} className='icon_button_edit' aria-label="editoutline" color="primary" size='small' >
                        <EditOutlined />
                    </IconButton>
                </div>
            </div>
        </div>
        <div className='images__container' >
            <PlaceImageList images = {imgUrl} />
        </div>
    </DetailPlaceStyles>
  )
}
