import { Button } from "react-bootstrap";
import TableCell from "../UI/TableCell";

const Collaborator = ({ id, deleteCollaborator, ...collaboratorData }) => {
  return (
    <tr key={id}>
      {Object.entries(collaboratorData).map(([key, value]) => (
        <TableCell key={`${id}-${key}`}>{value}</TableCell>
      ))}
      <TableCell>
        <Button
          variant="danger"
          onClick={() => {
            deleteCollaborator(id);
          }}
        >
          Eliminar
        </Button>
      </TableCell>
    </tr>
  );
};

export default Collaborator;
