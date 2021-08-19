import { nanoid } from "nanoid";
import "../App.css";

export default function HomeCont(props) {
  let list = props.arr.map((item, ind) => {
    return (
      <div className="item" key={nanoid()}>
        <div className="image">
          <img src={item.image_url} alt={ind}></img>
        </div>
      </div>
    );
  });
  return <div id="itemsWrapper">{list}</div>;
}
