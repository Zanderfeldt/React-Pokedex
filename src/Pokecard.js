import React from 'react';
import "./Pokecard.css";

function Pokecard(props) {

  return (
    <div className="Pokecard">
      <div className="Pokecard-title">{props.name}</div>
      <img className="Pokecard-image" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`} alt=''/>
      <div className="Pokecard-data">Type: {props.type}</div>
      <div className="Pokecard-data">EXP: {props.exp}</div>
    </div>
  );
}

export default Pokecard;