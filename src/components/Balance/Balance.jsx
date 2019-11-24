import React from 'react';
import T from 'prop-types';

import styles from './Balance.module.css';

const Balance = ({ income, expenses, balance }) => (
    <section className={styles.balance}>
        <span className={styles.balance__txt}>️{income.toFixed(2)}$</span>
        <span className={styles.balance__txt}>{expenses.toFixed(2)}$</span>
        <span className={styles.balance__txt}>Balance: {balance.toFixed(2)}$</span>
    </section>

);

Balance.propTypes = {
    income: T.number.isRequired,
    expenses: T.number.isRequired,
    balance: T.number.isRequired,
};

export default Balance;
