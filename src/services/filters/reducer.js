import { UPDATE_FILTER, UPDATE_Q_FILTER } from './actionTypes';

const initialState = {
  item: [],
  query: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_FILTER:
      return {
        ...state,
        items: action.payload
      };
    case UPDATE_Q_FILTER:
      return {
        ...state,
        query: action.payload
      };
    default:
      return state;
  }
}
