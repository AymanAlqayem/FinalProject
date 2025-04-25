const createElement = (type, text) => {
  const element = document.createElement(type);
  if (text) element.textContent = text; // Added conditional to avoid setting empty textContent
  return element;
};
``;
const createImage = (url, alt) => {
  const img = document.createElement("img");
  img.src = url;
  img.alt = alt || ""; // Added fallback for alt text
  return img;
};

const createHeader = (type, text, dataCy) => {
  const header = document.createElement(type);
  header.textContent = text;
  header.setAttribute("data-cy", dataCy);
  return header;
};

const createToggleButton = (text, element) => {
  const button = document.createElement("button");
  button.textContent = text;
  button.addEventListener("click", () =>
    element.classList.toggle("notVisible"),
  );
  return button;
};

const createLabel = (text, htmlFor) => {
  const label = document.createElement("label");
  label.textContent = text;
  label.setAttribute("for", htmlFor);
  return label;
};

const createInput = (name) => {
  const input = document.createElement("input");
  input.name = name;
  input.id = name;
  input.type = "text"; // Added explicit type for clarity
  return input;
};

const createSubmitButton = (value) => {
  const submit = document.createElement("input");
  submit.type = "submit";
  submit.value = value;
  return submit;
};

export {
  createElement,
  createImage,
  createHeader,
  createToggleButton,
  createLabel,
  createInput,
  createSubmitButton,
};
