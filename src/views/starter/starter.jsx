import React, {useEffect, useState} from 'react';
import {Col, Row} from 'reactstrap';
import {Projects, SalesSummary} from 'components/dashboard-components';


const Starter = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
            fetch('https://api.covidindiatracker.com/state_data.json')
                .then(response => response.json())
                .then(data => setData(data));
        }, []
    );
    console.log(data);
    return (
        <div>
            <Row>
                <Col sm={12}>
                    <SalesSummary data={data && data[0]}/>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <Projects data={data && data[0]}/>
                </Col>
            </Row>
        </div>
    );
}

export default Starter;
