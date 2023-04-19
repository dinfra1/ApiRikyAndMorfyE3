import { useRef, useState } from "react";
import "./App.css";
import useFecth from "./hooks/useFecth";
import getRandomLocation from "./utils/getRandomLocation";
import MainContein from "./components/MainContein";
import Loading from "./components/Loading";

function App() {
  const [InputNumber, setInputNumber] = useState(getRandomLocation());

  const url = `https://rickandmortyapi.com/api/location/${InputNumber}`;
  const [info, hasErr] = useFecth(url);

  const ref = useRef();

  const inputDate = (e) => {
    e.preventDefault();
    setInputNumber(ref.current.value);
  };
  console.log(info)

  return (
    <div className="App">
      {
        info ?
        <>
      <div className="header--info--general">
        <header className="header--major">
          <img className="img--header" src={"./image/haeder1.jpg"} alt="" />
        </header>
      </div>
      <form className="from--input" onSubmit={inputDate}>
        <input className="info--input"  placeholder="enter data to search" ref={ref} type="text" />
        <button className="button--input">Shear</button>
      </form>
      {hasErr ? <h2 className="text--err">❌Hey! You must provide an id from 1 to 126</h2> : <MainContein info={info} />}
      </>
      : <Loading />
    }
    </div>
  );
}

export default App;
