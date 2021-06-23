import React, { Component } from 'react'
import axios from 'axios'
import Chart from './StockChart'
import './CompareCompany.css'
import {
    Link
} from "react-router-dom";
class CompareCompany extends Component {
    constructor() {
        super();
        this.state = {
            company1: '',
            company2: '',
            sector1: '',
            sector2: ''
        }
    }
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    SubmitHandler = e => {
        e.preventDefault();


    }
    submit = () => {
        console.log('submit');


    }
    render() {
        return (
            <div className="creat">
                <form className="for" onSubmit={this.submit}>

                    <div>
                        <label>Company1 Code</label>
                        <input type="text" name="company1" value={this.state.company1} onChange={this.changeHandler} />
                    </div>
                    <br />
                    <div>
                        <label>Company2 Code</label>
                        <input type="text" name="company2" value={this.state.company2} onChange={this.changeHandler} />
                    </div>
                    <br />
                    <Link to='/showchart'><button className="but">Submit</button></Link>

                </form >
            </div>

        )
    }
}

export default CompareCompany
