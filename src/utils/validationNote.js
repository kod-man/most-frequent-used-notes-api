const validateNote = (data) => {
  const { keyword, note } = data;
  const errors = {};
  if (keyword.trim() === "") {
    errors.keyword = "Keyword cannot be empty";
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
