import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useFormInputs } from "../hooks";
import { getFirstErrorMessage, inputs } from "../utils";
import { FormControl } from "../UI";

const INITIAL_INPUT_VALUES = {
  name: "",
  email: "",
  age: "",
  position: "",
  phone: "",
};

const Formulario = ({ addCollaborator, showResult, resetResult }) => {
  const [inputValues, changeHandler, resetInputValues] =
    useFormInputs(INITIAL_INPUT_VALUES);
  const [validating, setValidating] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    const errorMessage = getFirstErrorMessage(inputValues);
    setValidating(true);

    if (!errorMessage) {
      addCollaborator(inputValues);
      resetInputValues();
      setValidating(false);
      setTimeout(() => resetResult(), 5000);
    }

    showResult(errorMessage);
  };

  return (
    <Form
      className="d-flex flex-column gap-3"
      onSubmit={submitHandler}
      validated={validating}
      noValidate
    >
      <h2 className="h3 fw-semibold">Agregar colaborador</h2>
      {inputs.map(({ id, ...inputConfiguration }) => (
        <FormControl
          key={id}
          id={id}
          floatingLabel={true}
          onChange={changeHandler}
          value={inputValues[id]}
          {...inputConfiguration}
        />
      ))}
      <Button type="submit" className="w-100 btn-indigo">
        Agregar colaborador
      </Button>
    </Form>
  );
};

export default Formulario;
