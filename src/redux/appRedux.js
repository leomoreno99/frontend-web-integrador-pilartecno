import { deletePlace, getAllPlaces, createPlace } from "../app/services/productService"

const APP_TITLE = "APP_TITLE";

const GET_ALL_PLACES = "GET_ALL_PLACES"
const CREATE_PLACE = "CREATE_PLACE"
const DELETE_PLACE = "DELETE_PLACE"

const DELETE_NOTIFICATION = "DELETE_NOTIFICATION"
const CREATE_NOTIFICATION = "CREATE_NOTIFICATION"

const stateInitial = {
  title: "Panel",
};

const initialStatePlaces = {
  places: [],
};

const initialStateNotifications = {
  flagDeleteNotification: 0,
  flagCreateNotification: 0
};

//Reducers
export const appReducer = (state = stateInitial, {type, payload}) => {
  switch (type) {
    case APP_TITLE:
      return {...state, title: payload};
    default:
      return state;
  }
};

export const placesReducer = (state = initialStatePlaces, {type, payload}) => {
  switch (type) {
    case GET_ALL_PLACES:
      return {...state, places: payload};
    case CREATE_PLACE:
      return {...state, places: payload};
    case DELETE_PLACE:
      return {...state, places: payload};    
    default:
      return state;
  }
};

export const notificationsReducer = (state = initialStateNotifications, {type, payload}) => {
  switch (type) {
    case DELETE_NOTIFICATION:
      return {...state, flagDeleteNotification: payload};
    case CREATE_NOTIFICATION:
      return {...state, flagCreateNotification: payload};  
    default:
      return state;
  }
};

//Actions
export const setTitle = title => {
  return dispatch => {
    dispatch({
      type: APP_TITLE,
      payload: title
    });
  }
}

export const changeDeleteNotification = number => {
  return dispatch => {
    dispatch({
      type: DELETE_NOTIFICATION,
      payload: number
    });
  }
}

export const changeCreateNotification = number => {
  return dispatch => {
    dispatch({
      type: CREATE_NOTIFICATION,
      payload: number
    });
  }
}

const getAllPlacesAction = (places) => ({
  type: GET_ALL_PLACES,
  payload: places,
});

const createPlacesAction = (places) => ({
  type: CREATE_PLACE,
  payload: places,
});

const deletePlaceAction = (places) => ({
  type: DELETE_PLACE,
  payload: places,
});

export const allPlaces = () => {
  return async (dispatch) => {
    try {
      const places = await getAllPlaces();
      dispatch(getAllPlacesAction(places));
    } catch (e) {
      console.log(e);
    }
  };
};

  export const creatPlace = (place) => {
    return async (dispatch) => {
      try {
        const response = await createPlace(place)
        if(response.code === 'OK'){
          allPlaces()
          dispatch(changeCreateNotification(1))
        }
      } catch (e) {
        console.log(e);
      }
    };
  }

  export const delPlace = (id) => {
    return async (dispatch, getState) => {
      try {
        const response = await deletePlace(id)
        if(response.code === 'OK'){
          const state = getState();
          const { places } = state.placesReducer;
          const update = places.filter( place => place._id !== id )
          dispatch(changeDeleteNotification(1))
          dispatch(deletePlaceAction(update))
        }
      } catch (e) {
        dispatch(changeDeleteNotification(2))
        console.log(e)
      }
  }}

  
