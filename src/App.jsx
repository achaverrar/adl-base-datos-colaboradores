import { useState } from "react";
import { Container } from "react-bootstrap";
import { useList, useFeedback } from "./hooks";
import initialCollaborators from "./data/BaseColaboradores";
import { RESULT_CONFIGURATIONS, hasQueryInAnyObjectValue } from "./utils";
import { Alert, Buscador, Formulario, Listado } from "./features";
import "./App.css";

const INITIAL_FEEDBACK = {
  isShowing: false,
  resultConfiguration: null,
};

function App() {
  const [collaborators, addCollaborator, deleteCollaborator] =
    useList(initialCollaborators);
  const [searchQuery, setSearchQuery] = useState("");
  const [feedback, showResult, resetResult] = useFeedback(
    INITIAL_FEEDBACK,
    RESULT_CONFIGURATIONS.SUCCESS,
    RESULT_CONFIGURATIONS.FAILURE
  );

  return (
    <Container
      fluid
      className="d-flex flex-column gap-3 py-4 px-3"
      style={{ maxWidth: "71rem" }}
    >
      <h1 className="fw-semibold">Lista de colaboradores</h1>
      <Buscador searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <div className="d-flex flex-wrap align-items-start gap-3 justify-content-between">
        <Listado
          collaborators={collaborators.filter((collaborator) =>
            hasQueryInAnyObjectValue(collaborator, searchQuery)
          )}
          deleteCollaborator={deleteCollaborator}
        />
        <div className="d-flex flex-column gap-3">
          <Formulario
            addCollaborator={addCollaborator}
            showResult={showResult}
            resetResult={resetResult}
            feedback={feedback}
          />
          {feedback.isShowing && <Alert {...feedback.resultConfiguration} />}
        </div>
      </div>
    </Container>
  );
}

export default App;
