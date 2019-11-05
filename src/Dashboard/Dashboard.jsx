import React, { Component } from 'react';
import Transaction from '../transactions/transactions';
import shortid from 'shortid';

class Dashboard extends Component {
  state = {
    transactions: [],
    balance: 0,
    amount: 0,
    income: 0,
    expenses: 0,
  };
  generateIds = {
    amountInput: shortid.generate(),
    transactionId: shortid.generate(),
  };
  handleInputAmount = e => {
    this.setState({ amount: Number(e.currentTarget.value) });
  };
  handleDeposit = () => {
    Transaction.amount = this.state.amount;
    Transaction.type = 'deposit';
    Transaction.id = shortid.generate();
    Transaction.date = new Date().toLocaleDateString();
    this.setState(state => ({
      balance: state.balance + this.state.amount,
      income: this.state.amount,
      transactions: [...state.transactions, Transaction],
    }));
    // один из вариантов
    // this.state.transactions.push(Transaction);
    // this.setState(state => {
    //   Transaction.amount = this.state.amount;
    //   Transaction.type = 'deposit';
    //   Transaction.id = shortid.generate();
    //   Transaction.date = new Date().toLocaleDateString();
    //   console.log(Transaction);
    //   return {
    //     balance: state.balance + this.state.amount,
    //     income: this.state.amount,
    //     transactions: [...state.transactions, Transaction],
    //   };
    // });
  };
  handleWithdraw = () => {
    if (this.state.amount > this.state.balance) {
      console.log('На счету недостаточно средств для проведения операции!');
      return;
    } else if (this.state.amount <= 0) {
      console.log('Введите сумму для проведения операции!');
    } else {
      Transaction.amount = this.state.expenses;
      Transaction.type = 'withdraw';
      Transaction.id = shortid.generate();
      Transaction.date = new Date().toLocaleDateString();
      this.setState(state => ({
        balance: state.balance - this.state.amount,
        expenses: this.state.amount,
        transactions: [...Transaction],
      }));
      console.log(Transaction);
    }
  };
  render() {
    const { transactions, balance, amount, income, expenses } = this.state;
    const { amountInput } = this.generateIds;

    return (
      <div className="dashboard">
        <section className="controls">
          <input
            type="number"
            name="amount"
            id={amountInput}
            onChange={this.handleInputAmount}
          />
          <button type="button" onClick={this.handleDeposit}>
            Deposit
          </button>
          <button type="button" onClick={this.handleWithdraw}>
            Withdraw
          </button>
        </section>

        <section className="balance">
          <span>⬆️{income}$</span>
          <span>⬇️{expenses}$</span>
          <span>Balance: {balance}$</span>
        </section>

        <table className="history">
          <thead>
            <tr>
              <th>Transaction</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {/* {transactions.map(item => {
              const { id, type, amount, date } = item;
              return (
                <tr key={id}>
                  <td>{type}</td>
                  <td>{amount}</td>
                  <td>{date}</td>
                </tr>
              );
            })} */}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Dashboard;
