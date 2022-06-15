import { useSelector } from "react-redux";
import Card from "../Components/Card";

function MainPage(props) {
  let redux = useSelector((state) => {
    return state;
  });
  console.log(redux);

  return (
    <>
      <div className="flex justify-around">
        {props.shoes.map((a, i) => {
          return <Card item={props.shoes[i]} i={i} key={i} />;
        })}
      </div>
    </>
  );
}
export default MainPage;
