import React, { Component } from "react";
import { connect } from "react-redux";

class OutputPanel extends Component {
  render() {
    console.log(this.props.form);
    var tot = 0;
    const { values } = this.props.form.UpdateForm;
    if(values) {
      var monthly = values.monthlyDeposit;
      if (!monthly) {
        monthly = 0;
      }
      var initial = values.initialValue;
      if (!initial) {
        initial = 0;
      }
      tot = Number(monthly) + Number(initial);
    }

    return (
      <div>
        Total: {tot}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    form: state.form
  };
}

export default connect(mapStateToProps)(OutputPanel);
