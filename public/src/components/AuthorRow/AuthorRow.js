import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AuthorRow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false,
        }
    }

    onAuthorUpdate() {
        const authorToUpdate = {
            id: this.id.value,
            firstName: this.firstName.value,
            secondName: this.secondName.value,
            email: this.email.value,
            birthDate: this.birthDate.value,
            book: this.book.value,
        };
        this.props.onAuthorUpdate(authorToUpdate);
        this.toggleAuthorEditing();
    }

    onAuthorDelete() {
        this.props.onAuthorDelete(this.props.data._id);
    }

    toggleAuthorEditing() {
        this.setState({ editing: !this.state.editing });
    }

    render(){
        const { data } = this.props;
        return(
            <div>
                <input ref={ref => this.id = ref} defaultValue={data._id} disabled />
                <input
                    ref={ref => this.firstName = ref}
                    disabled={!this.state.editing}
                    defaultValue={data.firstName}
                />
                <input
                    ref={ref => this.secondName = ref}
                    disabled={!this.state.editing}
                    defaultValue={data.secondName}
                />
                <input
                    ref={ref => this.email = ref}
                    disabled={!this.state.editing}
                    defaultValue={data.email}
                />
                <input
                    ref={ref => this.birthDate = ref}
                    disabled={!this.state.editing}
                    defaultValue={data.birthDate}
                />
                <input
                    ref={ref => this.book = ref}
                    disabled={!this.state.editing}
                    defaultValue={data.book}
                />
                <div className="content__actionButtons">
                    {
                        this.state.editing
                            ? <button
                                onClick={() => this.onAuthorUpdate()}
                            >
                                ✔
                            </button>
                            : <div>
                                <button
                                    onClick={() => this.toggleAuthorEditing()}
                                >
                                    🖉
                                </button>
                                <button
                                    onClick={() => this.onAuthorDelete()}
                                >
                                    X
                                </button>
                            </div>
                    }
                </div>
            </div>
        );
    }
}

AuthorRow.propTypes = {
    data: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        firstName: PropTypes.string.isRequired,
        secondName: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        birthDate: PropTypes.string.isRequired,
        book: PropTypes.string.isRequired,
    }),
    onAuthorUpdate: PropTypes.func.isRequired,
    onAuthorDelete: PropTypes.func.isRequired,
};

export default AuthorRow;



















