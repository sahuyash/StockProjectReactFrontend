import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import axios from "axios";
import './Comparecom.css'

const Stockvstime = (props) => {
    const [chartData, setChartData] = useState({});
    const [employeeSalary, setEmployeeSalary] = useState([]);
    const [employeeAge, setEmployeeAge] = useState([]);

    const chart = () => {
        let empSal = [];
        let empAge = [];
        let price2 = [];
        let date2 = [];
        axios
            .get(`http://localhost:8080/stock/500112/BSE`)
            .then(res => {
                console.log(res);
                for (const dataObj of res.data) {
                    price2.push(parseInt(dataObj.currentPrice));
                    date2.push(parseInt(dataObj.date));
                    console.log(dataObj);
                }
            })
        axios
            .get("http://localhost:8080/stock/500113/BSE")
            .then(res => {
                console.log(res);
                for (const dataObj of res.data) {
                    empSal.push(parseInt(dataObj.currentPrice));
                    empAge.push(parseInt(dataObj.date));
                    console.log(dataObj);
                }


                {/* axios
            .get("http://localhost:8080/stock/500113/BSE")
            .then(res => {
                console.log(res);
                for (const dataObj of res.data) {
                    empSal.push(parseInt(dataObj.currentPrice));
                    empAge.push(parseInt(dataObj.date));
                    console.log(dataObj);
                }

            */}




                setChartData({
                    labels: empAge,
                    datasets: [
                        {
                            label: "Company 1",
                            data: empSal,
                            backgroundColor: ["rgba(75, 192, 192, 0.6)"],
                            borderWidth: 4
                        },
                        {
                            label: "company 2",
                            data: price2,
                            backgroundColor: ["rgba(75, 192, 192, 0.6)"],
                            borderWidth: 4

                        }
                    ]


                }
                );
            })
            .catch(err => {
                console.log(err);
            });
        console.log(empSal, empAge);
    };

    useEffect(() => {
        chart();
    }, []);
    return (
        <div className="App">
            <h1 className="main">Stockprice vs Date</h1>
            <div className="adus">
                <Line
                    data={chartData}
                    options={{
                        responsive: true,
                        // maintainAspectRatio:false,
                        title: { text: "THICCNESS SCALE", display: true },
                        scales: {
                            yAxes: [
                                {
                                    ticks: {
                                        autoSkip: true,
                                        maxTicksLimit: 10,
                                        beginAtZero: true
                                    },
                                    gridLines: {
                                        display: false
                                    }
                                }
                            ],
                            xAxes: [
                                {
                                    gridLines: {
                                        display: false
                                    }
                                }
                            ]
                        }
                    }}


                />


            </div>
        </div>
    );
};

export default Stockvstime;