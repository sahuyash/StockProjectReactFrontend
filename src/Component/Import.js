import React, { Component } from 'react'
import ReactDOM from "react-dom";
import './Import.css'
import {
    Link,
    useHistory
} from "react-router-dom";
class Import extends Component {

    constructor() {
        super();
        this.state = {
            selectedFile: null
        };
    }
    onFileChange = event => {
        this.setState({ selectedFile: event.target.files[0] });

    };
    onFileUpload = () => {
        console.log(this.state.selectedFile);
    }
    render() {
        return (
            <div >
                <h1 className="main" >Import Excel</h1>
                <div>
                    <label >Select Excel file to be uploaded:  </label>
                    <input type="file" onChange={this.onFileChange} />
                </div>
                {/*<button className="upload" onClick={this.onFileUpload}> Upload!</button>*/}
                <div className="upload">
                    <Link to="/exchange" onClick={this.onFileUpload}>Upload</Link>
                </div>

                <a className="link" href="https://github.com/vskreddy652/Genc_BatchB/blob/master/StockExchange_CaseStudy/sample_stock_data.xlsx/">Click here to download sample excel file</a>
            </div >
        )
    }
}

export default Import

