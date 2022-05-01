import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import { styled, TextField } from '@mui/material';
import { useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';
import { changeCreateNotification, changeEditNotification, creatPlace, editPlace, placeById } from '../../redux/appRedux';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';

const FormStyles =  styled('div')`
    padding: 0 24px;

    & .textfield {
      margin-bottom: 15px;
    }
`

const validationSchema = yup.object({
  name: yup
    .string('Ingrese su nombre')
    .min(3, 'El nombre debe tener un minimo de 3 caracteres')
    .max(30, 'El nombre debe tener un maximo de 30 caracteres')
    .required('El nombre es requerido'),
  description: yup
    .string('Ingrese la descripción')
    .min(3, 'La descripción debe tener un minimo de 3 caracteres')
    .max(250, 'La descripción debe tener un maximo de 250 caracteres')
    .required('La descripción es requerida'),
  // imgUrl: yup
  //   .array().of( yup
  //     .string('Los campos del array deben ser string')
  //     .required('Es requerida al menos una URL')
  //     )
  //   .min(1, 'Es requerida al menos una URL')
  //   .required('Es requerida al menos una URL'),
  imgUrl: yup
      .string('La URL debe ser string')
      .min(3, 'La URL debe tener un minimo de 3 caracteres')
      .max(250, 'La URL debe tener un maximo de 250 caracteres')
      .required('La URL es requerida'),
  latitude: yup
    .string('asdasd')
    // .number('La latitud debe ser un numero')
    // .negative('asd')
    .min(2, 'La latitud es requerida')
    .required('La latitud es requerida'),
  longitude: yup
    .string('asdasd')
    // .number('La longitud debe ser un numero')
    .required('La longitud es requerida')
});

const createStructure = (values) => {
  const {name, description, imgUrl, latitude, longitude} = values
  const place = {
    name: name,
    description: description,
    imgUrl: [imgUrl],
    location:{
      latitude: Number(latitude),
      longitude: Number(longitude)
    }
  }
  console.log(place.location.longitude)
  console.log(typeof(place.location.longitude))
  return place
}

export const Form = () => {
  const params = useParams()
  const dispatcher = useDispatch()

  // useEffect(()=>{
  //   dispatcher(placeById(params.id))
  // },[])

  const [buttonName, setButtonName] = useState('Crear')
  const flagCreateNotification = useSelector(state => state.notificationsReducer.flagCreateNotification)
  const flagEditNotification = useSelector(state => state.notificationsReducer.flagEditNotification)
  const flagCreateOrEdit = useSelector(state => state.functionalitiesReducer.flagCreateOrEdit)
  const place = useSelector(state=>state.placesReducer.place)
  let initialValues = {}

  console.log(flagCreateOrEdit)

  const setValues = () => {
    if(flagCreateOrEdit === 1){
      initialValues = {
        name: `${place.name}`,
        description: `${place.description}`,
        imgUrl: `${place.imgUrl}`,
        latitude: `${place.location[0].latitude}`,
        longitude: `${place.location[0].longitude}`
      }
    } else if (flagCreateOrEdit === 0){
      initialValues = {
        name: '',
        description: '',
        imgUrl: '',
        latitude: '',
        longitude: ''
      }
    }
  }
  setValues()

  const { enqueueSnackbar } = useSnackbar();

  useEffect(()=>{
    if(flagCreateOrEdit === 1){
      setButtonName('Editar')
    } else if (flagCreateOrEdit === 0){
      setButtonName('Crear')
    }
  }, [flagCreateOrEdit])

  if(flagCreateNotification === 1){
      enqueueSnackbar('Lugar creado exitosamente', { variant: 'success' });
      dispatcher(changeCreateNotification(0))
  } else if (flagCreateNotification === 2){
      enqueueSnackbar('Error al intentar crear lugar', { variant: 'error' });
      dispatcher(changeCreateNotification(0))
  }

  if(flagEditNotification === 1){
    enqueueSnackbar('Lugar editado exitosamente', { variant: 'success' });
    dispatcher(changeEditNotification(0))
} else if (flagEditNotification === 2){
    enqueueSnackbar('Error al intentar editar lugar', { variant: 'error' });
    dispatcher(changeEditNotification(0))
}


  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const place_json = JSON.stringify(createStructure(values))
      if(flagCreateOrEdit === 1){
        console.log('editar: ', flagCreateOrEdit)
        dispatcher(editPlace(place._id, place_json))
      } else if (flagCreateOrEdit === 0){
        console.log('crear: ', flagCreateOrEdit)
        dispatcher(creatPlace(place_json))
      }
    },
  });
  
  return (
    <FormStyles>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          className='textfield'
          fullWidth
          id="name"
          name="name"
          label="Nombre"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          className='textfield'
          fullWidth
          id="description"
          name="description"
          label="Descripción"
          value={formik.values.description}
          onChange={formik.handleChange}
          error={formik.touched.description && Boolean(formik.errors.description)}
          helperText={formik.touched.description && formik.errors.description}
        />
        <TextField
          className='textfield'
          fullWidth
          id="imgUrl"
          name="imgUrl"
          label="URL de Imagen"
          value={formik.values.imgUrl}
          onChange={formik.handleChange}
          error={formik.touched.imgUrl && Boolean(formik.errors.imgUrl)}
          helperText={formik.touched.imgUrl && formik.errors.imgUrl}
        />
        <TextField
          className='textfield'
          fullWidth
          id="latitude"
          name="latitude"
          label="Latitud"
          value={formik.values.latitude}
          onChange={formik.handleChange}
          error={formik.touched.latitude && Boolean(formik.errors.latitude)}
          helperText={formik.touched.latitude && formik.errors.latitude}
        />
        <TextField
          className='textfield'
          fullWidth
          id="longitude"
          name="longitude"
          label="Longitud"
          value={formik.values.longitude}
          onChange={formik.handleChange}
          error={formik.touched.longitude && Boolean(formik.errors.longitude)}
          helperText={formik.touched.longitude && formik.errors.longitude}
        />

        <Button color="primary" variant="contained" fullWidth type="submit">
          {buttonName}
        </Button>
      </form>
    </FormStyles>
  );
};

