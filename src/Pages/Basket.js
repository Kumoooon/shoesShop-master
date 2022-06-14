import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../store";
import { agePlusOne } from "../store";
function Basket() {
  let state = useSelector((state) => {
    return state;
  });
  let dispatch = useDispatch();
  const List = state.cart.map((a, i) => {
    return (
      <tr key={i}>
        <td>{a.id}</td>
        <td>{a.name}</td>
        <td>{a.count}</td>

        <td>
          <button
            onClick={() => {
              dispatch(changeName());
            }}
          >
            +
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <div className=" inline-block w-12 h-7 bg-fuchsia-100">
        {state.user.age}
      </div>
      <button
        className=" w-12 h-7 bg-red-600 rounded text-center m-1 cursor-pointer inline-block"
        onClick={() => {
          dispatch(agePlusOne());
        }}
      >
        +age
      </button>
      {state.user.name}의 장바구니 입니다.
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>{List}</tbody>
      </Table>
    </div>
  );
}
export default Basket;
