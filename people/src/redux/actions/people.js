import {
  GET_PERSON,
  GET_PEOPLE,
  ADD_PERSON,
  UPDATE_PERSON,
  DELETE_PERSON,
} from "../types";

export const fetchPersons = () => (dispatch) => {
  dispatch({
    type: GET_PEOPLE,
    payload: ['data']
  })
  // axios
  //   .get(`/api`)
  //   .then((res) => {
  //     dispatch({
  //       type: GET_PEOPLE,
  //       payload: res.data,
  //     });
  //   })
  //   .catch((err) => console.error(err));
};

export const addPerson = (data) => (dispatch) => {
  console.log(data);
  dispatch({
    type: ADD_PERSON,
    payload: data,
  });
};
