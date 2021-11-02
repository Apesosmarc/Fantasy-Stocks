import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
// Action creators
import { addStockToWatchlist } from "../../actions";
// Validation
import { checkIfValidTicker } from "../../validation/stockValidation";

class AddStockToWatchlist extends React.Component {
  renderInput = ({ input, label, meta }) => {
    input.value = checkIfValidTicker(input.value);

    return (
      <div className="flex flex-col h-20 ">
        <label htmlFor={label}>{label}</label>
        <input
          {...input}
          className="w-full h-10 rounded p-2 text-black bg-primary"
          autoComplete="off"
        />
        <div> {meta.error && meta.touched && meta.error}</div>
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.onClick(formValues.ticker, this.props.index);
  };

  render() {
    return (
      <div className="mb-10">
        <form
          className="flex justify-center"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          // onSubmit={this.props.handleSubmit(this.onClick)}
        >
          <Field
            label="Enter ticker"
            name="ticker"
            component={this.renderInput}
          />

          <button className="bg-btnPrimary text-2xl hover:bg-blue-700 text-white py-2 px-4 font-bold rounded self-center flex-grow-0">
            +
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
