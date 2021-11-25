import React, { useState } from "react";
import { connect } from "react-redux";
import {
  getDragQueens,
  dragQueensFavorites,
  clearDragQueens,
} from "../actions/Actions";
import Card from "./Card";
import "./Searcher.css";
function Searcher(props) {
  const [offset, setOffset] = useState(1);
  const [limit, setLimit] = useState(10);
  // const [form, setForm] = React.useState("");

  const handleClick = (e) => {
    let newOffset = offset + limit;
    setOffset(newOffset);
    props.getDragQueens(limit, newOffset);
  };
  const handleDropdownChange = (e) => {
    setLimit(e.target.value);
  };
  // const handleChange = (event) => {
  //   setForm(event.target.value);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.clearDragQueens();
    props.getDragQueens(limit, offset);
    setOffset(1);
  };

  return (
    <div>
      <h1>Ru Paul Drag Race App</h1>
      <form onSubmit={handleSubmit}>
        {/* <div>
          <label>DragQueen: </label>
          <input type="text" onChange={handleChange} name="dragQueen" />
        </div> */}
        <div class="search-button">
          <button type="submit" class="button-30 ">
            SEARCH
          </button>
        </div>

        <div class="choose-queens">
          <label for="queens">Choose how many queens you want to see: </label>
          <select name="queens" id="queens" onChange={handleDropdownChange}>
            <option value="10">10 </option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
        </div>
      </form>

      <ul>
        <div class="card-list">
          {props.dragQueens.map((queen) => (
            <Card name={queen.name} img={queen.image_url} quote={queen.quote} />
            // <li>
            //   {queen.name}
            //   <p> Her quote:{queen.quote}</p>
            //   <p>
            //     <img src={queen.image_url} />
            //   </p>
            //   {queen.winner === true && (
            //     <img src="https://today.in-24.com/content/uploads/2021/07/15/54db7f4ff4.jpg" />
            //   )}
            //   <button onClick={() => props.dragQueensFavorites(queen)}>
            //     Add to favorites{" "}
            //   </button>
            // </li>
          ))}{" "}
        </div>
      </ul>
      <div class="button-queens">
        <button type="submit" class="button-30" onClick={handleClick}>
          GET MORE QUEENS
        </button>
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    dragQueens: state.dragQueensLoaded,
    dragQueenFavorite: state.dragQueensFavorites,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    clearDragQueens: () => dispatch(clearDragQueens()),
    getDragQueens: (limit, offset) => dispatch(getDragQueens(limit, offset)),
    dragQueensFavorites: (queen) => dispatch(dragQueensFavorites(queen)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Searcher);
