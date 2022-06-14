import { useEffect } from "react";
import { Routes, useNavigate, Route } from "react-router-dom";

function Card(props) {
  let navigate = useNavigate();

  return (
    <div
      className="basis-1/4"
      onClick={() => {
        navigate("/detail/" + props.i);
        console.log(props.i);
      }}
    >
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"
        }
      />
      <h4>{props.item.title}</h4>
      <p>{props.item.content}</p>
    </div>
  );
}
export default Card;
