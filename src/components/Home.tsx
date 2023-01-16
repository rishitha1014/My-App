import React, { useState } from 'react'
import LoginDetails from './LoginDetails';
import EmployeeDetails from './EmployeeDetails'
import EmployeeStandards from './EmployeeStandards';
import button from '../components/EmployeeDetails';
import { render } from '@testing-library/react';


const Home = () => {
    
    return (
        <div>
            {/* <LoginDetails entername={'Username'} enterpassword={'Password'} setuserinputname={(event: any) => console.log('hey input vaue', event.target.value)} /> */}
            <div>
                {/* <EmployeeDetails getAction={(event: any) => {alert('record deleted')}} /> */}
                <EmployeeDetails />
                <div>
                    <EmployeeStandards />
                <div>
                    {/* <EmployeeTable /> */}
                    </div>    
                </div>
            </div>
        </div>
    )
}


export default Home;