import React from "react";
import { getSeason } from "../actions/Actions";
import { connect } from "react-redux";
// import { useParams } from "react-router-dom";
function Season(props) {
  // let { id } = useParams();
  // useEffect(() => {
  //   props.getSeason(id);
  // }, []); //ComponentDidMount
  return (
    <div>
      <ul>
        {props.season &&
          props.season.queens &&
          props.season.queens.map((queen) => <li>{queen.name}</li>)}
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    season: state.season,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getSeason: (id) => dispatch(getSeason(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Season);
