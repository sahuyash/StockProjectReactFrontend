import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect
} from "react-router-dom";


class Loginpage extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            passwordch: ''
        }
    }
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    SubmitHandler = e => {
        e.preventDefault();

        {/*console.log(this.state)
        axios.post('http://localhost:3000/admin', this.state)
            .then(response => {
                console.log(response);
                

            })
            .catch(error => {
                console.log(error)
            }

        )*/}

        console.log('submithand');

        console.log(this.state.username);
        if (this.state.username == 'admin') {
            this.props.history.push("/admin");
            {/*window.location.replace('/admin');*/ }
            this.props.setIsLoggedIn(true);
        }
        else {

            this.props.setIsAdmin(false);
            this.props.history.push("/user");
            this.props.setIsLoggedIn(true);
        }




    }
    submit = () => {
        console.log('submit');


    }
    render() {
        return (
            <Router>
                <div className="create">
                    <h1 className="main">Log In</h1>
                    <form className="form" onSubmit={this.submit}>

                        <div>
                            <label>User Name</label>
                            <input type="text" name="username" value={this.state.username} onChange={this.changeHandler} />
                        </div>
                        <br />
                        <div>
                            <label>Password</label>
                            <input type="password" name="passwordch" value={this.state.passwordch} onChange={this.changeHandler} />
                        </div>
                        <button className="save" type="submit" onClick={this.SubmitHandler}>Submit</button>

                    </form >
                </div>



            </Router>

        )
    }
}

export default withRouter(Loginpage);