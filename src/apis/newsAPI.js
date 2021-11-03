import axios from "axios";

export default axios.create({
  baseURL: "https://newsapi.org/v2/everything",
  params: {
    sortBy: "popularity",
    apiKey: "5657f7cd3ae944c487afd9146324277f",
  },
});
