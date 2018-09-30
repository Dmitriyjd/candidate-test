import React, { Component } from 'react';
import axios from 'axios';
import BookCreationRow from '../../components/BookCreationRow';
import BookRow from '../../components/BookRow';

class Books extends Component {
    constructor(props) {
      super(props);
      this.state = {
          data: [],
      };
    }

    componentDidMount() {
        this.getBooks();
    }

    getBooks() {
        return axios.get('/api/books')
            .then((data) => {
                this.setState({ data: data.data.books });
            })
    }

    createBook(data) {
        return axios.post('/api/books', data)
            .then(() => this.getBooks());
    }

    deleteBook(id) {
        return axios.delete(`/api/books/${id}`)
            .then(() => this.getBooks());
    }

    updateBook(data) {
        axios.patch(`/api/books/${data.id}`, data)
            .then(() => this.getBooks());
    }

    render() {
        return (
            <content className="content">
                <BookCreationRow
                    onBookCreate={(data) => this.createBook(data)}
                />
                {
                    this.state.data.map((book) => {
                        return (
                            <BookRow
                                key={book._id}
                                data={book}
                                onBookUpdate={(data) => this.updateBook(data)}
                                onBookDelete={(data) => this.deleteBook(data)}
                            />
                        )
                    })
                }
            </content>
    )}
}

export default Books;



















