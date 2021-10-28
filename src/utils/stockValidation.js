import axios from "axios";
import { SubmissionError } from "redux-form";

export const serverValidation = async (ticker) => {
  const result = axios.get(`https://swapi.dev/api/people/${ticker}`);

  return result
    .then((response) => {
      console.log(response.status);
    })
    .catch((error) => {
      if (error.response.status === 404) {
        throw new SubmissionError({
          ticker: "Ticker not found",
          _error: "ticker not found",
        });
      }
    });
};

export const checkIfValidTicker = (value) => {
  if (/[0-9]|\W/.test(value)) {
    return value.substring(0, value.length - 1);
  }
  if (value.length > 5) {
    return value.substring(0, value.length - 1);
  }
};
