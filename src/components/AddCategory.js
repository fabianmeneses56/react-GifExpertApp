import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setcategories }) => {
  const [inputValue, setinputValue] = useState("");

  const handleInputChange = (e) => {
    setinputValue(e.target.value);

    console.log('handleInput llamado')
  };

  const handleSubmit = (e) => {
    /* prevenir que la pagina se actualice por navegador */
    e.preventDefault();
    console.log('handle submit',inputValue);
    /* validacion de que hallna mas de 2 letras */
    if (inputValue.trim().length > 2) {
      setcategories((cats) => [inputValue, ...cats]);
      setinputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>{ inputValue }</p>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

AddCategory.propTypes = {
  setcategories: PropTypes.func.isRequired,
};
