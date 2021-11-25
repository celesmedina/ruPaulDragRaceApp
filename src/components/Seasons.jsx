import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getAllSeasons } from "../actions/Actions";

function Seasons(props) {
  // useEffect(() => {
  //   props.getAllSeasons();
  // }, []);

  return (
    <div>
      <ul>
        {props.allSeasons.map((s) => (
          <li>
            <Link to={`/seasons/${s.id}`}>
              {" "}
              {s.seasonNumber}{" "}
              <p>
                {" "}
                <img src={s.image_url} alt="" />
              </p>{" "}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    allSeasons: state.allSeasons,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getAllSeasons: () => dispatch(getAllSeasons()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Seasons);
