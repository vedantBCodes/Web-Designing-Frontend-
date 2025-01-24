import "./App.css";
import Card from "./Card";
import CounterCard from "./CounterCard";
import { useState } from "react";

function App() {
  const [count,setCount] =useState(0);
  function updateCount()
  {
    setCount(count+1);
  }
  return (
    <div className="App">
      {/* Passing props as chindren . The whole content within the Card Component will be pass as props and it can 
      be accessed in the Child component */}
      <Card>
        <h1>Hii i am Vedant</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
          reprehenderit voluptatibus iure quisquam eos eligendi a, laborum enim
          atque deleniti odio sit, facere temporibus consequatur esse suscipit
          tenetur ab quaerat?
        </p>
      </Card> <br></br>
      {/* Passing props as function .  */}
      <CounterCard fun1={updateCount} text={"click me"}>
        {count} <br></br>
        </CounterCard>
    </div>
  );
}

export default App;
