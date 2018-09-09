import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/header/Header';
import AuthorsBody from './components/AuthorsBody/AuthorsBody';
import BooksBody from './components/BooksBody/BooksBody';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeButtonId: 0,
            authorsData: [],
            booksData: []
        };

        this.getAuthors = this.getAuthors.bind(this);
        this.updateAuthor = this.updateAuthor.bind(this);
        this.deleteAuthor = this.deleteAuthor.bind(this);
        this.createAuthor = this.createAuthor.bind(this);

        this.getBooks = this.getBooks.bind(this);
        this.updateBook = this.updateBook.bind(this);
        this.deleteBook = this.deleteBook.bind(this);
        this.createBook = this.createBook.bind(this);
    };

    componentDidMount() {
        this.getAuthors();
        this.getBooks();
    }

    getAuthors() {
        axios.get('/api/authors')
            .then((data) => {
                this.setState({ authorsData: data.data.author });
            })
    }

    createAuthor(data) {
        axios.post('/api/authors', data)
            .then(() => this.getAuthors());
    }

    deleteAuthor(id) {
        const xhr = new XMLHttpRequest();
        xhr.open('DELETE', `/api/authors/${id}`, true);
        xhr.send();
        xhr.onreadystatechange = this.getAuthors;
    }

    updateAuthor(data) {
        axios.patch(`/api/authors/${data._id}`, data)
            .then(() => this.getAuthors());
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
        console.log(this.state);
        return (
            <div className="App">
            <Header
        ActiveButtonId={this.state.activeButtonId}
        OnButtonClick={(id) => this.setState({activeButtonId: id})}
        />
        {
            this.state.activeButtonId === 0
                ? <AuthorsBody
            data={this.state.authorsData}
            onAuthorCreate={this.createAuthor}
            onAuthorUpdate={this.updateAuthor}
            onAuthorDelete={this.deleteAuthor}
            />
        : <BooksBody
            data={this.state.booksData}
            onBookCreate={this.createBook}
            onBookUpdate={this.updateBook}
            onBookDelete={this.deleteBook}
            />
        }

    </div>
    );
    }
}

export default App;
