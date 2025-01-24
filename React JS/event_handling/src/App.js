import './App.css';

function App() {

  function handleButtonClick()
  {
    alert('Button clicked');
  }
  function handleMouseOver()
  {
    alert('MouseOver on paragraph');
  }

  function handleInputChange(e)
  {
    console.log(" Value till now " , e.target.value);
  }
  function handleSubmit(e)
  {
    e.preventDefault(); //It will prevent the default behaviour in form submittion
    alert('Form submitted');
  }

  return (
    <div className="App">
      <div> 
      <button onClick={handleButtonClick}>Click me (Button-1)</button> 
      </div>
      
      <div> 
      <button onClick={()=>{alert('Button clicked ')}}>Click me (Button-2)</button> 
      </div>
      
      <div style={{border : "2px solid black" , padding:"10px" }}>
        <p onMouseOver={handleMouseOver}>I am paragraph and please hover me</p>
      </div>

      <div style={{padding:"10px" }}>
        <input type="text" onChange={handleInputChange} /> 
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" /> <br></br> <br></br>
          <button type="submit">Submit</button>
        </form>
      </div>

    </div>
  );
}

export default App;
