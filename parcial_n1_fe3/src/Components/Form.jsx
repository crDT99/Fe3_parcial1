import React, { useState } from "react";
import Card from "./Card";

const Form = () => {
  const [carro, setCarro] = useState({
    marca: "",
    color: "",
  });

  const [correct, setCorrect] = useState(false);
  const [error, setError] = useState(false);

  const handleChangeMarca = (e) => {
    setCarro({ ...carro, marca: e.target.value });
  };

  const handleChangecolor = (e) => {
    setCarro({ ...carro, color: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); //previene recarga
    const min6charactersRegex = /^.{6,}$/;
    console.log(carro);
    console.log(min6charactersRegex.test(carro.color));

    if (
      /*
    validacion#1: la longitud mínima del texto ingresado deberá ser de 3 caracteres y no deberá contener espacios en blanco al comienzo.
    */
      carro.marca.trim().length > 3 &&
      !carro.marca.startsWith(" ") &&
      /*
      validacion#2: debemos validar que el segundo input contenga al menos al menos 6 caracteres.
      */
      min6charactersRegex.test(carro.color)
    ) {
      console.log("todo ok");
      setCorrect(true);
      setError(false);
    } else {
      console.log("error >:(");
      setError(true);
    }
  };

  const reset = () => {
    setCarro({
      marca: "",
      color: "",
    });
  };

  return (
    <>
      {correct ? (
        <Card carro={carro} />
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <label>Marca:</label>
            <input
              type="text"
              value={carro.marca}
              onChange={handleChangeMarca}
            />
            <label>Color: </label>
            <input
              type="text"
              value={carro.color}
              onChange={handleChangecolor}
            />
            <button>Enviar</button>
          </form>
          <button onClick={reset}>Reset form</button>
        </>
      )}

      {error ? (
        <h4 style={{ color: "red" }}>
          Error: Por favor, coloque la información correctamente
        </h4>
      ) : null}
    </>
  );
};
export default Form;
