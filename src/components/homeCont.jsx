import { nanoid } from "nanoid";
import "../App.css";

export default function HomeCont(props) {
  let set = new Set();

  async function getIds(url) {
    let req = await fetch(url);
    let json = await req.json();
    console.log(json);
    props.setIds(json);
  }

  function handleAddId(id) {
    set.add(id);
    let url = "https://api.punkapi.com/v2/beers?ids=";
    for (const value of set) {
      url += value + "|";
    }
    getIds(url);
  }

  let list = props.arr.map((item, ind) => {
    return (
      <div className="item" key={nanoid()}>
        <div className="item__favor_wrapper">
          <button
            onClick={() => {
              handleAddId(item.id);
            }}
            className="item__favor"
          >
            Add to favor
          </button>
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
