import { Link } from "react-router-dom";
import "../App.css";

export default function Header() {
  return (
    <header id="header">
      <div id="logo">Beens Love Beers</div>
      <nav>
        <Link className="navItem" to="/">Home</Link>
        <Link className="navItem" to="/favorites">Favorites</Link>
      </nav>
    </header>
  );
}
