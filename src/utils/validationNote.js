const validateNote = (data) => {
  const { description, code } = data;
  const errors = {};
  if (description.trim() === "") {
    errors.description = "Description cannot be empty";
  }
  if (code.trim() === "") {
    errors.code = "Code cannot be empty";
  }
  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

module.exports = validateNote;
