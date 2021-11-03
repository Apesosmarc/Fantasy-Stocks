import React, { Component } from "react";
import { connect } from "react-redux";
import news from "./newsTest";
// Action Creators
import { getNews } from "../../actions/news";

class LoadNewsButton extends Component {
  componentDidMount() {
    //   if (this.props.stocks.length != 0) {
    //     this.props.stocks.forEach((stock, index) => {
    //       this.props.getNews(stock, index);
    //     });
    //   }
  }

  shuffleNews = (arr) => arr.sort(() => Math.random() - 0.5);

  renderNewsFeed(news) {
    return news.map((article) => {
      return (
        <article>
          <h1>{article.title}</h1>
          <h2>{article.description}</h2>
          <img src={article.urlToImage} />
        </article>
      );
    });
  }

  render() {
    return (
      <div className="w-full">
        <div
          className="bg-secondary rounded-md mb-6 mx-auto text-white w-96 md:w-1/2 lg:w-1/4 "
          style={{
            background: "linear-gradient(30deg, #57ddff, #c058f3)",
          }}
        >
          <button className="w-full h-full p-4 relative">
            <span className="text-2xl ">Show News</span>
          </button>
        </div>
        {this.renderNewsFeed(this.shuffleNews(news))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const newsArr = [];
  for (let stock in state.news) {
    state.news[stock].forEach((article) => newsArr.push(article));
  }

  return {
    news: newsArr,
  };
};

export default connect(mapStateToProps, {
  getNews,
})(LoadNewsButton);
