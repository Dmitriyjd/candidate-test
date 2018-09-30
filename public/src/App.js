import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Authors from './containers/Authors';
import Books from './containers/Books';
import './App.css';

class App extends Component {
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
                    <Route path="/books" component={Books} />
                </div>
            </Router>
        );
    }
}

export default App;
