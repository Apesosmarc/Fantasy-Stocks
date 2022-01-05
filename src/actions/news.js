import newsAPI from "../apis/newsAPI";

export const getNews = (stocks, listId) => async (dispatch) => {
  let newsArr = [];

  stocks.map(async (ticker) => {
    return await newsAPI
      .get("", {
        params: {
          q: ticker,
          lang: "en",
        },
      })
      .then((res) => {
        newsArr.push(...res.data.articles.slice(0, 3));
        return res.data.articles.slice(0, 3);
      });
  });

  // assigns each array of articles to key of listId. This can be accessed easily within ShowNews component
  dispatch({
    type: "GET_NEWS",
    payload: { [listId]: newsArr },
  });
};
