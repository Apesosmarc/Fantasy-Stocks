import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
// Action creators
import { addStockToWatchlist } from "../../actions";
// Validation
import { checkIfValidTicker } from "../../validation/stockValidation";
import iex from "../../apis/iex";
import { SubmissionError } from "redux-form";

class AddStockToWatchlist extends React.Component {
  renderInput = ({ input, label, meta }) => {
    input.value = checkIfValidTicker(input.value);

    return (
      <div className="flex flex-col h-20 justify-center">
        <input
          {...input}
          className="w-full h-10 rounded p-2 text-primary bg-primary"
          placeholder="Enter symbol"
          autoComplete="off"
        />
        <div> {meta.error && meta.touched && meta.error}</div>
      </div>
    );
  };

  serverValidate = async (formValues) => {
    const ticker = formValues.ticker.toUpperCase();

    const response = await iex
      .get(`/stock/${ticker}/quote`)
      .then((res) => {
        this.props.onClick(ticker, this.props.index);
        formValues.ticker = "";
      })
      .catch((error) => {
        if (error.response.status === 404) {
          throw new SubmissionError({
            ticker: "Ticker not found",
            _error: "ticker not found",
          });
        }
      });
  };

  render() {
    return (
      <div className="mb-10">
        <form
          className="flex flex-col"
          onSubmit={this.props.handleSubmit(this.serverValidate)}
        >
          <Field
            label="Enter ticker"
            name="ticker"
            component={this.renderInput}
          />

          <button className=" ml-2 bg-btnPrimary text-lg hover:bg-blue-700 text-white py-2 px-4 font-bold rounded self-center flex-grow-0">
            Add To List
          </button>
        </form>
      </div>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.ticker) {
    errors.ticker = "Please enter a ticker";
  }
  return errors;
};

export default reduxForm({
  validate,
  form: "submitValidation",
})(AddStockToWatchlist);
