import React, { Component } from 'react'
import {
    Link
} from "react-router-dom";
import './Showipo.css'
export class Showipo extends Component {
    render() {
        return (
            <div className="show">
                <Link to='/addipo'><button className="al">ADD NEW IPO</button></Link>

                <Link to='/getipo'><button className="al">List All IPO</button></Link>
            </div>
        )
    }
}

export default Showipo
