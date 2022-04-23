import React from 'react'
import LoginForm from '../../components/LoginForm'

const LoginPage = () => {
    document.title = 'IPL Fantasy League';
    return (
        <div id="container">
            <LoginForm />
        </div>
    )
}

export default LoginPage