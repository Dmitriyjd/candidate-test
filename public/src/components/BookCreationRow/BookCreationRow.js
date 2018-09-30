import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BookCreationRow extends Component {
    onBookCreate() {
        const bookToCreate = {
            _id: this.id.value,
            name: this.name.value,
            author: this.author.value,
            publishing: this.publishing.value,
            ebook: this.ebook.value,
            year: this.year.value,
            isbn: this.isbn.value,
            pages: this.pages.value,
        };
        this.props.onBookCreate(bookToCreate);
    }

    render(){
        return(
            <div className="book-creation-row">
                <input ref={ref => this.id = ref} />
                <input ref={ref => this.name = ref} />
                <input ref={ref => this.publishing = ref} />
                <input ref={ref => this.ebook = ref} />
                <input ref={ref => this.year = ref} />
                <input ref={ref => this.isbn = ref} />
                <input ref={ref => this.pages = ref} />
                <input ref={ref => this.author = ref} />
                <div className="content__actionButtons">
                    <button
                        className="content__button"
                        onClick={() => this.onBookCreate()}
                    >
                        +
                    </button>
                </div>
            </div>
        );
    }
}

BookCreationRow.propTypes = {
    onBookCreate: PropTypes.func.isRequired,
};

export default BookCreationRow;



















