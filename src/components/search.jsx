import { useState } from "react";

export default function Search(props) {
  let [beer_name, setBeer_name] = useState("");

  async function searchByName(e) {
    e.preventDefault();
    let req = await fetch(
      `https://api.punkapi.com/v2/beers?beer_name=${beer_name}`
    );
    let json = await req.json();
    props.setArr(json);
    setBeer_name("");
  }

  function handleChName(e) {
    setBeer_name(e.target.value);
  }

  return (
    <div id="search">
      <form onSubmit={searchByName}>
        <input
          type="text"
          placeholder="Search by name"
          value={beer_name}
          onChange={handleChName}
        ></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
