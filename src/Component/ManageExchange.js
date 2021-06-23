import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from "react-router-dom";
import './ManagaExchange.css'
import axios from 'axios'


export class ManageExchange extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stocklist: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8080/stock/stockexchanges')
            .then(response => {
                console.log(response)
                this.setState({ stocklist: response.data })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {

        const listItems = this.state.stocklist.map((d) => {
            return (
                <tr>
                    <td>{d.stockExchange}</td>
                    <td>{d.stockExchangeName}</td>
                    <td>{d.contactAddress}</td>
                    <td>{d.brief}</td>
                    <td>{d.remarks}</td>
                    {/*<Route>
                            <Link to={'/updateexc/' + d.stockExchangeName} props={d}>Edit</Link>
                        </Route>*/}

                </tr>



            )
        }
        );
        return (
            <div className="top">
                <h1 className="main">List of Exchanges</h1>
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>StockExchange</th>
                            <th>StockExchangeName</th>
                            <th>ContactAddress</th>
                            <th>Brief</th>
                            <th>Remarks</th>
                        </tr>
                    </thead>

                    <tbody>
                        {listItems}
                    </tbody>
                </table>
                <Link to='/addexchange'><button>Create New Exchange</button></Link>
                {/*<Link to='/update'>Edit</Link>*/}


            </div>
        )
    }
}

export default ManageExchange
