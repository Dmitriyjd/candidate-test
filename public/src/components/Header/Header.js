import React, { Component } from 'react';
import './style.css';
import PropTypes from 'prop-types';

class Header extends Component {
    render() {
        return (
            <header className="header">
            <button
        onClick={() => this.props.OnButtonClick(0)}
        className={this.props.ActiveButtonId === 0
            ? "header__button header__button__active"
            : "header__button"}
    >
        Authors
        </button>
        <button
        onClick={() => this.props.OnButtonClick(1)}
        className={this.props.ActiveButtonId === 1
            ? "header__button header__button__active"
            : "header__button"}
    >
        Books
        </button>
        </header>
    );
    }
}

Header.defaultProps = {
    ActiveButtonId: 0
};
Header.propTypes = {
    OnButtonClick: PropTypes.func,
    ActiveButtonId: PropTypes.number
};

export default Header;