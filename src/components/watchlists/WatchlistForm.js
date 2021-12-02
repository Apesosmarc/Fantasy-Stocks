import React from "react";
import { Field, reduxForm } from "redux-form";
import { checkIfValidWatchlist } from "../../validation/watchlistValidation";

class WatchlistForm extends React.Component {
  renderInput = ({ input, label, meta, placeholder }) => {
    input.value = checkIfValidWatchlist(input);
    return (
      <div className="field flex flex-col">
        <label
          className="mb-2 font-bold text-white"
          placeholder={placeholder}
          htmlFor={label}
        >
          {label}
        </label>
        <input
          className="rounded h-10 mb-2 text-black font-bold p-2"
          placeholder={placeholder}
          {...input}
          autoComplete="off"
        />
        {meta.touched && meta.error && <div>{meta.error}</div>}
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.onClick(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="flex flex-col"
      >
        <Field label="Enter Title" name="title" component={this.renderInput} />
        <Field
          label="Enter Description"
          name="description"
          placeholder="Optional"
          component={this.renderInput}
        />
        <button className="bg-btnPrimary text-2xl hover:bg-blue-700 text-white py-2 px-4 font-bold rounded self-center flex-grow-0 mt-4">
          Submit
        </button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "Please enter a title";
  }

  return errors;
};

export default reduxForm({
  form: "watchlistForm",
  validate,
})(WatchlistForm);
