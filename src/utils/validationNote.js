const validateNote = (data) => {
  const { description, note } = data;
  const errors = {};
  if (description.trim() === "") {
    errors.description = "Description cannot be empty";
  }
  if (note.trim() === "") {
    errors.note = "Note cannot be empty";
  }
  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

module.exports = validateNote;
