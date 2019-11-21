import React, { Component } from 'react';
import styles from './Controls.module.css';

class Controls extends Component {
  state = {
    amount: '',
  };

  handleInputAmount = ({ currentTarget: { value } }) => {
    this.setState({
      amount: Number(value),
    });
  };

  handleOnClick = e => {
    e.target.name === 'deposit'
      ? this.props.deposit(Number(this.state.amount))
      : this.props.withdraw(Number(this.state.amount));

    this.setState({
      amount: '',
    });
  };

  render() {
    const onClick = this.handleOnClick;
    return (
      <section className={styles.controls}>
        <input
          type="number"
          name="amount"
          id={this.props.amountId}
          onChange={this.handleInputAmount}
          value={this.state.amount}
        />
        <button type="button" name="deposit" onClick={onClick}>
          Deposit
        </button>
        <button type="button" name="withdraw" onClick={onClick}>
          Withdraw
        </button>
      </section>
    );
  }
}

export default Controls;
