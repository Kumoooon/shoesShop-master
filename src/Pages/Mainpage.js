import { useSelector } from "react-redux";
import Card from "../Components/Card";

function MainPage(props) {
  let redux = useSelector((state) => {
    return state;
  });
  console.log(redux);
  const [one, two, three] = redux.stock;
  console.log(one, two, three);
  return (
    <>
      <div className="flex justify-around">
        {props.shoes.map((a, i) => {
          return <Card item={props.shoes[i]} i={i} />;
        })}
      </div>
    </>
  );
}
export default MainPage;
