import React from "react";
import { Field, reduxForm } from "redux-form";
import { checkIfValidWatchlist } from "../../utils/watchlistValidation";

class WatchlistForm extends React.Component {
  renderInput = ({ input, label, meta, placeholder }) => {
    input.value = checkIfValidWatchlist(input);
    return (
      <div className="field">
        <label placeholder={placeholder} htmlFor={label}>
          {label}
        </label>
        <input placeholder={placeholder} {...input} autoComplete="off" />
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
        className="ui form"
      >
        <Field label="Enter Title" name="title" component={this.renderInput} />
        <Field
          label="Enter Description"
          name="description"
          placeholder="Optional"
          component={this.renderInput}
        />
        <button className="ui button primary">Submit</button>
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
