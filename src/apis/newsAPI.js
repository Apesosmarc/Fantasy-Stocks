import axios from "axios";

export default axios.create({
  baseURL: "https://gnews.io/api/v4/search",
  params: {
    token: "fc1a2a5130b8c53d901ee98ebbc1466c",
  },
});
