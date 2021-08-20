import { nanoid } from "nanoid";
import "../App.css";

export default function HomeCont(props) {
  let list = props.arr.map((item, ind) => {
    return (
      <div className="item" key={nanoid()}>
        <div className="item__favor_wrapper">
          <button className="item__favor">Add to favor</button>
        </div>
        <div className="item__content">
          <div className="item__image">
            <img src={item.image_url} alt={ind}></img>
          </div>
          <div className="item__text">
            <div className="item__name">{item.name}</div>
            <div className="item__txt">{item.description}</div>
          </div>
        </div>
      </div>
    );
  });
  return <div id="itemsWrapper">{list}</div>;
}
