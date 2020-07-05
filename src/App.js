import React from 'react';
import { useSelector, useDispatch } from'react-redux';
import { increment, decrement } from './action';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  
  return (
    <div className="App">
      <h1>Hello World</h1>
      <h2>Counter</h2>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged?  <h3>Have logged-in</h3> : <h3>Have not logged-in</h3>}
    </div>
  );
}

export default App;
