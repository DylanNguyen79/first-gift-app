import { useState } from "react";
import "./App.css";

const gifts = [
  "iPhone 17 Pro Max",
  "Macbook Pro M4",
  "Apple Vision",
  "IPad Pro M4",
  "Airpods Pro 4th Gen",
];

function App() {
  const [gift, setGift] = useState("");
  const [name, setName] = useState("");
  const [input, setInput] = useState("");

  const randomGift = () => {
    const index = Math.floor(Math.random() * gifts.length);

    setGift(gifts[index]);
  };
  <a href="#">Get a random gift</a>;

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Please enter your name"
          size="30"
          width="500 px"
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={() => setName(input)}>Submit</button>
        <h1>Welcome {name}!</h1>
        <h1>{"Please click the button!"} </h1>
        <h2>🎁{gift}🎁 </h2>
        <button onClick={randomGift}>Get Reward!</button>
      </div>
    </>
  );
}

export default App;
