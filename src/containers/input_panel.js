import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { updateInput } from "../actions";

class InputPanel extends Component {
  onInputChange(event) {
    this.props.updateInput();
  }

  constructor(props) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);
  }
  renderField(field) {

    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          type="number"
          name={field.name}
          className="form-control"
          step="10000"
          {...field.input}
        />
      </div>
    );
  }

  render() {
    return (
      <form className="form-group">
        <Field
          label="Initial value"
          name="initialValue"
          component={this.renderField}
        />
        <Field
          label="Monthly deposit"
          name="monthlyDeposit"
          component={this.renderField}
        />
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateInput }, dispatch);
}

export default reduxForm({
  form: "UpdateForm"
})(
  connect(null, mapDispatchToProps)(InputPanel)
);
