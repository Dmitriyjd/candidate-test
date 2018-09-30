import React, { Component } from 'react';
import axios from 'axios';
import AuthorCreationRow from '../../components/AuthorCreationRow';
import AuthorRow from '../../components/AuthorRow';

class Authors extends Component {
    constructor(props) {
      super(props);
      this.state = {
          data: [],
      };
    }

    componentDidMount() {
        this.getAuthors();
    }

    getAuthors() {
        return axios.get('/api/authors')
            .then((data) => {
                this.setState({ data: data.data.authors });
            })
    }

    createAuthor(data) {
        return axios.post('/api/authors', data)
            .then(() => this.getAuthors());
    }

    deleteAuthor(id) {
        return axios.delete(`/api/authors/${id}`)
            .then(() => this.getAuthors());
    }

    updateAuthor(data) {
        axios.patch(`/api/authors/${data.id}`, data)
            .then(() => this.getAuthors());
    }

    render() {
        return (
            <content className="content">
                <AuthorCreationRow
                    onAuthorCreate={(data) => this.createAuthor(data)}
                />
                {
                    this.state.data.map((author) => {
                        return (
                            <AuthorRow
                                key={author._id}
                                data={author}
                                onAuthorUpdate={(data) => this.updateAuthor(data)}
                                onAuthorDelete={(data) => this.deleteAuthor(data)}
                            />
                        )
                    })
                }
            </content>
    )}
}

export default Authors;



















