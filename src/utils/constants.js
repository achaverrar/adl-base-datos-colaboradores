const PATTERNS = {
  TEXT: "\\s*(\\S\\s*){3,}",
  EMAIL: "[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$",
  PHONE: "^[\\+]?[\\(]?[0-9]{0,3}[\\)]?[\\s.\\-]?[0-9]{3}[\\s.\\-]?[0-9]{2,6}$",
};

const RESULT_CONFIGURATIONS = {
  FAILURE: {
    variant: "danger",
    message: "No fue posible hacer el registro 😕",
  },
  SUCCESS: {
    variant: "success",
    message: "¡Registro exitoso! 😊",
  },
};

const searchBar = {
  id: "searchQuery",
  name: "searchQuery",
  type: "search",
  placeholder: "Busca un colaborador",
  required: false,
};

const inputs = [
  {
    id: "name",
    label: "Nombre del colaborador",
    type: "text",
    placeholder: "Nombre del colaborador",
    pattern: PATTERNS.TEXT.toString(),
    required: true,
  },
  {
    id: "email",
    label: "Email del colaborador",
    type: "email",
    placeholder: "Email del colaborador",
    required: true,
  },
  {
    id: "age",
    label: "Edad del colaborador",
    type: "number",
    placeholder: "Edad del colaborador",
    min: 18,
    required: true,
  },
  {
    id: "position",
    label: "Cargo del colaborador",
    type: "text",
    placeholder: "Cargo del colaborador",
    pattern: PATTERNS.TEXT,
    required: true,
  },
  {
    id: "phone",
    label: "Teléfono del colaborador",
    type: "tel",
    placeholder: "Teléfono del colaborador",
    pattern: PATTERNS.PHONE,
    required: true,
  },
];

export { PATTERNS, RESULT_CONFIGURATIONS, searchBar, inputs };
