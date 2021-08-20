import { useEffect, useState } from "react";
import Header from "./components/Header";
import Search from "./components/search";
import HomeCont from "./components/homeCont";
import PrevNextButtons from "./components/prevNextButtons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./null_styles.css";
import "./App.css";

export default function App() {
  let [ids, setIds] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  let [arr, setArr] = useState([]);

  useEffect(() => {
    async function getBeer() {
      let req = await fetch(
        `https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=6`
      );
      let json = await req.json();
      setArr(json);
    }
    getBeer();
  }, [currentPage]);

  function handleIncreese() {
    setCurrentPage((prev) => prev + 1);
  }
  function handleDecreese() {
    if (currentPage === 1) return;
    setCurrentPage((prev) => prev - 1);
  }

  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/favorites">
            <HomeCont setIds={setIds} arr={ids} />
          </Route>
          <Route path="/">
            <Search setArr={setArr} />
            <HomeCont setIds={setIds} arr={arr} />
            <PrevNextButtons
              currentPage={currentPage}
              handleIncreese={handleIncreese}
              handleDecreese={handleDecreese}
            />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}
