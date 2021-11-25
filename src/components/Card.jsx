import React from "react";
import CardCSS from "./Card.css";
export default function Card(props) {
  return (
    <div class="card">
      <div class="card-img">
        <img src={props.img} />
      </div>
      <div class="card-body">
        <div class="card-info">{props.name}</div>
        <div class="card-quote"> Her quote:{props.quote}</div>
      </div>

      {/* 
        {queen.winner === true && (
          <img src="https://today.in-24.com/content/uploads/2021/07/15/54db7f4ff4.jpg" />
        )} */}
      {/* <button
        class="card-button"
        onClick={() => props.dragQueensFavorites(queen)}
      >
        Add to favorites{" "}
      </button> */}
    </div>
  );
}
