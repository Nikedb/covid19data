import React, {useEffect} from "react";
import {Card, CardBody, CardTitle, Col, Row} from 'reactstrap';
import {Line} from 'react-chartjs-2';

//Line chart


const SalesSummary = ({data}) => {

    useEffect(() => {
        labelData()
        valuesData()
        // eslint-disable-next-line
    }, [data])

    // console.log(data && data.districtData[0].name);

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
    console.log(data)

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
                                            className="text-uppercase text-muted mb-1 card-title">Confirmed cases</h5><span
                                            className="h2 font-weight-bold mb-0">{data && data.confirmed}</span></div>
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
                                        className="fas fa-arrow-down"></i> </span> <span className="text-nowrap">Today's Death</span>
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
                                            <div className="icon icon-shape bg-success text-white rounded-circle shadow"><i
                                                className="fas fa-percent"></i></div>
                                        </div>
                                    </div>
                                    <p className="mt-3 mb-0 text-muted text-sm"><span className="text-success mr-2"><i
                                        className="fas fa-arrow-up"></i> </span> <span className="text-nowrap">Last update Today</span>
                                    </p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Card>
                <CardBody>
                    <div className="d-flex align-items-center">
                        <div>
                            <CardTitle>District Summary</CardTitle>
                        </div>
                    </div>
                    <Row>
                        <Col lg="12">
                            <div className="campaign ct-charts">
                                <div className="chart-wrapper" style={{width: '100%', margin: '0 auto', height: 250}}>
                                    <Line data={lineData} options={{
                                        maintainAspectRatio: false,
                                        legend: {display: false, labels: {fontFamily: "Nunito Sans"}},
                                        scales: {
                                            yAxes: [{
                                                stacked: true,
                                                gridLines: {display: false},
                                                ticks: {fontFamily: "Nunito Sans"}
                                            }],
                                            xAxes: [{gridLines: {display: false}, ticks: {fontFamily: "Nunito Sans"}}]
                                        }
                                    }}/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </div>
    );
}

export default SalesSummary;
