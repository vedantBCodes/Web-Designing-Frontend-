import jaya from "./Images/jayaKishori.webp";
import srk from "./Images/srk.webp";
import rdj from "./Images/rdj.webp";


import './App.css';
import Card from './card';

function App()
{
  let disc1 = "Discription : Jaya Kishori Jis spiritual mentor, Pandit Shri Govindram Ji Mishra, bestowed the title Kishori Ji upon her in recognition of her devotion to Lord Shri Krishna.";
  let disc3 = "Discription : Robert Downey Jr.. Actor: Iron Man. Robert Downey Jr. has evolved into one of the most respected actors in Hollywood.";
  let disc2 = "Discription : Shah Rukh Khan is an Indian actor, producer and television personality who works in Hindi films. He began his acting career by playing a soldier series Fauji"

  return (
    <div className="App">
      <Card name='jaya kishori' img={jaya} disc={disc1}/>
      <Card name='SRK' img={srk} disc={disc2}/>
      <Card name='RDJ' img={rdj} disc={disc3}/>
    </div>
  );
}

export default App;
