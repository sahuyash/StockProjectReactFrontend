import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from "react-router-dom";
import CreateCompany from './CreateCompany'
import './Managecompany.css'
import axios from 'axios'
import Update from './Updateform'
class Managecompany extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companylist: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8080/company/companies')
            .then(response => {
                console.log(response)
                this.setState({ companylist: response.data })
            })
            .catch(error => {
                console.log(error)
            })
    }
    UpdateHandler = (e) => {
        // e.preventDefault()
        console.log()
        const url = `http://localhost:8080/company/companies/${this.state.companyName}'`
        console.log(url)
        {/*}  axios.post('http://localhost:8080/company/companies/', this.state.companylist)
            .then(response => {
                console.log(response)
            })
            .catch(error => {+ { this.state.companylist.companyId }
                console.log(error)
            }

        ) */}
    }
    render() {
        /* const companylist = [
             {
                 companyName: "samsung",
                 ceoname: "ceo",
                 brief: "Mobile Company",
                 sector: "BSE"
             },
             {
                 companyName: "apple",
                 ceoname: "ceo",
                 brief: "mac",
                 sector: "BSE/NSE"
             }
 
         ];*/
        const listItems = this.state.companylist.map((d) => {
            return (


                <tr>
                    <td>{d.companyId}</td>
                    <td>{d.companyName}</td>
                    <td>{d.turnover}</td>
                    <td>{d.ceo}</td>
                    <td>{d.briefDescription}</td>
                    <td>{d.sector}</td>


                    <Route>
                        <td>
                            <Link to={'/update/' + d.companyName} props={d}><button>Edit</button></Link>
                        </td>
                    </Route>
                </tr>


            )
        }
        );
        return (
            <div className="top">
                <h1 className="main">List of Companies</h1>
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>CompanyId</th>
                            <th>CompanyName</th>
                            <th>Turnover</th>
                            <th>CEO/BOD</th>
                            <th>BriefDescription</th>
                            <th>Sector</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listItems}
                    </tbody>
                </table>
                <Link to='/addcompany'><button>Create New Company</button></Link>
                {/*<Link to='/update'>Edit</Link>*/}

            </div >
        )
    }
}

export default Managecompany
