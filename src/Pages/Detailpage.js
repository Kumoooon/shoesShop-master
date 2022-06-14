import { useContext, useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { Context1 } from "../App";
function DetailPage(props) {
  let { state } = useContext(Context1);
  console.log(state);
  let { id } = useParams();
  let params = Number(id);
  let [popup, setPopup] = useState(true);
  let [shoesCount, setShoesCount] = useState("");
  let [tap, setTap] = useState(0);
  let [boxText, setBoxText] = useState([
    "죽기전에 가봐야 할 곳 100 선 중에",
    "스위스 융프라우가 있으면 좋겠다.",
    "언젠가 가고싶어",
  ]);
  useEffect(() => {
    setTimeout(() => {
      setPopup(false);
    }, 2000);
  }, []);
  useEffect(() => {
    if (isNaN(shoesCount) == true) {
      alert("숫자만 입력해주세요");
    }
  }, [shoesCount]);

  return (
    <div className=" items-center">
      {popup === true ? <Popup /> : null}
      <div className="row">
        <div className="col-md-6">
          <img
            src={
              "https://codingapple1.github.io/shop/shoes" +
              (params + 1) +
              ".jpg"
            }
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}</p>
          <input
            className=" w-16 h-7 bg-slate-400 block"
            onChange={(e) => {
              let value = e.target.value;
              setShoesCount(value);
              console.log(shoesCount);
            }}
          ></input>

          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
      {<Tap tap={tap} setTap={setTap} />}
    </div>
  );
}

function Popup() {
  return (
    <div className=" w-96 h-14 bg-red-700 rounded absolute" id="popup">
      2초 내에 구매하시면 할인
    </div>
  );
}
function Tapcontent(props) {
  console.log(props.tap);
  if (props.tap === 0) {
    return (
      <div className=" opacity-0 transition-opacity duration-13 000">a</div>
    );
  }
  if (props.tap === 1) {
    return <div>b</div>;
  }
  if (props.tap === 2) {
    return <div>c</div>;
  }
}
function Tap(props) {
  return (
    <div>
      <span
        className=" inline-block w-14 h-9 cursor-pointer"
        id="one"
        onClick={() => {
          props.setTap(0);
        }}
      >
        a
      </span>
      <span
        className=" inline-block w-14 h-9  cursor-pointer"
        id="two"
        onClick={() => {
          props.setTap(1);
        }}
      >
        b{" "}
      </span>
      <span
        className=" inline-block w-14 h-9  cursor-pointer bg"
        onClick={() => {
          props.setTap(2);
        }}
      >
        c
      </span>

      <div className=" absolute w-52 h-40 border-2  border-yellow-400">
        {<Tapcontent tap={props.tap} />}
      </div>
    </div>
  );
}
export default DetailPage;
