import "./App.css";
import { Forms } from "./components/Forms";
import { Header } from "./components/Header";
import boxes from "./data/Boxes";
import { useEffect, useState } from "react";
import { Box } from "./components/Box";
import { Square } from "./components/Square";
import Joke from "./components/Joke";
import JokesData from "./data/JokesData";
import FormPrac from "./components/FormPrac";
import SignUpForm from "./components/SignUpForm";
import WindowTracker from "./components/WindowTracker";

function App() {
  // const [box, setBoxes] = useState(boxes);

  // function toggle(id: number) {
  //   setBoxes((prevBox) => {
  //     return prevBox.map((box) => {
  //       return box.id === id ? { ...box, on: !box.on } : box;
  //     });
  //   });
  // }

  // const boxElement = box.map((b) => {
  //   return <Box on={b.on} id={b.id} changeColor={toggle} key={b.id} />;
  // });

  // function handleClick(id: number) {
  //   console.log("Square Clicked", id);

  //   setBoxes((previousBox) => {
  //     return previousBox.map((currentBox) => {
  //       return currentBox.id === id
  //         ? { ...currentBox, on: !currentBox.on }
  //         : currentBox;
  //     });
  //   });
  // }

  const jokesElement = JokesData.map((jokes, index) => {
    return <Joke setup={jokes.setup} punchline={jokes.punchline} key={index} />;
  });

  // useEffect()

  // const [starWarsData, setStarWarsData] = useState({});
  // const [count, setCount] = useState(1);

  // console.log("COmponent rendered");
  // useEffect(() => {
  //   console.log("Effect Ran");
  //   fetch(`https://swapi.dev/api/people/${count}`)
  //     .then((res) => res.json())
  //     .then((data) => setStarWarsData(data));
  // }, [count]);

  // WindowTracker

  const [show, setShow] = useState(true);
  console.log(show);

  return (
    <>
      {/* <Header />
      <Forms /> */}
      <div>
        <button
          className="border p-3 bg-blue-300 m-3 hover:bg-blue-500"
          onClick={() => setShow((prevShow) => !prevShow)}
        >
          Toggle WindowTracker
        </button>
        {show && <WindowTracker />}
      </div>
      {/* {jokesElement} */}
      {/* <FormPrac /> */}
      {/* <SignUpForm /> */}

      {/* useEffec Section */}
      {/* <div>
        <h2>The count is {count}</h2>
        <button
          className="border p-3 m-2 bg-blue-200"
          onClick={() => setCount((prevCount) => prevCount + 1)}
        >
          Get Next Character
        </button>
        <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      </div> */}
      {/* useEffect End */}

      {/* <div className="m-6 p-6">
        <h1 className="text-lg">Boxes</h1>
        {boxElement}
        <h1>Test</h1>

        {box.map((item) => {
          return (
            <div
              className="inline-block"
              onClick={() => handleClick(item.id)}
              key={item.id}
            >
              <Square on={item.on} />
            </div>
          );
        })}
      </div> */}
    </>
  );
}

export default App;
