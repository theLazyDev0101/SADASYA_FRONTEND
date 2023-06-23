import * as React from 'react'
import { useState, useEffect, useMemo } from 'react'
import './Employee.css'
import '../../Header/Header.css'
import Header from '../../Header/Header'
import { ApiCall } from '../../../../../../services/middleware'


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


    // const employeeDetails = [
    //     { id: 1, name: 'John Doe', age: 30, gender: 'Male' },
    //     { id: 2, name: 'Jane Smith', age: 25, gender: 'Female' },
    //     // ... add more employee objects
    //   ];
    function Table() {

        return (
            <table >
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Name</td>
                        <td>Name</td>
                        <td>Name</td>
                        <td>Name</td>
                        <td>Name</td>
                        <td>Name</td>
                        <td>Name</td>
                        <td>Name</td>
                        
                    </tr>
                </thead>
                <tbody >
                    
                </tbody>
            </table>
        )
    }
    

    return (
        <>
            <Header />
            <section className="home-section">
                <div className="text">Employee</div>
                <Table />
                {/*  */}
            </section>
        </>
    )
}