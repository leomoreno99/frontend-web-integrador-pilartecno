import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import { styled, TextField } from '@mui/material';
import { useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';
import { changeCreateNotification, creatPlace } from '../../redux/appRedux';

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
    .number('La latitud debe ser un numero')
    .min(2, 'La latitud es requerida')
    .required('La latitud es requerida'),
  longitude: yup
    .number('La longitud debe ser un numero')
    .required('La longitud es requerida')
});

const createStructure = (values) => {
  const {name, description, imgUrl, latitude, longitude} = values
  const place = {
    "name": name,
    "description": description,
    "imgUrl": [imgUrl],
    "location":{
      "latitude": Number(latitude),
      "longitude": Number(longitude)
    }
  }
  return place
}

export const Form = () => {

  const flagCreateNotification = useSelector(state => state.notificationsReducer.flagCreateNotification)
    const { enqueueSnackbar } = useSnackbar();

    const dispatcher = useDispatch()

    if(flagCreateNotification === 1){
        enqueueSnackbar('Lugar creado exitosamente', { variant: 'success' });
    } else if (flagCreateNotification === 2){
        enqueueSnackbar('Error al intentar crear lugar', { variant: 'error' });
    }
    dispatcher(changeCreateNotification(0))



  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      imgUrl: '',
      latitude: null,
      longitude: null

    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const place = JSON.stringify(createStructure(values))
      console.log(place)
      dispatcher(creatPlace(place))

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
          Crear
        </Button>
      </form>
    </FormStyles>
  );
};

