import React, { Component } from "react";
import { connect } from "react-redux";

// Action Creators
import { getNews } from "../../actions";

class LoadNewsButton extends Component {
  state = {
    toggleNews: false,
  };

  componentDidMount() {
    this.props.getNews(this.props.stocks, this.props.listId);
  }

  //toggles news button
  toggleNews = () => {
    this.setState({
      toggleNews: !this.state.toggleNews,
    });
  };

  shuffleNews = (arr) => arr.sort(() => Math.random() - 0.5);

  renderNewsFeed = (news) => {
    if (news.length < 1)
      return (
        <div className="w-full">
          <p className="text-red-500 mx-auto text-center pb-4">
            Error 429: Too Many Requests To My Free API. Please Be Gentle
          </p>
        </div>
      );
    news = this.shuffleNews(news.slice(0, 7));
    return news.map((article, index) => {
      return (
        <article
          key={index}
          className="grid grid-cols-1 md:grid-cols-2 w-10/12 lg:w-9/12 mt-2 mb-5 gap-4 lg:gap-8 max-w-sm md:max-w-none mx-auto "
        >
          <div
            className="h-52 max-w-10 w-full md:w-11/12 lg:w-9/12 bg-contain bg-no-repeat col-start-1 justify-self-end"
            style={{
              backgroundImage: `url(${article.image})`,
            }}
          ></div>

          <div className="copy md:col-start-2 md:row-start-1">
            <a href={article.source}>
              <div className="text-blue-500 font-semibold">
                {article.source.name}
              </div>
              <h1 className="text-xl font-bold mt-2">{article.title}</h1>

              <h2 className="my-2">{article.description}</h2>
            </a>
          </div>
        </article>
      );
    });
  };

  render() {
    return (
      <div className="w-full  mt-8">
        <div
          className="bg-secondary rounded-md mb-6 mx-auto text-white w-96 md:w-1/2 lg:w-1/4"
          style={{
            background: "linear-gradient(45deg, #3a7bfd, #c058f3)",
          }}
        >
          <button
            onClick={this.toggleNews}
            className="w-full h-full p-4 relative"
          >
            <span className="text-2xl ">
              {this.state.toggleNews === true ? "Hide News" : "Show News"}
            </span>
          </button>
        </div>
        <div className="w-full mx-auto lg:w-8/12 flex flex-col justify-center">
          {this.props.news &&
            this.state.toggleNews &&
            this.renderNewsFeed(this.props.news[this.props.listId])}
          {this.state.toggleNews && (
            <button
              className="mx-auto utility-button py-2 px-4"
              onClick={this.toggleNews}
            >
              Hide News
            </button>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    news: state.news,
  };
};

export default connect(mapStateToProps, {
  getNews,
})(LoadNewsButton);
