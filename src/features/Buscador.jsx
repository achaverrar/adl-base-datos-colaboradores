import { Form } from "react-bootstrap";
import { searchBar } from "../utils";
import { FormControl } from "../UI";

const Buscador = ({ searchQuery, setSearchQuery }) => {
  return (
    <Form className="w-50">
      <FormControl
        floatingLabel={false}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        {...searchBar}
      />
    </Form>
  );
};

export default Buscador;
