export default function Joke(props) {
  console.log(props);
  return (
    <article>
      {props.setup && <h2>Setup: {props.setup}</h2>}
      {props.punchline && <p>Punchline: {props.punchline}</p>}
      <hr />
    </article>
  );
}
