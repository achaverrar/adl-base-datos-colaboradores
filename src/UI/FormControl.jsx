import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const FormControl = ({
  floatingLabel,
  id,
  label,
  onChange,
  ...inputConfig
}) => {
  if (floatingLabel) {
    return (
      <FloatingLabel controlId={id} label={label}>
        <Form.Control onChange={onChange} {...inputConfig} />
      </FloatingLabel>
    );
  }

  return <Form.Control onChange={onChange} {...inputConfig} />;
};

export default FormControl;
