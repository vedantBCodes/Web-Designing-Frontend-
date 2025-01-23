import './App.css';
import Footer from './Footer';
import {Header} from './Header';
function App() 
{
  return (
    <div >
     <Header/>
     <div className="cardContainer">
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       </div>
     <Footer/>
    </div>
  );
}

export default App;

function Card()
{
  return(
    <div className="card">
      <p>This is a card</p> 
    </div>

  )
}
