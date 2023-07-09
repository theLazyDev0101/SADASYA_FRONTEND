import * as React from 'react'
import { useState, useEffect, useMemo } from 'react'
import './Employee.css'
import '../../Header/Header.css'
import Header from '../../Header/Header'
import { ApiCall } from '../../../../../../services/middleware'
import BootstrapTable from 'react-bootstrap-table-next';


export default function Employee() {
    
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
      const columns = [
        {
          dataField: 'name',
          text: 'Name',
        },
        {
          dataField: 'email',
          text: 'Email',
        },
        {
          dataField: 'phoneNumber',
          text: 'Phone Number',
        },
        {
          dataField: 'age',
          text: 'Age',
        },
        {
          dataField: 'gender',
          text: 'Gender',
        },
        {
          dataField: 'startDate',
          text: 'Joining Date',
        },
        {
          dataField: 'status',
          text: 'Employee Status',
        },
        {
          dataField: 'type',
          text: 'Type',
        }
      ]  
      
      return (
        <BootstrapTable keyField='id' data={ employeeDetails } columns={ columns } striped hover condensed />
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