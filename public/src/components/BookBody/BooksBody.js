import React, { Component } from 'react';
import './style.css';
import PropTypes from 'prop-types';

class BooksBody extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: props.data,
        };
    }

    componentWillReceiveProps(newProps){
        this.setState( {
            data: newProps.data
        });
    }

    toggleElementEditing(id){
        const newData = this.state.data.map((elem) =>{
                if(id === elem._id){
                    return {...elem, editing: !elem.editing}
                }

                return elem;
            }
        );
        this.setState({
            data: newData
        });
    }

    renderBookCreate(){
        return(
            <div className="content__element content__element__editing content__element-create">
            <div className="content__cell">
            <input className="content__id" />
            </div>
            <div className="content__cell">
            <input className="content__name" />
            </div>
            <div className="content__cell">
            <input className="content__publishing" />
            </div>
            <div className="content__cell">
            <input className="content__ebook" />
            </div>
            <div className="content__cell">
            <input className="content__year" />
            </div>
            <div className="content__cell">
            <input className="content__isbn" />
            </div>
            <div className="content__cell">
            <input className="content__pages" />
            </div>
            <div className="content__cell">
            <input className="content__author" />
            </div>
            <div className="content__actionButtons">
            <button className="content__button" onClick={
        () => this.props.onBookCreate({
            _id: document.querySelector(`.content__element-create .content__id`).value,
            name: document.querySelector(`.content__element-create .content__name`).value,
            publishing: document.querySelector(`.content__element-create .content__publishing`).value,
            ebook: document.querySelector(`.content__element-create .content__ebook`).value,
            year: document.querySelector(`.content__element-create .content__year`).value,
            isbn: document.querySelector(`.content__element-create .content__isbn`).value,
            pages: document.querySelector(`.content__element-create .content__pages`).value,
            author: document.querySelector(`.content__element-create .content__author`).value,
        })
    }>+</button>
        </div>
        </div>
    )
    }

    renderBook(data){
        return(
            <div key={data._id} id={'a' + data._id} className={data.editing
            ? "content__element content__element__editing"
            : "content__element"}>
    <div className="content__cell">
            <input className="content__id" defaultValue={data._id} disabled />
        </div>
        <div className="content__cell">
            <input className="content__name" defaultValue={data.name} />
        </div>
        <div className="content__cell">
            <input className="content__publishing" defaultValue={data.publishing} />
        </div>
        <div className="content__cell">
            <input className="content__ebook" defaultValue={data.ebook} />
        </div>
        <div className="content__cell">
            <input className="content__year" defaultValue={data.year} />
        </div>
        <div className="content__cell">
            <input className="content__isbn" defaultValue={data.isbn} />
        </div>
        <div className="content__cell">
            <input className="content__pages" defaultValue={data.pages} />
        </div>
        <div className="content__cell">
            <input className="content__author" defaultValue={data.author} />
        </div>
        <div className="content__actionButtons">
        {
            data.editing ?
    <button className="content__button" onClick={() => {
            this.toggleElementEditing(data._id);
            this.props.onBookCreate({
                _id: document.querySelector(`.content__element-create .content__id`).value,
                name: document.querySelector(`.content__element-create .content__name`).value,
                publishing: document.querySelector(`.content__element-create .content__publishing`).value,
                ebook: document.querySelector(`.content__element-create .content__ebook`).value,
                year: document.querySelector(`.content__element-create .content__year`).value,
                isbn: document.querySelector(`.content__element-create .content__isbn`).value,
                pages: document.querySelector(`.content__element-create .content__pages`).value,
                author: document.querySelector(`.content__element-create .content__author`).value,
            })
        }}>✔</button> :
        <div>
        <button className="content__button" onClick={() => this.toggleElementEditing(data._id)}>🖉</button>
        <button className="content__button" onClick={() => this.props.onBookDelete(data._id)}>🗑</button>
        </div>
    }
    </div>
        </div>
    )
    }

    render() {
        return (
            <content className="content">
            {
                this.renderBookCreate()
    }
        {
            this.state.data.map((elem) => {
                return this.renderBook(elem);
            })
        }
    </content>
    );
    }
}

BooksBody.defaultProps = {
    data: [],
};

BooksBody.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            publishing: PropTypes.string.isRequired,
            ebook: PropTypes.string.isRequired,
            year: PropTypes.string.isRequired,
            isbn: PropTypes.string.isRequired,
            pages: PropTypes.string.isRequired,
            author: PropTypes.arrayOf(PropTypes.string).isRequired
        })
    ).isRequired,
    onBookCreate: PropTypes.func.isRequired,
    onBookUpdate: PropTypes.func.isRequired,
    onBookDelete: PropTypes.func.isRequired
};

export default BooksBody;