import React from 'react';
import './LoginDetails.css';



const LoginDetails = (props: any) => {
    const { entername, setuserinputname } = props;
    const { enterpassword, setpassword } = props;

    return (
        <div className='loginpage'>
            <h1>MEMBER LOGIN</h1>
            <div className='username'>
                <input placeholder={entername} name='UserName' className='username' onChange={setuserinputname} />
                <div className='password'>
                    <input placeholder={enterpassword} className='password' onChange={setpassword} />
                    <div className='checkbox'>
                        <input type="checkbox" name="Remember" />
                        <label htmlFor="Remember">Remember me</label>
                        <input type="checkbox" name="ForgotPassword" />
                        <label htmlFor="ForgotPassword">Forgot Password?</label>

                        <div>
                            <button className='button' type="submit">LOGIN</button>
                        </div>
                    </div>
                </div>
            </div>
        </div> 

    )
}


export default LoginDetails;
