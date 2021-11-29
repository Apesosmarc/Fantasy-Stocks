export const checkIfValidWatchlist = ({ name, value }) => {
  // Value = input value.
  if (!value) return;
  if (name === "title" && value.length > 30) {
    return value.substring(0, value.length - 1);
  }
  if (name === "description" && value.length > 45) {
    return value.substring(0, value.length - 1);
  }
};
