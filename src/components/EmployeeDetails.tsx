import React from "react";
import './EmployeeDetails.css';
import { useState } from "react";
import jsonData from './data.json';
import LoginDetails from "./LoginDetails";
import { stringify } from "querystring";

const EmployeeDetails = (props:any) => {
    const [employeeData, setemployeeData] = useState(jsonData);
    
    const deleteRows = (data:any) => {
        const totalEmployees = employeeData.length;
        data.id = totalEmployees - 1;
        const updatedEmployeeData = [...employeeData];
        updatedEmployeeData.pop();
        setemployeeData(updatedEmployeeData);
    }

    const rows = employeeData.map((details) => {
        return(
            <>
            <tr>
                <td>{details.Name}</td>
                <td>{details.Grade}</td>
                <td>{details.EmployeeStandard}</td>
                <td>{<button onClick={() => deleteRows({})}> Delete</button>}</td>
                <td>{}</td>
            </tr>
            </>

        )

    })

    return (
        <div>
            <table className = 'DataTable'>
                <thead>
                    <tr>
                    <th>NAME</th>
                    <th>GRADE</th>
                    <th>EMPLOYEE-STANDARDS</th>
                    <th>ACTION</th>
                    <th>UPDATE</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        </div>
    )
    /* return (
        <div className = 'DataTable'>
            <table>
                <div style={{backgroundColor:'black'}}>
                <tr>
                    <div className="rowstyle">
                    <th>Name</th>
                    <th>Grade</th>
                    <th>Employee-Standard</th>
                    <th>Action</th>
                    </div>
                </tr>
                </div>
                <tr>
                    <div className="rowstyle">
                    <td>Sophie</td>
                    <td>A</td>
                    <td>Senior-Level</td>
                    </div>
                </tr>
                <tr>
                <div className="rowstyle">
                    <td>Hannah</td>
                    <td>A</td>
                    <td>Mid-Level</td>
                    </div>
                </tr>
                <tr>
                    <div className="action">
                        <label>Action: </label>
                    <td><button onClick={getAction}> Delete</button></td>
                    </div>
                </tr>
            </table>
            <script>
                
            </script>
            </div>

    )
} */

}
export default EmployeeDetails;