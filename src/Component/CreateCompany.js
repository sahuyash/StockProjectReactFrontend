import React, { Component } from 'react'
import './CreateCompany.css'
import axios from 'axios'
import { withRouter } from 'react-router-dom';
class CreateCompany extends Component {
    constructor() {
        super();
        this.state = {
            companyId: '',
            companyName: '',
            ceo: '',
            turnover: '',
            briefDescription: '',
            sector: ''
        }
    }
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    SubmitHandler = e => {
        e.preventDefault();
        console.log(this.state)
        axios.post('http://localhost:8080/company/companies', this.state)
            .then(response => {
                console.log(response)
                this.props.history.push('/company');
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
                <h1 className="main">Create New Company</h1>
                <form className="form" onSubmit={this.submit}>
                    <div>
                        <label>Company ID</label>
                        <input type="text" name="companyId" value={this.state.companyId} onChange={this.changeHandler} />
                    </div>
                    <br />
                    <div>
                        <label>Company Name</label>
                        <input type="text" name="companyName" value={this.state.companyName} onChange={this.changeHandler} />
                    </div>
                    <br />
                    <div>
                        <label>CEO Name</label>
                        <input type="text" name="ceo" value={this.state.ceo} onChange={this.changeHandler} />
                    </div>
                    <br />
                    <div>
                        <label>TurnOver</label>
                        <input type="number" name="turnover" value={this.state.turnover} onChange={this.changeHandler} />
                    </div>
                    <br />

                    <div>
                        <label>Brief Description</label>
                        <input type="text" name="briefDescription" value={this.state.briefDescription} onChange={this.changeHandler} />
                    </div>
                    <br />
                    <div>
                        <label>Sector</label>
                        <input type="text" name="sector" value={this.state.sector} onChange={this.changeHandler} />
                    </div>
                    <button className="save" type="submit" onClick={this.SubmitHandler}>Save</button>
                </form >
            </div>
        )
    }
}

export default CreateCompany
