import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Authors from './containers/Authors';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeButtonId: 0,
            authorsData: [],
            booksData: []
        };

        this.getBooks = this.getBooks.bind(this);
        this.updateBook = this.updateBook.bind(this);
        this.deleteBook = this.deleteBook.bind(this);
        this.createBook = this.createBook.bind(this);
    };

    componentDidMount() {
        this.getBooks();
    }



    getBooks() {
        axios.get('/api/books')
            .then((data) => {
                this.setState({ booksData: data.data.book });
            })
    }

    createBook(data) {
        axios.post('/api/books', data)
            .then(() => this.getBooks());
    }

    deleteBook(id) {
        const xhr = new XMLHttpRequest();
        xhr.open('DELETE', `/api/books/${id}`, true);
        xhr.send();
        xhr.onreadystatechange = this.getBooks();
    }

    updateBook(data) {
        axios.patch(`/api/books/${data._id}`, data)
            .then(() => this.getBooks());
    }


    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/authors">Authors</Link>
                        </li>
                        <li>
                            <Link to="/books">Books</Link>
                        </li>
                    </ul>

                    <hr />

                    <Route path="/authors" component={Authors} />
                    <Route path="/books" component={Authors} />
                </div>
            </Router>
        );
    }
}

export default App;
