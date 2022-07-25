import React, { useState } from 'react';
import { Auth } from 'aws-amplify';

import { useNavigate } from 'react-router-dom';
const SignInPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    async function signIn() {

        try {
            const user = await Auth.signIn(username, password);
            return navigate("/SignOut");

        } catch (error) {
            console.log('error signing in', error);
        }
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: 'beige' }}>
            <div>
                <div><h1>로그인하기!!!!</h1></div>
                <div><input type={"text"} placeholder="id" onChange={(e) => setUsername(e.target.value)} /></div>
                <div><input type={"password"} placeholder="pw" onChange={(e) => setPassword(e.target.value)} /></div>
                <div><button onClick={() => { signIn() }}>로긴합니다</button></div>
                <button onClick={() => { navigate("/") }}>회원가입 하기</button>
            </div>
        </div>
    )
}

export default SignInPage;