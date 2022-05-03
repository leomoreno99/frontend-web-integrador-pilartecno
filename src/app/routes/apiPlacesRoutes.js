const baseUrl = process.env.REACT_APP_URL_API;
const placesUrl = `${baseUrl}/places/places`;

const routes = {
  getAllPlaces: () => placesUrl,
  getPlaceById: (idPlace) => `${placesUrl}/${idPlace}`,
  createPlace: () => placesUrl,
  updatePlace: (idPlace) => `${placesUrl}/${idPlace}`,
  deletePlace: (idPlace) => `${placesUrl}/${idPlace}`,
};

export default routes;
