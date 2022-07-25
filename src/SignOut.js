import React, { useState } from 'react';
import { Auth, nav } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';

const SignOutPage = () => {
    const navigate = useNavigate();

    async function signOut() {
        try {
            await Auth.signOut({ global: true });
            return navigate("/SignIn");
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: 'beige' }}>
                <div>
                    <button onClick={() => { signOut() }}>로그아웃합니다</button>
                </div>
            </div>
        </>
    )
}

export default SignOutPage;