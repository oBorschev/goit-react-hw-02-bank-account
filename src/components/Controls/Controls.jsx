import React, { Component } from 'react';
import styles from './Controls.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Controls extends Component {
  state = {
    amount: 0,
  };

  handleInputAmount = ({ currentTarget: { value } }) => {
    this.setState({
      amount: Number(value),
    });
  };

  setDeposit = () => {
    this.props.deposit(this.state.amount);
  };
  setWithdraw = () => {
    console.log(this.props.deposit);
    this.props.withdraw(this.state.amount);
  };

  render() {
    return (
      <section className={styles.controls}>
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
