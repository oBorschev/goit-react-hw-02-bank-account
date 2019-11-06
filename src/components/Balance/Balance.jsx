import React from 'react';

const Balance = ({ withdraw, deposit, balance }) => (
  <section className="balance">
    <span>⬆️{withdraw}$</span>
    <span>⬇️{deposit}$</span>
    <span>Balance: {balance}$</span>
  </section>
);

export default Balance;
