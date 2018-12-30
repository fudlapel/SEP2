import axios from 'axios';

//ACTIONS
const GET_ALL_STUDENTS = 'GET_ALL_STUDENTS';
const SET_SINGLE_STUDENT = 'SET_SINGLE_STUDENT';
const ADD_NEW_STUDENT = 'ADD_NEW_STUDENT';
const REMOVE_STUDENT = 'REMOVE_STUDENT';

//ACTION CREATORS
const fetchAllStudents = students => ({
  type: GET_ALL_STUDENTS,
  students,
});

const setSingleStudent = student => ({
  type: SET_SINGLE_STUDENT,
  student,
});

const setNewStudent = student => ({
  type: ADD_NEW_STUDENT,
  student,
});

const removeStudent = id => ({
  type: REMOVE_STUDENT,
  id,
});

//THUNKS
export const getAllStudents = () => {
  return async dispatch => {
    const res = await axios.get('/api/students/');
    const students = res.data;
    const action = fetchAllStudents(students);
    dispatch(action);
  };
};

export const fetchSingleStudent = id => {
  return async dispatch => {
    const res = await axios.get(`/api/students/${id}`);
    const student = res.data;
    const action = setSingleStudent(student);
    dispatch(action);
  };
};

export const addNewStudent = student => {
  return async dispatch => {
    const res = await axios.post('/api/students', student);
    const newStudent = res.data;
    const action = setNewStudent(newStudent);
    dispatch(action);
  };
};

export const deleteStudent = id => {
  return async dispatch => {
    await axios.delete(`/api/students/${id}`);
    const action = removeStudent(id);
    dispatch(action);
  };
};

//INITITAL STATE
const initialState = {
  all: [],
  single: {},
};

//REDUCER

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_STUDENTS:
      return { ...state, all: action.students };
    case SET_SINGLE_STUDENT:
      return { ...state, single: action.student[0] };
    case ADD_NEW_STUDENT:
      return { ...state, all: [...state.all, action.student] };
    case REMOVE_STUDENT:
      return {
        ...state,
        all: state.all.filter(student => {
          return student.id !== action.id;
        }),
      };
    default:
      return state;
  }
};

export default studentReducer;
