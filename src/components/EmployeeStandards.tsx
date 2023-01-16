import React from "react";
import './EmployeeStandards.css';
import { useState } from "react";
import jsonstandardData from './standardData.json'

const EmployeeStandards = (props:any) => {
    const {getEmployeeStandards} = props;
    const [employeeStandards, setEmployeeStandards] =useState(jsonstandardData);
    
    const renderOptions = () => {
        const options = employeeStandards.map((optionData) => {
            return(
                <option value={optionData.value} >
                    {optionData.label}
                </option>
            )
        })
        const standardSelect = employeeStandards.map((optionData) => {
            return(
                <div></div>
            )


        })
        return options;
    }
    const standardSelect = employeeStandards.map((optionData) => {


    })
    return(
        <>
        <tbody>
        <tr>
                <td>
                <label>Choose the level of standard:</label>   
                <select onChange={(event) => (event.target.value)}>
               {renderOptions()}
            </select>
                </td>
            </tr>
        </tbody>
        </>
    )
    
    /* return (
        <div className="dropdown">
            <label htmlFor="Employee-standards">Choose an Employee Standard: </label>
            <select name="Employee standards" id="Employee standards">
                <option value="Senior-Level">
                    Senior-Level 1
                </option>
                <option value="Mid-Level">
                    Mid-Level 2
                </option>
                <option value="Entry-Level">
                    Entry-Level 3
                </option>
                <option value="Standard-Level">
                    Standard-Level 4
                </option>
                <option value="IT-Resource-Level">
                    IT-Resource-Level 5
                </option>
                <option value="Accounts-Level">
                    Accounts-Level 6
                </option>
                <option value="HR-Level">
                    HR-Level 7
                </option>
                <option value="New Opportunities">
                    New Opportunities-Level 8
                </option>
            </select>
        </div>
    ) */

}

export default EmployeeStandards;