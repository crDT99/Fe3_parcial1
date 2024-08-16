import React from "react";

const Card = ({ carro }) => {
  console.log(carro);

  return (
    <div>
      <h2>Has creado un carro nuevo!! 🚗🏎🚙🚘</h2>
      <h3>tu carro es de la Marca {carro.marca}</h3>
      <h3> y su color es {carro.color}</h3>
      <h4>espero te guste =D</h4>
    </div>
  );
};

export default Card;
