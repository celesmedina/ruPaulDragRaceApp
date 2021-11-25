const initialState = {
  dragQueensLoaded: [],
  dragQueensFavorites: [],
  allSeasons: [],
  season: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_DRAG_QUEENS":
      return {
        ...state,
        dragQueensLoaded: state.dragQueensLoaded.concat(action.payload),
      };

    case "DRAG_QUEENS_FAVORITES":
      return {
        ...state,
        dragQueensFavorites: state.dragQueensFavorites.concat(action.payload),
      };

    case "GET_ALL_SEASONS":
      return {
        ...state,
        allSeasons: state.allSeasons.concat(action.payload),
      };

    case "GET_SEASON":
      return {
        ...state,
        season: action.payload,
      };
    case "CLEAR_DRAGQUEENS":
      return {
        ...state,
        dragQueensLoaded: [],
      };
    default:
      return state;
  }
}
export default rootReducer;
