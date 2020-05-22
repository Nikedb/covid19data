import React, {useEffect} from "react";
import {Card, CardBody, Col, Row} from 'reactstrap';
import {Line} from 'react-chartjs-2';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import mapDataAsia from './mapDataAsia'

require("highcharts/modules/map")(Highcharts);
//Line chart


const SalesSummary = ({data, allData}) => {
    useEffect(() => {
        labelData()
        valuesData()
        // eslint-disable-next-line
    }, [data])

    const mapData = [
        ['in-py', allData[27]],
        ['in-ld', allData[35]],
        ['in-wb', allData[7]],
        ['in-or', allData[14]],
        ['in-br', allData[10]],
        ['in-sk', allData[33]],
        ['in-ct', allData[23]],
        ['in-tn', allData[2]],
        ['in-mp', allData[5]],
        ['in-2984', allData[2]],
        ['in-ga', allData[24]],
        ['in-nl', allData[34]],
        ['in-mn', allData[28]],
        ['in-ar', allData[31]],
        ['in-mz', allData[30]],
        ['in-tr', allData[20]],
        ['in-3464', allData[36]],
        ['in-dl', allData[3]],
        ['in-hr', allData[15]],
        ['in-ch', allData[18]],
        ['in-hp', allData[21]],
        ['in-jk', allData[13]],
        ['in-kl', allData[16]],
        ['in-ka', allData[11]],
        ['in-dn', allData[32]],
        ['in-mh', allData[0]],
        ['in-as', allData[19]],
        ['in-ap', allData[8]],
        ['in-ml', allData[29]],
        ['in-pb', allData[9]],
        ['in-rj', allData[4]],
        ['in-up', allData[6]],
        ['in-ut', allData[22]],
        ['in-jh', allData[17]],
        ['in-lk', allData[25]]
    ];

    const mapOptions = {
        title: {
            text: ""
        },

        tooltip: {
            backgroundColor: '#fff',
            borderWidth: 1,
            shadow: false,
            useHTML: true,
            padding: 10,
            pointFormat: '<span class="f32"><span class="flag {point.properties.hc-key}">' +
                '</span></span> {point.name}<br>' +
                '<span">' +
                'Confirmed: {point.value.confirmed} <br/>' +
                'Active: {point.value.active} <br/>' +
                'Death: {point.value.deaths} <br/>' +
                '</span>',

        },
        series: [
            {
                mapData: mapDataAsia,
                name: "India",
                data: mapData
            }
        ]
    };


    const labelData = () => {
        let newArray = []
        if (data) {
            for (let i = 0; i < data.districtData.length; i++) {
                newArray.push(data.districtData[i].name);
            }

        }
        return newArray
    }
    const valuesData = () => {
        let newArray = []
        if (data) {
            for (let i = 0; i < data.districtData.length; i++) {
                newArray.push(data.districtData[i].confirmed);
            }
        }
        return newArray

    }

    let lineData = {
        labels: labelData(),
        datasets: [
            {
                label: 'Confirmed',
                borderWidth: 1,
                backgroundColor: 'rgba(79,195,247,.1)',
                borderColor: 'rgb(79,195,247)',
                pointBorderColor: 'rgb(79,195,247)',
                pointBackgroundColor: 'rgb(79,195,247)',
                data: valuesData()
            }]
    };
    return (
        <div>
            <div className="container-fluid p-0">
                <div className="header-body">
                    <div className="row mb-3">
                        <div className="col-lg-6 col-xl-3">
                            <div className="card-stats mb-4 mb-xl-0 card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col"><h5
                                            className="text-uppercase text-muted mb-1 card-title">Confirmed cases</h5>
                                            <span
                                                className="h2 font-weight-bold mb-0">{data && data.confirmed}</span>
                                        </div>
                                        <div className="col-auto col">
                                            <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                                                <i className="fas fa-flag"></i></div>
                                        </div>
                                    </div>
                                    <p className="mt-3 mb-0 text-muted text-sm"><span className="text-danger mr-2"><i
                                        className="fa fa-arrow-up"></i></span> <span className="text-nowrap">Confirmed state data</span>
                                    </p></div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-3">
                            <div className="card-stats mb-4 mb-xl-0 card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col"><h5
                                            className="text-uppercase text-muted mb-1 card-title">Active cases</h5><span
                                            className="h2 font-weight-bold mb-0">{data && data.active}</span></div>
                                        <div className="col-auto col">
                                            <div
                                                className="icon icon-shape bg-warning text-white rounded-circle shadow">
                                                <i className="fas fa-chart-pie"></i></div>
                                        </div>
                                    </div>
                                    <p className="mt-3 mb-0 text-muted text-sm"><span className="text-danger mr-2"><i
                                        className="fas fa-arrow-up"></i> </span> <span className="text-nowrap">Active state data</span>
                                    </p></div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-3">
                            <div className="card-stats mb-4 mb-xl-0 card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col"><h5
                                            className="text-uppercase text-muted mb-1 card-title">Deaths</h5><span
                                            className="h2 font-weight-bold mb-0">{data && data.deaths}</span></div>
                                        <div className="col-auto col">
                                            <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                                                <i className="fas fa-users"></i></div>
                                        </div>
                                    </div>
                                    <p className="mt-3 mb-0 text-muted text-sm"><span className="text-warning mr-2"><i
                                        className="fas fa-arrow-up"></i> </span> <span className="text-nowrap">Today's death</span>
                                    </p></div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-3">
                            <div className="card-stats mb-4 mb-xl-0 card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col"><h5
                                            className="text-uppercase text-muted mb-1 card-title">Recovered</h5><span
                                            className="h2 font-weight-bold mb-0">{data && data.recovered}</span></div>
                                        <div className="col-auto col">
                                            <div
                                                className="icon icon-shape bg-success text-white rounded-circle shadow">
                                                <i
                                                    className="fas fa-percent"></i></div>
                                        </div>
                                    </div>
                                    <p className="mt-3 mb-0 text-muted text-sm"><span className="text-success mr-2"><i
                                        className="fas fa-arrow-up"></i> </span> <span className="text-nowrap">Last update today</span>
                                    </p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <Row className="mt-4">
                <Col lg="6">
                    <Card>
                        <h4 className="pt-3 pl-3 mb-0">State level summary </h4>
                        <CardBody>
                            <div className="campaign ct-charts">
                                <div>
                                    <HighchartsReact
                                        options={mapOptions}
                                        constructorType={"mapChart"}
                                        highcharts={Highcharts}
                                    />
                                </div>
                            </div>
                        </CardBody>
                    </Card>

                </Col>
                <Col lg="6" className="d-flex">
                    <Card className="d-flex w-100">
                         <h4 className="p-3">Maharashtra district summary </h4>
                        <CardBody>
                            <div className="chart-wrapper"
                                 style={{width: '100%', margin: '0 auto', height: 350}}>
                                <Line data={lineData} options={{
                                    maintainAspectRatio: false,
                                    legend: {display: false, labels: {fontFamily: "Nunito Sans"}},
                                    scales: {
                                        yAxes: [{
                                            stacked: true,
                                            gridLines: {display: false},
                                            ticks: {fontFamily: "Nunito Sans"}
                                        }],
                                        xAxes: [{
                                            gridLines: {display: false},
                                            ticks: {fontFamily: "Nunito Sans"}
                                        }]
                                    }
                                }}/>
                            </div>
                        </CardBody></Card>
                </Col>
            </Row>
        </div>
    );
}

export default SalesSummary;
