import React, { Component } from 'react';

import styles from './Controls.module.css';
import notyfy from '../../services/notify';

const typeOfOperation = {
    DEPOSIT: 'Deposit',
    WITHDROWAL: 'Withdrawal',
};

class Controls extends Component {
    state = {
        amount: '',
    };

    handleInputChange = e => {
        this.setState({
            amount: Number(e.currentTarget.value),
        });
    };

    validInput = (e) => {
        e.preventDefault();
        this.setState({ amount: '' });

        if (this.state.amount <= 0) {
            notyfy.enterCorrectAmount();
            return;
        }

        if ((this.state.amount > this.props.onBalance) && (e.currentTarget.name === 'Withdraw')) {
            notyfy.notEnoughAmount();
            return;
        }

        if (e.currentTarget.name === 'Deposit') {
            this.props.onDeposit(this.state.amount, typeOfOperation.DEPOSIT);
            return;
        }

        this.props.onWithdraw(this.state.amount, typeOfOperation.WITHDROWAL);
    };


    render() {
        const { amount } = this.state;
        return (
            <section className={styles.controls}>
                <input
                    type="number"
                    name="amount"
                    className={styles.controls__input}
                    value={amount}
                    onChange={this.handleInputChange}
                />
                <button
                    type="button"
                    name="Deposit"
                    className={styles.controls__button}
                    onClick={this.validInput}
                >
                    Deposit
                </button>
                <button
                    type="button"
                    name="Withdraw"
                    className={styles.controls__button}
                    onClick={this.validInput}
                >
                    Withdraw
                </button>
            </section>
        )
    }
};

export default Controls;
