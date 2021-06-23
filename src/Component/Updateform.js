import React, { Component } from 'react'
import './Updateform.css'
import axios from 'axios'
import { withRouter } from 'react-router-dom';
class Updateform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companyId: '',
            companyName: '',
            ceo: '',
            turnover: '',
            briefDescription: '',
            sector: ''
        }
    }
    componentWillMount() {
        this.getdetails();
    }
    getdetails() {
        console.log(this.props.match.params.id);
        let name = this.props.match.params.id;
        console.log(`http://localhost:8080/company/companies/findByPattern/${name}`);
        axios.get(`http://localhost:8080/company/companies/findByPattern/${name}`)
            .then(response => {
                this.setState({
                    companyId: response.data[0].companyId,
                    companyName: response.data[0].companyName,
                    ceo: response.data[0].ceo,
                    turnover: response.data[0].turnover,
                    briefDescription: response.data[0].briefDescription,
                    sector: response.data[0].sector
                }, () => {
                    console.log(this.state);

                });
            })
            .catch(error => {
                console.log(error);
            })

    }
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    SubmitHandler = e => {
        e.preventDefault();
        console.log(this.state)

        axios.put(`http://localhost:8080/company/companies/${this.state.companyId}`, this.state)
            .then(response => {
                console.log(response);

            })
            .catch(error => {
                console.log(error)

            }

            )
        alert("Data Updated");
    }
    submit = () => {

    }
    render() {
        return (
            <div className="create">
                <h1 className="main">Update Company</h1>
                <form className="form" onSubmit={this.submit} >
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
                    <button className="save" type="submit" onClick={this.SubmitHandler} >Save</button>
                </form >

            </div>
        )
    }
}

export default Updateform

