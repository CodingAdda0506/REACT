import React from 'react';
import useMousePosition from './utils/useMousePosition';

const App = () => {
  const {x, y} = useMousePosition();

  console.log(`${x} < ==== > ${y}`);
  return (
    <div>
      Custom React Hook
    </div>
  )
}

export default App;