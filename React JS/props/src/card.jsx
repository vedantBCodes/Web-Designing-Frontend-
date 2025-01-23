
import './App.css'

const Card = (props) => {
  return (
    <div className="card">
      <p>Name : {props.name}</p>
      <img src={props.img} alt="" />
      <p className="disc"> {props.disc}</p>
    </div>
  );
};

export default Card;
