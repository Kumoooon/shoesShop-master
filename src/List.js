import { useEffect, useState } from "react";
import "./App.css";
import data from "./data.js";
export default function List() {
  let [shoes] = useState(data);
  console.log(shoes);
  const shoesList = shoes.map((a, i) => {
    return (
      <div className="basis-1/4">
        <img src="https://codingapple1.github.io/shop/shoes1.jpg" />
        <h4>{shoes[i].title}</h4>
        <p>{shoes[i].content}</p>
      </div>
    );
  });
  return { shoesList };
}
