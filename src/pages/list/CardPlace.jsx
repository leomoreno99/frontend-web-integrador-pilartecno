import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, IconButton, styled } from '@mui/material';
// import product from '../../assets/images/products/product_11.jpg'
import { Link,  } from 'react-router-dom';
import { DeleteOutline, EditOutlined } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { changeDeleteNotification, changeFlagCreateOrEdit, delPlace, placeById } from '../../redux/appRedux';
import { useSnackbar } from 'notistack';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const CardStyles =  styled(Card)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 10px 10px 30px 5px rgb(0 0 0 / 20%);
    & .card_actions {
        display: flex;
        flex-direction: row-reverse;
        padding: 0;
        /* gap: 10px; */
    }

    & .icon_button_delete, 
      .icon_button_edit {
          margin: 0 15px 15px 0;
      }

    & .icon_button_delete {
        border: 1px solid rgb(243, 68, 97, 0.5);
    }
    
    & .icon_button_edit {
        border: 1px solid rgb(57, 130, 144, 0.5);
    }
`

export const CardPlace = ({place}) => {
    const flagDeleteNotification = useSelector(state => state.notificationsReducer.flagDeleteNotification)
    const { enqueueSnackbar } = useSnackbar();

    const {name, description, imgUrl, _id} = place
    const dispatcher = useDispatch()

    const navigate = useNavigate()
    

    if(flagDeleteNotification === 1){
        enqueueSnackbar('Lugar borrado exitosamente', { variant: 'success' });
        dispatcher(changeDeleteNotification(0))
    } else if (flagDeleteNotification === 2){
        enqueueSnackbar('Error al intentar borrar lugar', { variant: 'error' });
        dispatcher(changeDeleteNotification(0))
    }

    const handleDeleteButton = () => {
        dispatcher(delPlace(_id))
    }

    const handleEditButton = async () => {
        await dispatcher(changeFlagCreateOrEdit(1)); 
        await dispatcher(placeById(_id))
        await navigate(`/editPlace/${_id}`)
    }

    

  return (
        <CardStyles sx={{ maxWidth: 'maxContent' }}>
            <CardActionArea >
            <Link style={{color: 'black', textDecoration: 'none'}} to={`/detailPlace/${_id}`} >
                <CardMedia
                component="img"
                height="200"
                image= {imgUrl[0]}
                alt="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                </CardContent>
            </Link>
            </CardActionArea>
            <CardActions className='card_actions' >
            <IconButton onClick={()=> handleDeleteButton()} className='icon_button_delete' aria-label="deleteoutline" color="secondary" size='small' >
                <DeleteOutline />
            </IconButton>
            <IconButton onClick={()=> handleEditButton()} className='icon_button_edit' aria-label="editoutline" color="primary" size='small' >
                <EditOutlined />
            </IconButton>
            </CardActions>
        </CardStyles>
    // </Link>
  );
}
