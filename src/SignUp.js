import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    async function signUp() {
        try {
            const { user } = await Auth.signUp({
                username,
                password,
                attributes: {
                    email,          // optional
                }
            });
            console.log(user);
            return navigate("/Confirm");
        } catch (error) {
            console.log('error signing up:', error);
        }
    }


    return (

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: 'beige' }}>
            <div>
                <div><h1>가입하기!!!!</h1></div>
                <div><input type={"text"} placeholder="id" onChange={(e) => setUsername(e.target.value)} /></div>
                <div><input type={"password"} placeholder="pw" onChange={(e) => setPassword(e.target.value)} /></div>
                <div><input type={"text"} placeholder="email" onChange={(e) => setEmail(e.target.value)} /></div>
                <button onClick={() => { signUp() }}>가입합니다</button>
            </div>
        </div>


    )
}

export default SignUpPage;