/**
 * handle onChange for input
 */
 export function handleChange(event, setInput) {
  setInput(event.target.value);
}

/**
 * handle onSubmit for form
 */
export function handleSubmit(event, input, setState) {
  // disable default auto refresh upon submit
  event.preventDefault();
  setState(input);
}
