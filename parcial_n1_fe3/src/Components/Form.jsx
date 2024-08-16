import React, { useState } from "react";
import Card from "./Card";

const Form = () => {
  const [carro, setCarro] = useState({
    marca: "",
    color: "",
  });

  const [correct, setCorrect] = useState(false);
  const [error, setError] = useState(false);

  // Declaración de errorMsg dentro del componente
  const [errorMsg, setErrorMsg] = useState("");

  const handleChangeMarca = (e) => {
    setCarro({ ...carro, marca: e.target.value });
  };

  const handleChangecolor = (e) => {
    setCarro({ ...carro, color: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const min6charactersRegex = /^.{6,}$/;

    // Validaciones y actualización de errorMsg
    setErrorMsg(
      carro.marca.trim().length < 3
        ? "La marca debe tener al menos 3 caracteres"
        : carro.marca.startsWith(" ")
        ? "La marca no puede empezar por espacio vacío"
        : !min6charactersRegex.test(carro.color)
        ? "El color debe tener al menos 6 caracteres"
        : ""
    );

    if (
      carro.marca.trim().length > 3 &&
      !carro.marca.startsWith(" ") &&
      min6charactersRegex.test(carro.color)
    ) {
      setCorrect(true);
      setError(false);
    } else {
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
              placeholder="casa matriz"
            />
            <label>Color: </label>
            <input
              type="text"
              value={carro.color}
              onChange={handleChangecolor}
              placeholder="Hexadecimal"
            />
            <button>Enviar</button>
          </form>
          <button onClick={reset}>Reset form</button>
        </>
      )}
      {error && (
        <h4 style={{ color: "red" }}>
          Error: Por favor, coloque la información correctamente <br />
          {errorMsg}
        </h4>
      )}
    </>
  );
};

export default Form;
