import React, { useEffect } from 'react';
import { useState } from 'react';

const App = () => {

  const[state, setState] = useState()

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
  });

  // Render the fetched data
  return (
    <div>
      App
    </div>
  );
}

export default App;