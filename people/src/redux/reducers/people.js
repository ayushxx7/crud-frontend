import {
  GET_PERSON,
  GET_PEOPLE,
  ADD_PERSON,
  UPDATE_PERSON,
  DELETE_PERSON,
} from "../types";

const initialState = {
  persons: 'Hello I am Person',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PERSON:
      return { ...state };

    case GET_PEOPLE:
      return { ...state };

    case ADD_PERSON:
      return { ...state };

    case UPDATE_PERSON:
      return { ...state };

    case DELETE_PERSON:
      return { ...state };

    default:
      return { ...state };
  }
}
