import React from "react";

import {Card, CardBody, CardTitle, Table} from 'reactstrap';

const Projects = ({data}) => {
    return (
        /*--------------------------------------------------------------------------------*/
        /* Used In Dashboard-4 [General]                                                  */
        /*--------------------------------------------------------------------------------*/
        <Card>
            <CardBody>
                <div className="d-flex align-items-center">
                    <div>
                        <CardTitle>District Level</CardTitle>
                    </div>
                </div>
                <Table className="no-wrap v-middle" responsive>
                    <thead>
                    <tr className="border-0">
                        <th className="border-0">District</th>
                        <th className="border-0">Confirmed</th>
                        <th className="border-0">Zone</th>
                    </tr>
                    </thead>

                    <tbody>
                    {
                        data && data.districtData.map((item, i) =>
                            <tr>
                                <td>
                                    <div className="d-flex no-block align-items-center">
                                        <div
                                            className={`${item.zone === "RED" ? "bg-danger " : "bg-warning "} ${item.zone === "GREEN" && "bg-success "} mr-2 feedSection `}>
                                        </div>
                                        <div className="">
                                            <h5 className="mb-0 font-16 font-medium">{item.name}</h5></div>
                                    </div>
                                </td>
                                <td className="fs20">{item.confirmed}</td>

                                <td>{item.zone}</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </CardBody>
        </Card>
    );
}

export default Projects;
