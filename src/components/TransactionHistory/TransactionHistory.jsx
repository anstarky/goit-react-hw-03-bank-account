import React from 'react';
import T from 'prop-types';

import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
    <table className={styles.history}>
        <thead className={styles.history__head}>
            <tr>
                <th>Transaction</th>
                <th>Amount</th>
                <th>Date</th>
            </tr>
        </thead>
        <tbody>
            {items.map(({ id, type, amount, date }) => (
                <tr key={id}>
                    <td>{type}</td>
                    <td>{amount.toFixed(2)}$</td>
                    <td>{date}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

TransactionHistory.propTypes = {
    items: T.arrayOf(
        T.shape({
            id: T.string.isRequired,
            type: T.string.isRequired,
            amount: T.number.isRequired,
            date: T.string.isRequired,
        }).isRequired,
    ).isRequired,
};

export default TransactionHistory;
