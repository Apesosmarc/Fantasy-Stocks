import React from "react";
import { Field, reduxForm } from "redux-form";
import { checkIfValidInput, serverValidation } from "../../utils/validation";

class AddStockToWatchlist extends React.Component {
  renderInput = ({ input, label, meta }) => {
    if (checkIfValidInput(input.value)) {
      input.value = "";
    }
    return (
      <div className="field">
        <label htmlFor={label}>{label}</label>
        <input {...input} autoComplete="off" />
        {meta.error && <div>{meta.error}</div>}
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
  if (formValues.ticker.length > 5) {
    errors.ticker = "Ticker is too long";
  }
  return errors;
};

export default reduxForm({
  validate,
  form: "submitValidation",
})(AddStockToWatchlist);
