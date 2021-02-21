import {
  GET_PERSON,
  GET_PEOPLE,
  ADD_PERSON,
  UPDATE_PERSON,
  DELETE_PERSON,
} from "../types";

const initialState = {
  persons: [],
};

const personReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PERSON:
      return { ...state };

    case GET_PEOPLE:
      return { ...state, persons: action.payload };

    case ADD_PERSON:
      console.debug("add person:", action.payload);
      return { ...state };

    case UPDATE_PERSON:
      return { ...state };

    case DELETE_PERSON:
      return { ...state };

    default:
      return { ...state };
  }
};

export default personReducer;
