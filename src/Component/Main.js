import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from "react-router-dom";
import './Main.css'
import Import from './Import'
import Upload from './UploadSummary'
import Ipo from './Ipo'
import CreateCompany from './CreateCompany'
import Managecompany from './Managecompany'
import Update from './Updateform'
import CreateExchanges from './CreateExchanges'
import UpdateExchnages from './UpdateExchanges'
import ManageExchanges from './ManageExchange'
import ImportExcel from './ImportExcel'
import CreateIPO from './CreateIPO'
import Showipo from './Showipo'
function main(props) {

    const clickHandler1 = () => {
        window.location.replace('/');
    }

    return (
        <Router >
            <div className="log">
                <button onClick={clickHandler1}>Log Out</button>
            </div>
            <div className='header'>
                <Link to='/import'> <button>Import Data</button></Link>
                <Link to='/company'><button>Manage Company</button></Link>
                <Link to='/exchange'><button>Manage Exchange</button></Link>
                <Link to='/ipo'><button>Update IPO Details</button></Link>
            </div>
            <Switch>
                <Route path='/import'>
                    <ImportExcel />
                </Route>
                <Route path='/company'>
                    <Managecompany />
                </Route>
                <Route path='/exchange'>
                    <ManageExchanges
                    />
                </Route>
                <Route path='/ipo'>
                    <Showipo />
                </Route>

                <Route path='/addcompany'>
                    <CreateCompany />
                </Route>
                <Route path='/addexchange'>
                    <CreateExchanges />
                </Route>
                <Route path='/addipo'>
                    <CreateIPO />
                </Route>
                <Route path='/getipo'>
                    <Ipo />
                </Route>
                <Route exact path='/update/:id' component={Update}></Route>
                <Route exact path='/updateexc/:id' component={UpdateExchnages}></Route>
            </Switch>
        </Router >
    )

}

export default main
