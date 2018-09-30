import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BookRow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false,
        }
    }

    onBookUpdate() {
        const bookToUpdate = {
            id: this.id.value,
            name: this.name.value,
            author: this.author.value,
            publishing: this.publishing.value,
            ebook: this.ebook.value,
            year: this.year.value,
            isbn: this.isbn.value,
            pages: this.pages.value,
        };
        this.props.onBookUpdate(bookToUpdate);
        this.toggleBookEditing();
    }

    onBookDelete() {
        this.props.onBookDelete(this.props.data._id);
    }

    toggleBookEditing() {
        this.setState({ editing: !this.state.editing });
    }

    render(){
        const { data } = this.props;
        return(
            <div>
                <input ref={ref => this.id = ref} defaultValue={data._id} disabled />
                <input
                    ref={ref => this.name = ref}
                    disabled={!this.state.editing}
                    defaultValue={data.name}
                />
                <input
                    ref={ref => this.publishing = ref}
                    disabled={!this.state.editing}
                    defaultValue={data.publishing}
                />
                <input
                    ref={ref => this.ebook = ref}
                    disabled={!this.state.editing}
                    defaultValue={data.ebook}
                />
                <input
                    ref={ref => this.year = ref}
                    disabled={!this.state.editing}
                    defaultValue={data.year}
                />
                <input
                    ref={ref => this.isbn = ref}
                    disabled={!this.state.editing}
                    defaultValue={data.isbn}
                />
                <input
                    ref={ref => this.pages = ref}
                    disabled={!this.state.editing}
                    defaultValue={data.pages}
                />
                <input
                    ref={ref => this.author = ref}
                    disabled={!this.state.editing}
                    defaultValue={data.author}
                />
                <div>
                    {
                        this.state.editing
                            ? <button
                                onClick={() => this.onBookUpdate()}
                            >
                                ✔
                            </button>
                            : <div>
                                <button
                                    onClick={() => this.toggleBookEditing()}
                                >
                                    🖉
                                </button>
                                <button
                                    onClick={() => this.onBookDelete()}
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

BookRow.propTypes = {
    data: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        publishing: PropTypes.string.isRequired,
        ebook: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired,
        isbn: PropTypes.string.isRequired,
        pages: PropTypes.string.isRequired,
    }).isRequired,
    onBookUpdate: PropTypes.func.isRequired,
    onBookDelete: PropTypes.func.isRequired,
};

export default BookRow;



















