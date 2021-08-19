export default function PrevNextButtons(props) {
  return (
    <footer id="footer">
      <button onClick={props.handleDecreese}>Prev page</button>
      <span id="pg">{props.currentPage}</span>
      <button onClick={props.handleIncreese}>Next page</button>
    </footer>
  );
}
