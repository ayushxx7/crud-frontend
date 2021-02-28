import {
  // GET_PERSON,
  GET_PEOPLE,
  ADD_PERSON,
  UPDATE_PERSON,
  DELETE_PERSON,
  SHOW_POPUP,
  HIDE_POPUP
} from "../types";
import axios from "axios";
import { toast } from "react-toastify";

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
  console.debug(data);
  axios
    .post(`https://crud-person-node.herokuapp.com/persons`, data)
    .then((res) => {
      dispatch({
        type: ADD_PERSON,
        payload: res.data.Person,
      });
      toast.dark(`Added ${data.name} to DataBase`);
      dispatch(fetchPersons());
    })
    .catch((err) => {
      console.error(err);
      toast.error(`Error while adding person: ${err}`);
    });
};

export const deletePerson = (personId) => (dispatch) => {
  console.debug("Triggering delete on", personId);
  axios
    .delete(`https://crud-person-node.herokuapp.com/persons/${personId}`)
    .then(() => {
      dispatch({
        type: DELETE_PERSON,
        payload: personId,
      });
      toast.error(`Deleted ${personId} from DataBase`);
    })
    .catch((err) => {
      console.error(err);
      toast.error(`Error while deleting person: ${err}`);
    });
};

export const updatePerson = (personId, profession) => (dispatch) => {
  console.debug("Data:", personId, profession);
  console.debug("Triggering update on", personId);
  axios
    .patch(`https://crud-person-node.herokuapp.com/persons/${personId}`, {
      profession: profession,
    })
    .then((res) => {
      dispatch({
        type: UPDATE_PERSON,
        payload: res.data,
      });
      toast.success(`Profession changed to ${profession}`);
    })
    .catch((err) => {
      console.error(err);
      toast.error(`Error while updating person: ${err}`);
    });
};

export const showPopup = (personId) => (dispatch) => {
  dispatch({
    type: SHOW_POPUP,
    payload: personId
  })
}

export const hidePopup = (personId) => (dispatch) => {
  dispatch({
    type: HIDE_POPUP,
    payload: personId
  })
}
