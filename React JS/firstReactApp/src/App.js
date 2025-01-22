// import logo from './logo.svg';
import './App.css';

function App() {
  let obj1={
    'name' : 'vedant',
    'age' : 24
  }
  return (
    <div className="App">
      <h1>Hello {obj1.name} , you are {obj1.age} years old .</h1>
      <p style={{color:'blue', fontSize:'30px'}}>I graduated from TMV pune and now i am doing MCA in SIOM , vadgaon ,pune</p>
    </div>
  );
}

export default App;
