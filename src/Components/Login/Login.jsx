import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import kite from '../../assets/kite_logo.png';
import { useNavigate } from 'react-router-dom';
function Login() {
    const [username, updateusername] = useState("");
    const [password, updatepassword] = useState("");
    const Navigate = useNavigate();
    // const [Response , setsucResponse]=useState('');


    function handleusername(username) {
        console.log(username.target.value);
        updateusername(username.target.value);
    }
    function handlePassword(password) {
        console.log(password.target.value);
        updatepassword(password.target.value);

    }
    async function handlelogin() {
        try{
            const url =await axios.post("https://api.escuelajs.co/api/v1/auth/login", {
            "email": "john@mail.com",
            "password": "changeme"
        });
        // .then(function (positiveresponse, negitiveresponse) {
        //     console.log(positiveresponse, negitiveresponse);
        //     setsucResponse(positiveresponse.data.access_token);
        // })
        // axios.get(https://api.escuelajs.co/api/v1/auth/profile,
        // "Authorization":Bearer{"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTc1Nzk1MTEyMywiZXhwIjoxNzU5Njc5MTIzfQ.gKQ0ippedFmbTH8Bm8WU9XvIzvxK8347IxE6q3dhBBg"})
        const token = url.data.access_token;
        // localStorage.setItem("token", token);
        console.log("Access Token:", token);
        

        console.log(username, password);
        if (username === "john@mail.com" && password === "changeme") {

            Navigate("/DashBoard");
        } else {
            alert("invalid username or password");
        }
    }
    catch (error){
        console.error("There was an error!", error);
    }
    

}

    return (

        <>
            <div className="body-container">
                <div className="login-container">
                    <div className="image-container">
                        <img className="kite" src={kite} alt="kite" />
                    </div>
                    <div className="heading-container">
                        <p className="login-heading">Login to Kite</p>
                    </div>
                    <div className="input-container1">
                        <input type="text" id="input-form" placeholder="Phone or User ID" onChange={handleusername} /><br />
                    </div>
                    <div className="input-container2">
                        <input type="password" id="input-form" placeholder="Password" onChange={handlePassword} /><br />
                    </div>
                    <div className="button-container">
                        <button className="login-button" onClick={handlelogin}>Login</button><br />
                    </div>
                    <div className="forgot-container">
                        <a id="forgot-password" href="#">Forgot user ID or password?</a><br />
                    </div>
                    <div className="signup-container">
                        <a id="Sign-up" href="#">Sign Up</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;