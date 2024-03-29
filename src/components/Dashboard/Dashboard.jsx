import React, { Component } from 'react';
import shortid from 'shortid';
import Controls from '../Controls/Controls';
import Balance from '../Balance/Balance';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Dashboard.module.css';

class Dashboard extends Component {
  state = {
    transactions: [],
    balance: 0,
  };

  generateIds = {
    amountInput: shortid.generate(),
  };

  handleSetTransaction = e => {
    console.log(e);
  };

  handleDeposit = amount => {
    if (amount <= 0) {
      toast.error('Введите корректную сумму для проведения операции!');
      return;
    }
    const income = {
      id: shortid.generate(),
      type: 'income',
      amount: amount,
      date: new Date().toLocaleString(),
    };
    this.setState(state => ({
      balance: state.balance + amount,
      transactions: [...state.transactions, income],
    }));
  };

  handleWithdraw = amount => {
    if (amount > this.state.balance) {
      toast.error('На счету недостаточно средств для проведения операции!');
      return;
    } else if (amount <= 0) {
      toast.error('Введите сумму для проведения операции!');
    } else {
      const withdraw = {
        id: shortid.generate(),
        type: 'expenses',
        amount: amount,
        date: new Date().toLocaleString(),
      };
      this.setState(state => ({
        balance: state.balance - amount,
        transactions: [...state.transactions, withdraw],
      }));
    }
  };

  render() {
    const { transactions, balance } = this.state;
    const { amountInput } = this.generateIds;
    const transactionAmounts = transactions.reduce(
      (acc, t) => {
        return {
          ...acc,
          [t.type]: t.amount + acc[t.type],
        };
      },
      { income: 0, expenses: 0 },
    );
    return (
      <div className={styles.dashboard}>
        <Controls
          amountId={amountInput}
          deposit={this.handleDeposit}
          withdraw={this.handleWithdraw}
        />

        <Balance
          withdraw={transactionAmounts.expenses}
          deposit={transactionAmounts.income}
          balance={balance}
        />

        <TransactionHistory arrayOfTransactions={transactions} />
        <ToastContainer />
      </div>
    );
  }
}

export default Dashboard;
