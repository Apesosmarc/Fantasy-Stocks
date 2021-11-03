import iex from "../apis/iex";
import { addStockToWatchlist } from "../actions/index";

export const checkIfValidTicker = (value) => {
  if (!value) return;

  if (/[0-9]|\W/.test(value)) {
    return value.substring(0, value.length - 1);
  }
  if (value.length > 5) {
    return value.substring(0, value.length - 1);
  }
};
