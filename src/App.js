import React from 'react';
import { useState } from 'react';

const App = () => {

  const [text, setText] = useState("");
  const [number, setNumber] = useState(0);
  const [bool, setBool] = useState(true);
  const [arr, setArr] = useState([]);

  const handleSubmit = () => {
    console.log(text);
    console.log(number);
    bool ? setBool(false) : setBool(true);
    console.log(bool);
    arr.push(text);
    console.log(arr);
  }

  return (
    <div>App
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
      <button type="submit" onClick={() => handleSubmit()}>Boolean</button>
      <button type="submit" onClick={() => handleSubmit()}>Submit</button>
    </div>
  )
}

export default App;