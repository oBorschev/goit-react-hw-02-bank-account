import React, { Component } from 'react';

class Controls extends Component {
  state = {
    amount: 0,
  };

  handleInputAmount = e => {
    this.setState({
      amount: Number(e.currentTarget.value),
    });
  };

  setDeposit = () => {
    this.props.deposit(this.state.amount);
  };
  setWithdraw = () => {
    this.props.withdraw(this.state.amount);
  };

  render() {
    return (
      <section className="controls">
        <input
          type="number"
          name="amount"
          id={this.props.amountId}
          onChange={this.handleInputAmount}
        />
        <button type="button" onClick={this.setDeposit}>
          Deposit
        </button>
        <button type="button" onClick={this.setWithdraw}>
          Withdraw
        </button>
      </section>
    );
  }
}

export default Controls;
