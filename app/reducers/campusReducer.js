import axios from 'axios';

//ACTIONS
const GET_ALL_CAMPUSES = 'GET_ALL_CAMPUSES';
const SET_SINGLE_CAMPUS = 'SET_SINGLE_CAMPUS';
const ADD_NEW_CAMPUS = 'ADD_NEW_CAMPUS';
const REMOVE_CAMPUS = 'REMOVE_CAMPUS';

const CAMPUSES_REQUEST = 'CAMPUSES_REQUEST';
const CAMPUSES_FAILURE = 'CAMPUSES_FAILURE';

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

const removeCampus = id => ({
  type: REMOVE_CAMPUS,
  id,
});

const campusesRequest = () => ({
  type: CAMPUSES_REQUEST,
});

const campusesFailure = error => ({
  type: CAMPUSES_FAILURE,
  error,
});

//THUNKS
export const getAllCampuses = () => {
  return async dispatch => {
    dispatch(campusesRequest());
    try {
      const res = await axios.get('/api/campuses/');
      const campuses = res.data;
      const action = fetchAllCampuses(campuses);
      dispatch(action);
    } catch (err) {
      dispatch(campusesFailure(err));
    }
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

export const deleteCampus = id => {
  return async dispatch => {
    await axios.delete(`/api/campuses/${id}`);
    const action = removeCampus(id);
    dispatch(action);
  };
};

//INTIAL STATE
const initialState = {
  all: [],
  single: {},
  loading: false,
  error: null,
};

//REDUCER

const campusReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CAMPUSES:
      return { ...state, all: action.campuses, loading: false };
    case SET_SINGLE_CAMPUS:
      return { ...state, single: action.campus[0] };
    case ADD_NEW_CAMPUS:
      return { ...state, all: [...state.all, action.campus] };
    case REMOVE_CAMPUS:
      return {
        ...state,
        all: state.all.filter(campus => campus.id !== action.id),
      };
    case CAMPUSES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CAMPUSES_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};

export default campusReducer;
