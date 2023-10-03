import { useState } from "react";

const useFormInputs = (initialInputValues) => {
  const [inputValues, setInputValues] = useState(initialInputValues);

  const changeHandler = ({ target: { id: inputId, value } }) => {
    setInputValues((prevFormState) => ({
      ...prevFormState,
      [inputId]: value,
    }));
  };

  const resetInputValues = () => {
    setInputValues(initialInputValues);
  };

  return [inputValues, changeHandler, resetInputValues];
};

export default useFormInputs;
