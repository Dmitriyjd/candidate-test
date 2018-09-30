import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class AuthorCreationRow extends Component {
    onAuthorCreate() {
        const authorToCreate = {
            _id: this.id.value,
            firstName: this.firstName.value,
            secondName: this.secondName.value,
            email: this.email.value,
            birthDate: this.birthDate.value,
            book: this.book.value,
        };
        this.props.onAuthorCreate(authorToCreate);
    }

    render(){
        return(
            <div className="author-creation-row">
                <input ref={ref => this.id = ref}/>
                <input ref={ref => this.firstName = ref}/>
                <input ref={ref => this.secondName = ref}/>
                <input ref={ref => this.email = ref}/>
                <input ref={ref => this.birthDate = ref}/>
                <input ref={ref => this.book = ref}/>
                <div className="content__actionButtons">
                    <button
                        className="content__button"
                        onClick={() => this.onAuthorCreate()}
                    >
                        +
                    </button>
                </div>
            </div>
        );
    }
}

AuthorCreationRow.propTypes = {
    onAuthorCreate: PropTypes.func.isRequired,
};

export default AuthorCreationRow;



















