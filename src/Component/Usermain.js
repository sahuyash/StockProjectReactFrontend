import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from "react-router-dom";
import './UserMain.css'
import Getipo from './Getipo'
import CompareCompany from './CompareCompany'
import CompareSector from './CompareSector'
import Chart from './StockChart'
class Usermain extends Component {
    render() {
        return (
            <Router>
                <div className="log">
                    <button onClick={() => window.location.replace('/')}>Log Out</button>
                </div>
                <div className='header'>
                    <Link to='/getipo'><button>IPOs</button></Link>
                    <Link to='/comparecompany'><button>Compare Company</button></Link>
                    <Link to='/comparesector'><button>Others</button></Link>
                </div>
                <Switch>
                    <Route path='/getipo'>
                        <Getipo />
                    </Route>
                    <Route path='/comparecompany'>
                        <CompareCompany />
                    </Route>
                    <Route path='/comparesector'>
                        <CompareSector
                        />
                    </Route>
                    <Route path='/showchart'>
                        <Chart
                        />
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default Usermain
