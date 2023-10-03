import { PATTERNS } from "./constants";

const hasQueryInAnyObjectValue = (item, query) => {
  if (!query.length) return true;
  return Object.values(item).some((value) => {
    return value.toString().toLowerCase().includes(query.toLowerCase());
  });
};

function getFirstErrorMessage(formValues) {
  if (thereIsEmptyValue(formValues)) {
    return "¡Completa todos los campos!";
  }

  for (let getErrorFn of getErrorFns) {
    const errorMessage = getErrorFn(formValues)?.[1];
    if (errorMessage) return errorMessage;
  }
  return null;
}

const getErrorFns = [
  getErrorInName,
  getErrorInEmail,
  getErrorInAge,
  getErrorInPosition,
  getErrorInPhone,
];

function getErrorInName({ name }) {
  const errorMessage = validateText({
    text: name.trim(),
    message: "El nombre debe tener al menos 3 caracteres",
  });

  if (errorMessage) return ["name", errorMessage];
}

function getErrorInEmail({ email }) {
  if (!satisfiesRegExp(email, PATTERNS.EMAIL)) {
    return ["email", "El email debe tener un formato válido"];
  }
}

function getErrorInPhone({ phone }) {
  if (!satisfiesRegExp(phone, PATTERNS.PHONE)) {
    return ["phone", "El formato de número de teléfono es inválido"];
  }
}

function getErrorInAge({ age }) {
  const ageNumber = +age;
  if (!isFinite(ageNumber)) {
    return ["age", "La edad debe ser un número"];
  }
  if (age < 18) {
    return ["age", "El colaborador debe ser mayor de edad"];
  }
}

function getErrorInPosition({ position }) {
  const errorMessage = validateText({
    text: position.trim(),
    message: "El cargo debe tener al menos 3 caracteres",
  });

  if (errorMessage) return ["position", errorMessage];
}

function validateText({ text, message }) {
  if (!satisfiesRegExp(text, PATTERNS.TEXT)) {
    return message;
  }
}

function thereIsEmptyValue(values) {
  return Object.values(values).some((value) => !value.trim());
}

function satisfiesRegExp(text, pattern) {
  return new RegExp(pattern).test(text.trim());
}

export { hasQueryInAnyObjectValue, getFirstErrorMessage };
