import { SubmissionError } from "redux-form";
import iex from "../apis/iex";
import { addStockToWatchlist } from "../actions/index";

export const serverValidation = async ({ ticker }) => {
  return await iex.get(`/stock/${ticker}/quote`).catch((error) => {
    if (error.response.status === 404) {
      throw new SubmissionError({
        ticker: "Ticker not found",
        _error: "ticker not found",
      });
    }
  });
};

export const checkIfValidTicker = (value) => {
  if (!value) return;

  if (/[0-9]|\W/.test(value)) {
    return value.substring(0, value.length - 1);
  }
  if (value.length > 5) {
    return value.substring(0, value.length - 1);
  }
};
