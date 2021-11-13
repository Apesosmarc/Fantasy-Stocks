import axios from "axios";
import newsAPI from "../apis/newsAPI";
import history from "../history";

export const getNews = (stock, index) => async (dispatch) => {
  const response = await newsAPI
    .get("", {
      params: {
        q: stock,
      },
    })
    .then((res) => {
      return res.data.articles.slice(0, 3).map((stock) => stock);
    })
    .catch((e) => {
      return e;
    });

  dispatch({
    type: "GET_NEWS",
    payload: { stock, news: response },
  });

  return null;
};
