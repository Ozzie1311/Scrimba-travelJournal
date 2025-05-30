import Joke from "./Joke";
import jokesData from "../../jokesData";

export default function AppJoke() {
  const jokesArr = jokesData.map((joke) => {
    return <Joke setup={joke.setup} punchline={joke.punchline} />;
  });
  return <section>{jokesArr}</section>;
}
