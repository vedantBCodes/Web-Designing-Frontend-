import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, reset } from './counterSlice'


// https://react-redux.js.org/tutorials/quick-start ----> Read this documentation once

function App() {
  const count = useSelector((state) => state.counter.value);    //This will store the value counter into the count state
  const dispatch = useDispatch();  //useDiapatch Hook dispatches action on onClick() event

  function handleClick1()
  {
    dispatch(increment())
  }
  function handleClick2()
  {
    dispatch(decrement())
  }
  function handleClick3()
  {
    dispatch(reset())
  }

  return (
    <div className="App">
      <button onClick={handleClick1}>+</button> <br/>
      <button>Count : {count}</button> <br/>
      <button onClick={handleClick2}>-</button> <br/>
      <button onClick={handleClick3}>Reset</button> <br/>
    </div>
  );
}

export default App;
