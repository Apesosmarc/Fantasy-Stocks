export const checkIfValidWatchlist = ({ name, value }) => {
  if (name === "title" && value.length > 15) {
    return value.substring(0, value.length - 1);
  }
  if (name === "description" && value.length > 30) {
    return value.substring(0, value.length - 1);
  }
};
