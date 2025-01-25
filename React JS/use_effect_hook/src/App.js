import { useEffect, useState } from 'react';
import './App.css';

function App() 
{
  const [count , setCount] = useState(0);
  const [total , setTotal] = useState(1);
  function handleCount()
  {
    setCount(count+1);
  }
  function handleTotal()
  {
    setTotal(total+1);
  }
  // first - side-effect function
  // second - clean-up funtion (This will run as soon as the value is unmount (remove))
  // third -  Comma seperated dependancy list 

  // Syntax :
//  useEffect(() => {
//    first
 
//    return () => {
//      second
//    }
//  }, [third])

// Variation 1:
// runs on every render
// useEffect(()=>{
//   alert("Runs on every render");
// })
 
// Variation 2:
// runs on first render
// useEffect(() => {
//   alert('This will run on only first render');
// }, [])

// Variation 3:
// runs on everytime the count is updated ()
// useEffect(() => {
//   alert('This will run everytime the count is updated');
// }, [count])

// Variation 4:
// Multiple dependencies
// useEffect(() => {
//   alert('This will run everytime the count/total is updated');
// }, [count,total])

// Variation 5:
// Using clean-up function
// useEffect(() => {
//   alert('Count is updated');

//   return () => {
//     alert('Count is unmounted from the UI');  //Everytime count is updated previous value of count is removed , so it will run everytime count is updated
//   }
// }, [count])



return (
  <div>
    <button onClick={handleCount}>Click me (count)</button> <br/>
    Count is : {count}<br/>  <br/>
    <button onClick={handleTotal}>Click me (total)</button> <br/>
    Total is : {total}<br/>  
  </div>
)

}

export default App;
