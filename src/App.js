import "./App.css";
import Header from "./Header";
import Contents from "./Contents";
import { useEffect, useState } from "react";
import api from "./apiRequests";
import ProverbCollections from "./ProverbCollections";
import { Route, Routes } from "react-router-dom";

function App() {
  const appName = "Positive Proverbs";
  const [proverb, setProverb] = useState(null);
  const [errMsg, setErrMsg] = useState(null);
  const [ProverbCollection, setProverbCollection] = useState([]);
  // const [errMsg, setErrMsg] = useState(null);

  useEffect(() => {
    async function fetchProverb() {
      try {
        const response = await api.get();
        console.log(response);
        //if (!response.ok) throw Error("Please reload the page");
        const data = await response.data;
        console.log(data);
        setProverb(() => data.proverb);
        console.log(proverb.proverb);
      } catch (error) {
        setErrMsg(error.message);
        if (errMsg != null) console.error(errMsg);
      } finally {
        console.log(proverb);
        return errMsg;
      }
    }

    async function fetchProverbCollection() {
      try {
        const response = await api.get("/proverbs");
        console.log(response);
        //if (!response.ok) throw Error("Please reload the page");
        const data = await response.data;
        console.log(data);
        setProverbCollection(() => data.proverbs);
        console.log(proverb.proverbs);
      } catch (error) {
        setErrMsg(error.message);
        if (errMsg != null) console.error(errMsg);
      } finally {
        console.log(ProverbCollection);
        return errMsg;
      }
    }

    fetchProverb();
    fetchProverbCollection();
  }, []);

  return (
    <div>
      <Header title={appName} />
      <Routes>
        <Route
          path="/"
          element={<Contents currentProverb={proverb}></Contents>}
        ></Route>
        <Route
          path="/proverbs"
          element={
            <ProverbCollections collectionOfProverb={ProverbCollection} />
          }
        />
      </Routes>
      {/* <Contents currentProverb={proverb} /> */}
    </div>
  );
}

export default App;
