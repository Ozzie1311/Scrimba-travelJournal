import Header from "./Components/Header";
import Entry from "./Components/Entry";
import data from "../data";

export default function App() {
  return (
    <>
      <Header />
      {data.map((entry) => (
        <Entry key={entry.id} {...entry} />
      ))}
    </>
  );
}
