import React, { Component } from 'react';
import shortid from 'shortid';
import Controls from '../Controls/Controls';
import Balance from '../Balance/Balance';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

class Dashboard extends Component {
  state = {
    transactions: [],
    balance: 0,
  };
  transactionAmounts = {
    amount: 0,
    income: 0,
    expenses: 0,
  };
  generateIds = {
    amountInput: shortid.generate(),
  };

  handleInputAmount = e => {
    this.transactionAmounts.amount = Number(e.currentTarget.value);
  };
  handleDeposit = () => {
    if (this.transactionAmounts.amount <= 0) {
      console.log('Введите сумму для проведения операции!');
      return;
    }
    this.transactionAmounts.income = this.transactionAmounts.amount;
    const transaction = {
      id: shortid.generate(),
      type: 'deposit',
      amount: this.transactionAmounts.income,
      date: new Date().toLocaleString(),
    };
    this.setState(state => ({
      balance: state.balance + this.transactionAmounts.amount,
      transactions: [...state.transactions, transaction],
    }));
  };
  handleWithdraw = () => {
    if (this.transactionAmounts.amount > this.state.balance) {
      console.log('На счету недостаточно средств для проведения операции!');
      return;
    } else if (this.transactionAmounts.amount <= 0) {
      console.log('Введите сумму для проведения операции!');
    } else {
      this.transactionAmounts.expenses = this.transactionAmounts.amount;
      const transaction = {
        id: shortid.generate(),
        type: 'withdraw',
        amount: this.transactionAmounts.expenses,
        date: new Date().toLocaleString(),
      };
      this.setState(state => ({
        balance: state.balance - this.transactionAmounts.amount,
        transactions: [...state.transactions, transaction],
      }));
    }
  };
  render() {
    const { transactions, balance } = this.state;
    const { income, expenses } = this.transactionAmounts;
    const { amountInput } = this.generateIds;

    return (
      <div className="dashboard">
        <Controls
          amount={amountInput}
          onChange={this.handleInputAmount}
          deposit={this.handleDeposit}
          withdraw={this.handleWithdraw}
        />

        <Balance withdraw={expenses} deposit={income} balance={balance} />

        <TransactionHistory arrayOfTransactions={transactions} />
      </div>
    );
  }
}

export default Dashboard;
