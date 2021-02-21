import {
  GET_PERSON,
  GET_PEOPLE,
  ADD_PERSON,
  UPDATE_PERSON,
  DELETE_PERSON,
} from "../types";
import axios from "axios";

export const fetchPersons = () => (dispatch) => {
  axios
    .get(`https://crud-person-node.herokuapp.com/persons`)
    .then((res) => {
      dispatch({
        type: GET_PEOPLE,
        payload: res.data,
      });
    })
    .catch((err) => console.error(err));
};

export const addPerson = (data) => (dispatch) => {
  console.log(data);
  dispatch({
    type: ADD_PERSON,
    payload: data,
  });
  axios
    .post(`https://crud-person-node.herokuapp.com/persons`, data)
    .then((res) => {
      dispatch({
        type: ADD_PERSON,
        payload: res.data,
      });
    })
    .catch((err) => console.error(err));
};
