import React, { Component } from 'react'
import './CreateIPO.css'
import axios from 'axios'
import { withRouter } from 'react-router-dom';
class CreateIPO extends Component {
    constructor() {
        super();
        this.state = {
            companyName: '',
            pricePerShare: '',
            totalShares: '',
            date: '',
            remarks: ''

        }
    }
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    SubmitHandler = e => {
        e.preventDefault();
        console.log(this.state)
        axios.post('http://localhost:8080/ipoDetails', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            }

            )
        {/*this.props.history.push('/ipo');*/ }
        alert("Data Upload");
    }
    submit = () => {
        this.props.history.push('/ipo');
    }
    render() {
        return (
            <div className="create">
                <h1 className="main">Create New IPO</h1>
                <form className="form" onSubmit={this.submit}>

                    <div>
                        <label>Company Name</label>
                        <input type="text" name="companyName" value={this.state.companyName} onChange={this.changeHandler} />
                    </div>
                    <br />
                    <div>
                        <label>PricePerShare</label>
                        <input type="number" name="pricePerShare" value={this.state.pricePerShare} onChange={this.changeHandler} />
                    </div>
                    <br />
                    <div>
                        <label>Total Shares</label>
                        <input type="number" name="totalShares" value={this.state.totalShares} onChange={this.changeHandler} />
                    </div>
                    <br />

                    <div>
                        <label>Date</label>
                        <input type="text" name="date" value={this.state.date} onChange={this.changeHandler} />
                    </div>
                    <br />
                    <div>
                        <label>Remarks</label>
                        <input type="text" name="remarks" value={this.state.remarks} onChange={this.changeHandler} />
                    </div>
                    <button className="save" type="submit" onClick={this.SubmitHandler}>Save</button>
                </form >
            </div>
        )
    }
}

export default CreateIPO
