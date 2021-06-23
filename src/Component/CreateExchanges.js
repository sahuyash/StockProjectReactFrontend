import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom';
import './CreateExchange.css'

export class CreateExchanges extends Component {
    constructor() {
        super();
        this.state = {
            stockExchange: '',
            stockExchangeName: '',
            brief: '',
            contactAddress: '',
            remarks: ''
        }
    }
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    SubmitHandler = e => {
        e.preventDefault();
        console.log(this.state)
        axios.post('http://localhost:8080/stock/stockexchanges/add', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            }

            )
        alert("Data Upload");
    }
    submit = () => {
        this.props.history.push('/company');
    }
    render() {
        return (
            <div className="create">
                <h1 className="main">Create New Exchange</h1>
                <form className="form" onSubmit={this.submit}>
                    <div>
                        <label>Stock Exchange</label>
                        <input type="text" name="stockExchange" value={this.state.stockExchange} onChange={this.changeHandler} />
                    </div>
                    <br />
                    <div>
                        <label>Stock Exchange Name</label>
                        <input type="text" name="stockExchangeName" value={this.state.stockExchangeName} onChange={this.changeHandler} />
                    </div>
                    <br />
                    <div>
                        <label>Brief Description</label>
                        <input type="text" name="brief" value={this.state.brief} onChange={this.changeHandler} />
                    </div>
                    <br />
                    <div>
                        <label>Contact Address</label>
                        <input type="text" name="contactAddress" value={this.state.contactAddress} onChange={this.changeHandler} />
                    </div>
                    <br />

                    <div>
                        <label>Remarks</label>
                        <input type="text" name="remarks" value={this.state.remarks} onChange={this.changeHandler} />
                    </div>
                    <br />
                    <button className="save" type="submit" onClick={this.SubmitHandler}>Save</button>
                </form >
            </div>
        )
    }
}

export default CreateExchanges
