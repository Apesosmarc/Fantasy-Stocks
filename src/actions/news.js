import newsAPI from "../apis/newsAPI";

export const getNews = (stocks, listId) => async (dispatch) => {
  let newsArr = [];

  await Promise.all(
    stocks.map(async (ticker) => {
      return await newsAPI
        .get("", {
          params: {
            q: ticker,
          },
        })
        .then((res) => {
          newsArr.push(...res.data.articles.slice(0, 3));
          return res.data.articles.slice(0, 3);
        });
    })
  );

  // assigns each array of articles to key of listId. This can be accessed easily within ShowNews component
  dispatch({
    type: "GET_NEWS",
    payload: { [listId]: newsArr },
  });

  // const response = await newsAPI
  //   .get("", {
  //     params: {
  //       q: stock,
  //     },
  //   })
  //   .then((res) => {
  //     return res.data.articles.slice(0, 3).map((stock) => stock);
  //   })
  //   .catch((e) => {
  //     return e;
  //   });

  // dispatch({
  //   type: "GET_NEWS",
  //   payload: { stock, news: response },
  // });

  // return null;
};

export const getAllNews = (stocks) => async (dispatch) => {};
