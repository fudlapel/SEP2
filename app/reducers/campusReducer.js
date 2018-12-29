import axios from 'axios';

//ACTIONS
const GET_ALL_CAMPUSES = 'GET_ALL_CAMPUSES';
const SET_SINGLE_CAMPUS = 'SET_SINGLE_CAMPUS';

//ACTION CREATORS
const fetchAllCampuses = campuses => ({
  type: GET_ALL_CAMPUSES,
  campuses,
});

const setSingleCampus = campus => ({
  type: SET_SINGLE_CAMPUS,
  campus,
});

//THUNKS
export const getAllCampuses = () => {
  return async dispatch => {
    const res = await axios.get('/api/campuses/');
    const campuses = res.data;
    const action = fetchAllCampuses(campuses);
    dispatch(action);
  };
};

export const fetchSingleCampus = id => {
  return async dispatch => {
    const res = await axios.get(`/api/campuses/${id}`);
    const campus = res.data;
    const action = setSingleCampus(campus);
    dispatch(action);
  };
};

//INTIAL STATE
const initialState = {
  all: [],
  single: {},
};

//REDUCER

const campusReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CAMPUSES:
      return { ...state, all: action.campuses };
    case SET_SINGLE_CAMPUS:
      return { ...state, single: action.campus[0] };
    default:
      return state;
  }
};

export default campusReducer;
