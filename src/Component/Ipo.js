import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from "react-router-dom";
import CreateIPO from './CreateIPO'
import './Ipo.css'
import axios from 'axios'

class Ipo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ipolist: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8080/allipo')
            .then(response => {
                console.log(response)
                this.setState({ ipolist: response.data })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {

        const listItems = this.state.ipolist.map((d) => {
            return (

                <tr>
                    <td>{d.companyName}</td>
                    <td>{d.pricePerShare}</td>
                    <td>{d.totalShares}</td>
                    <td>{d.date}</td>
                    <td>{d.remarks}</td>
                </tr>



            )
        }
        );
        return (
            <div className="top">
                <h1 className="main">IPO Details</h1>
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>Company Name</th>
                            <th>Price Per Share</th>
                            <th>Total Share</th>
                            <th>Date</th>
                            <th>Remarks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listItems}
                    </tbody>
                </table>
                <Link to='/addipo'><button>ADD NEW IPO</button></Link>
                {/*<Link to='/update'>Edit</Link>*/}

            </div>
        )
    }
}

export default Ipo


