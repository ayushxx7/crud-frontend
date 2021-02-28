import {
  GET_PERSON,
  GET_PEOPLE,
  ADD_PERSON,
  UPDATE_PERSON,
  DELETE_PERSON,
  SHOW_POPUP,
  HIDE_POPUP,
} from "../types";

const initialState = {
  persons: [],
  force_render: {}
};

const personReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PERSON:
      return { ...state };

    case GET_PEOPLE:
      let data = action.payload;
      let newData = {}
      for (var i in data) {
        data[i]["deletePopup"] = false;
        newData[data[i]["_id"]] = data[i]
      }
      console.debug(newData);
      return { ...state, persons: newData };

    case ADD_PERSON:
      console.debug("add person:", action.payload);
      state.persons[action.payload._id] = action.payload;
      return { ...state, persons: state.persons };

    case UPDATE_PERSON:
      return { ...state };

    case DELETE_PERSON:
      console.debug('Delete Person')
      console.debug(action.payload);
      console.debug("sp", state.persons);
      let oldState = state.persons
      delete oldState[action.payload]
      console.debug('old', oldState)
      return {
        ...state,
        persons: oldState,
        force_render: 'forced_rendering'
        // persons: state.persons.filter((person) => person._id != action.payload),
      };

    case SHOW_POPUP:
      console.debug("show popup");
      let personId = action.payload
      let currentState = state.persons
      currentState[personId]['deletePopup'] = true
      console.debug(currentState)
      return { ...state, persons: currentState, force_render: 'force_render' };

    case HIDE_POPUP:
      console.debug("hide popup");
      let personIdHide = action.payload
      let hideState = state.persons
      hideState[personIdHide]['deletePopup'] = false
      return { ...state, persons: hideState, force_render: 'render_force' };
      // return { ...state };

    default:
      return { ...state };
  }
};

export default personReducer;
