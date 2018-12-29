import axios from 'axios';

//ACTIONS
const GET_ALL_CAMPUSES = 'GET_ALL_CAMPUSES';
const SET_SINGLE_CAMPUS = 'SET_SINGLE_CAMPUS';
const ADD_NEW_CAMPUS = 'ADD_NEW_CAMPUS';

//ACTION CREATORS
const fetchAllCampuses = campuses => ({
  type: GET_ALL_CAMPUSES,
  campuses,
});

const setSingleCampus = campus => ({
  type: SET_SINGLE_CAMPUS,
  campus,
});

const setNewCampus = campus => ({
  type: ADD_NEW_CAMPUS,
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

export const addNewCampus = campus => {
  return async dispatch => {
    const res = await axios.post('api/campuses', campus);
    const newCampus = res.data;
    const action = setNewCampus(newCampus);
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
    case ADD_NEW_CAMPUS:
      return { ...state, all: [...state.all, action.campus] };
    default:
      return state;
  }
};

export default campusReducer;
