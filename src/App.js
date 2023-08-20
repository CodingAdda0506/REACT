import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {
  const [inputVal, setInputVal] = useState("");
  const count = useRef(0);
  const changeElem = useRef();

  useEffect(() => {
    count.current = count.current + 1;
  })

  const changeInput = () => {
    changeElem.current.focus();
    changeElem.current.style.backgroundColor = 'green';
    changeElem.current.style.color = 'white';
    changeElem.current.style.width = '15rem';
    changeElem.current.style.height = '15rem';
  }

  return (
    <div>
      <input type="text" value={inputVal} onChange={(e) => setInputVal(e.target.value)} ref={changeElem} />
      <h1>Render count: {count.current}</h1>
      <button onClick={changeInput}>Change DOM</button>
    </div>
  )
}

export default App