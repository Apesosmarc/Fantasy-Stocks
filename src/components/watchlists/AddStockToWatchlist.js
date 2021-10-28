import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  checkIfValidTicker,
  serverValidation,
} from "../../utils/stockValidation";

class AddStockToWatchlist extends React.Component {
  renderInput = ({ input, label, meta }) => {
    input.value = checkIfValidTicker(input.value);

    return (
      <div className="field">
        <label htmlFor={label}>{label}</label>
        <input {...input} autoComplete="off" />
        {meta.error && meta.touched && <div>{meta.error}</div>}
      </div>
    );
  };

  onClick = (formValues) => {
    this.props.onSubmit(formValues, this.props.index);
  };

  render() {
    return (
      <tr>
        <td>
          <form
            className="ui form"
            onSubmit={this.props.handleSubmit(serverValidation)}
            // onSubmit={this.props.handleSubmit(this.onClick)}
          >
            <Field
              label="Enter ticker"
              name="ticker"
              component={this.renderInput}
            />
            <button className="ui button primary">Submit</button>
          </form>
        </td>
      </tr>
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
