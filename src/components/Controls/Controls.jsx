import React from 'react';

const Controls = ({ amount, onChange, deposit, withdraw }) => (
  <section className="controls">
    <input type="number" name="amount" id={amount} onChange={onChange} />
    <button type="button" onClick={deposit}>
      Deposit
    </button>
    <button type="button" onClick={withdraw}>
      Withdraw
    </button>
  </section>
);

export default Controls;
