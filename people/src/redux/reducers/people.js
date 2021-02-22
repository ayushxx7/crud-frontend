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
      state.persons.push(action.payload)
      return { ...state,
        persons: state.persons
      };

    case UPDATE_PERSON:
      return { ...state };

    case DELETE_PERSON:
      console.debug(action.payload)
      console.debug('sp', state.persons)
      return { ...state,
        persons: state.persons.filter(person => person._id != action.payload)
      };

    default:
      return { ...state };
  }
};

export default personReducer;
