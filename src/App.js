import React, { useEffect, useState, Suspense } from "react";
import loadImg from "./components/images/Spin-1s-200px.svg";
import Header from "./components/Header";
import Search from "./components/search";
import PrevNextButtons from "./components/prevNextButtons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./null_styles.css";
import "./App.css";

const HomeCont = React.lazy(() => import("./components/homeCont"));

export default function App() {
  let [ids, setIds] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  let [arr, setArr] = useState([]);

  const Link = (
    <div id="apiLink">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://punkapi.com/documentation/v2"
      >
        API LINK
      </a>
    </div>
  );

  const Loader = (
    <div className="loaderWrap">
      <img src={loadImg} alt="Loading..."></img>
    </div>
  );

  async function getBeer() {
    let req = await fetch(
      `https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=6`
    );
    let json = await req.json();
    setArr(json);
  }

  useEffect(() => {
    getBeer();
  }, [currentPage]); //eslint-disable-line

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
            <Suspense fallback={Loader}>
              <HomeCont setIds={setIds} arr={ids} />
            </Suspense>
          </Route>
          <Route path="/">
            <Search setArr={setArr} />
            {Link}
            <Suspense fallback={Loader}>
              <HomeCont setIds={setIds} arr={arr} />
            </Suspense>
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
