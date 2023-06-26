import * as React from 'react'
import { useState, useEffect, useMemo } from 'react'
import './Employee.css'
import '../../Header/Header.css'
import Header from '../../Header/Header'
import { ApiCall } from '../../../../../../services/middleware'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import "bootstrap/dist/css/bootstrap.css";
import { Button, Col, Row, Table } from "react-bootstrap";
import {
  DatatableWrapper,
  Filter,
  Pagination,
  PaginationOptions,
  TableBody,
  TableColumnType,
  TableHeader
} from "react-bs-datatable";


export default function Employee() {
    const STORY_HEADERS  = [
        {
          prop: "name",
          title: "Name",
          isFilterable: true
        },
        {
          prop: "email",
          title: "Email"
        },
        {
          prop: "phoneNumber",
          title: "Phone Number"
        },
        {
          prop: "age",
          title: "Age"
        },
        {
          prop: "gender",
          title: "Gender",
        },
        {
            prop: "startDate",
            title: "Date of Joining",
        },
        {
            prop: "status",
            title: "Status",
        },
        {
            prop: "type",
            title: "Type",
        }
      ];
    const [employeeDetails, setEmployeeDetails] = useState([])    
    useEffect(() => {
        const fetchEmployeeDetails = async() => {
            let userDetails = JSON.parse(window.localStorage.getItem('userAuthentication'));
            let companyId = userDetails[0]['organizationId']
            let data = {
                'companyId' : companyId
            }
            let res = await ApiCall("getAllEmployee", data);
            let employeeData = res.response
            setEmployeeDetails(employeeData)
        }

        fetchEmployeeDetails()
    }, [])


    function TableShow() {
        return (
            <DatatableWrapper
            body={employeeDetails}
            headers={STORY_HEADERS}
            paginationOptionsProps={{
              initialState: {
                rowsPerPage: 10,
                options: [5, 10, 15, 20]
              }
            }}
          >
            <Row className="mb-4 p-2">
              <Col
                xs={12}
                lg={4}
                className="d-flex flex-col justify-content-end align-items-end"
              >
                <Filter />
              </Col>
              <Col
                xs={12}
                sm={6}
                lg={4}
                className="d-flex flex-col justify-content-lg-center align-items-center justify-content-sm-start mb-2 mb-sm-0"
              >
                <PaginationOptions />
              </Col>
              <Col
                xs={12}
                sm={6}
                lg={4}
                className="d-flex flex-col justify-content-end align-items-end"
              >
                <Pagination />
              </Col>
            </Row>
            <Table>
              <TableHeader />
              <TableBody />
            </Table>
          </DatatableWrapper>
            // <MDBTable responsive>
            //     <MDBTableHead>
            //         <tr>
            //             <th scope='col'>Name</th>
            //             <th scope='col'>Email</th>
            //             <th scope='col'>Phone Number</th>
            //             <th scope='col'>Age</th>
            //             <th scope='col'>Gender</th>
            //             <th scope='col'>Date of Joining</th>
            //             <th scope='col'>Status</th>
            //             <th scope='col'>Employment Type</th>
            //         </tr>
            //     </MDBTableHead>
            //     <MDBTableBody>
            //         {employeeDetails.map((employee) => (
            //             <tr>
            //                 <td>{employee.name}</td>
            //                 <td>{employee.email}</td>
            //                 <td>{employee.phoneNumber}</td>
            //                 <td>{employee.age}</td>
            //                 <td>{employee.gender}</td>
            //                 <td>{employee.startDate}</td>
            //                 <td>{employee.status}</td>
            //                 <td>{employee.type}</td>
            //             </tr>
            //         ))}
            //     </MDBTableBody>
            // </MDBTable>
        )
        
    }
    

    return (
        <>
            <Header />
            <section className="home-section">
                <div className="text">
                    <TableShow />
                </div>
                {/*  */}
            </section>
        </>
    )
}