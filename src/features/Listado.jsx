import { Table } from "react-bootstrap";
import Collaborator from "./Collaborator";

const Listado = ({ collaborators, deleteCollaborator }) => {
  return (
    <Table
      striped
      bordered
      hover
      className="text-center"
      style={{ maxWidth: "51rem" }}
    >
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Edad</th>
          <th>Cargo</th>
          <th>Teléfono</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {collaborators.map((collaborator) => (
          <Collaborator
            key={collaborator.id}
            {...collaborator}
            deleteCollaborator={deleteCollaborator}
          />
        ))}
      </tbody>
    </Table>
  );
};

export default Listado;
