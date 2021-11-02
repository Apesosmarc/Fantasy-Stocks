import axios from "axios";

export default axios.create({
  baseURL: "https://cloud.iexapis.com/stable",
  params: {
    token: "pk_20ef19e503084fdab978e3a3b7ca601a",
  },
});
