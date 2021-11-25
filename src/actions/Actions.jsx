export function getDragQueens(limit, offset) {
  return function (dispatch) {
    return fetch(
      "http://www.nokeynoshade.party/api/queens?limit=" +
        limit +
        "&offset=" +
        offset
    )
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: "GET_DRAG_QUEENS", payload: json });
      });
  };
}

export function dragQueensFavorites(name) {
  return { type: "DRAG_QUEENS_FAVORITES", payload: name };
}

export function clearDragQueens() {
  return { type: "CLEAR_DRAGQUEENS" };
}
export function getAllSeasons() {
  return function (dispatch) {
    return fetch("http://www.nokeynoshade.party/api/seasons")
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: "GET_ALL_SEASONS", payload: json });
      });
  };
}

export function getSeason(seasonID) {
  return function (dispatch) {
    return fetch("http://www.nokeynoshade.party/api/seasons/" + seasonID)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: "GET_SEASON", payload: json });
      });
  };
}
