import BAlert from "react-bootstrap/Alert";
const Alert = ({ variant, message }) => {
  return (
    <BAlert variant={variant} className="mb-0 text-center">
      {<p className="mb-0 fw-bold">{message}</p>}
    </BAlert>
  );
};

export default Alert;
