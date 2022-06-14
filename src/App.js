import { createContext, useEffect, useState } from "react";
import "./App.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import MainPage from "./Pages/Mainpage";
import DetailPage from "./Pages/Detailpage";
import Aboutpage from "./Pages/Aboutpage";
import Aboutpage2 from "./Pages/Aboutpage2";
import Aboutpage3 from "./Pages/Aboutpage3";
import axios from "axios";
import Basket from "./Pages/Basket";
export let Context1 = createContext();
//상품 컴포넌트화,데이터바인딩,map

function LodingMassage() {
  return (
    <div className=" w-20 h-9 bg-sky-500 rounded text-center ">로딩 중!</div>
  );
}
export default function App() {
  let [shoes, setshoes] = useState(data);
  let navigate = useNavigate();
  let [clickCount, setClickCount] = useState(1);
  let [loding, setLoding] = useState(false);
  let [stack] = useState([10, 11, 12]);
  useEffect(() => {
    setTimeout(() => {
      setLoding(false);
    }, 800);
  });
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand
            className="cursor-pointer"
            onClick={() => {
              navigate("./");
            }}
          >
            기장아울렛
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/about");
              }}
            >
              events
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/about/member");
              }}
            >
              events1
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("./about/location");
              }}
            >
              events2
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                setClickCount(clickCount + 1);
                setLoding(true);
                if (clickCount == 1) {
                  axios
                    .get(
                      "https://codingapple1.github.io/shop/data" + 2 + ".json"
                    )
                    .then((result) => {
                      console.log(result.data);
                      const anotherShoes = shoes.concat(result.data);
                      setshoes(anotherShoes);
                      console.log(anotherShoes);
                    })
                    .catch(() => {
                      console.log("데이터 불러오기 실패");
                    });
                }
                if (clickCount == 2) {
                  axios
                    .get(
                      "https://codingapple1.github.io/shop/data" + 3 + ".json"
                    )
                    .then((result) => {
                      console.log(result.data);
                      const anotherShoes = shoes.concat(result.data);
                      setshoes(anotherShoes);
                      console.log(anotherShoes);
                    })
                    .catch(() => {
                      console.log("데이터 불러오기 실패");
                    });
                }
                if (clickCount > 2) {
                  alert("데이터가 더 이상 없습니다.");
                }
              }}
            >
              +
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("./cart");
              }}
            >
              장바구니
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>

      <Routes>
        <Route path="/" element={<MainPage shoes={shoes} />} />
        <Route
          path="/detail/:id"
          element={
            <Context1.Provider value={stack}>
              <DetailPage shoes={shoes} />
            </Context1.Provider>
          }
          ㄴ
        />
        <Route path="/about" element={<Aboutpage />}>
          <Route path="member" element={<Aboutpage2 />} />
          <Route path="location" element={<Aboutpage3 />} />
        </Route>

        <Route path="/cart" element={<Basket />} />
        <Route path="*" element={<div>여긴 못지나가요</div>} />
      </Routes>
      {loding === true ? <LodingMassage /> : null}
    </div>
  );
}
//Routes로 라우트들을 감싼다. path에는 경로를, element 에는 라우트로 갔을 때 보여줄 화면을 그린다.
//화면을 그려 둔 다음, 컴포넌트로 만들고, 라우트로 연결한다...이 때 위에 고정요소를 남겨두면 깔끔하다.
