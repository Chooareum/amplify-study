import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';
const ConfirmPage = () => {
    const [username, setUsername] = useState("");
    const [code, setCode] = useState("");

    const navigate = useNavigate();
    async function confirmSignUp() {
        try {
            await Auth.confirmSignUp(username, code);
            return navigate("/SignIn");
        } catch (error) {
            console.log('error confirming sign up', error);
        }
    }
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: 'beige' }}>
            <div>
                <div><h1>코드 입력하기!!!!</h1></div>
                <div><input type={"text"} placeholder="id" onChange={(e) => setUsername(e.target.value)} /></div>
                <div><input type={"text"} placeholder="code" onChange={(e) => setCode(e.target.value)} /></div>
                <div><button onClick={() => { confirmSignUp() }}>확인</button></div>
            </div>
        </div>
    )
}

export default ConfirmPage;