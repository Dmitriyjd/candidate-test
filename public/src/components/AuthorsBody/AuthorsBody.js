import React, { Component } from 'react';
import './style.css';
import PropTypes from 'prop-types';

class AuthorsBody extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: this.props.data,
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

    formatDate(dateString){
        return dateString.slice(0, dateString.indexOf('T'));
    }

    renderAuthorCreate(){
        return(
            <div className="content__element content__element__editing content__element-create">
            <div className="content__cell">
            <input className="content__id" />
            </div>
            <div className="content__cell">
            <input className="content__firstName" />
            </div>
            <div className="content__cell">
            <input className="content__secondName" />
            </div>
            <div className="content__cell">
            <input className="content__email" />
            </div>
            <div className="content__cell">
            <input className="content__birthDate" />
            </div>
            <div className="content__cell">
            <input className="content__book" />
            </div>
            <div className="content__actionButtons">
            <button className="content__button" onClick={
        () => this.props.onAuthorCreate({
            _id: document.querySelector(`.content__element-create .content__id`).value,
            firstName: document.querySelector(`.content__element-create .content__firstName`).value,
            secondName: document.querySelector(`.content__element-create .content__secondName`).value,
            email: document.querySelector(`.content__element-create .content__email`).value,
            birthDate: +(new Date(document.querySelector(`.content__element-create .content__birthDate`).value)),
            book: document.querySelector(`.content__element-create .content__book`).value,
        })
    }>+</button>
        </div>
        </div>
    )
    }

    renderAuthor(data){
        return(
            <div key={data._id} id={'a' + data._id} className={data.editing ? "content__element content__element__editing" : "content__element"}>
    <div className="content__cell">
            <input className="content__id" defaultValue={data._id} disabled />
        </div>
        <div className="content__cell">
            <input className="content__firstName" defaultValue={data.firstName} />
        </div>
        <div className="content__cell">
            <input className="content__secondName" defaultValue={data.secondName} />
        </div>
        <div className="content__cell">
            <input className="content__email" defaultValue={data.email} />
        </div>
        <div className="content__cell">
            <input className="content__birthDate" defaultValue={this.formatDate(data.birthDate)} />
        </div>
        <div className="content__cell">
            <input className="content__book" defaultValue={data.book} />
        </div>
        <div className="content__actionButtons">
        {
            data.editing ?
    <button className="content__button" onClick={() => {
            this.toggleElementEditing(data._id);
            this.props.onAuthorUpdate({
                _id: document.querySelector(`#a${data._id} .content__id`).value,
                firstName: document.querySelector(`#a${data._id} .content__firstName`).value,
                secondName: document.querySelector(`#a${data._id} .content__secondName`).value,
                email: document.querySelector(`#a${data._id} .content__email`).value,
                birthDate: document.querySelector(`#a${data._id} .content__birthDate`).value,
                book: document.querySelector(`#a${data._id} .content__book`).value,
            })
        }}>✔</button> :
        <div>
        <button className="content__button" onClick={() => this.toggleElementEditing(data._id)}>🖉</button>
        <button className="content__button" onClick={() => this.props.onAuthorDelete(data._id)}>🗑</button>
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
                this.renderAuthorCreate()
    }
        {
            this.state.data.map((elem) => {
                return this.renderAuthor(elem);
            })
        }
    </content>
    );
    }
}

AuthorsBody.defaultProps = {
    data: [],
};

AuthorsBody.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            firstName: PropTypes.string.isRequired,
            secondName: PropTypes.string.isRequired,
            book: PropTypes.arrayOf(PropTypes.string).isRequired,
            email: PropTypes.string.isRequired,
            birthDate: PropTypes.string.isRequired
        })
    ).isRequired,
    onAuthorCreate: PropTypes.func.isRequired,
    onAuthorUpdate: PropTypes.func.isRequired,
    onAuthorDelete: PropTypes.func.isRequired
};

export default AuthorsBody;



















