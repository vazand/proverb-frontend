import "./App.css";
import Header from "./Header";
import Contents from "./Contents";
import { useState } from "react";

function App() {
  const appName = "Positive Proverbs";
  const [proverb, setProverb] = useState("A GOOD DAY");
  return (
    <div>
      <Header title={appName} />
      <Contents currentProverb={proverb} />
    </div>
  );
}

export default App;
