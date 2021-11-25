import React from "react";
import { connect } from "react-redux";

function Favourites(props) {
  return (
    <div>
      Favourites
      <ul>
        {props.dragQueenFavorite.map((queen) => (
          <li>{queen.name}</li>
        ))}
      </ul>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    dragQueenFavorite: state.dragQueensFavorites,
  };
}

export default connect(mapStateToProps)(Favourites);
