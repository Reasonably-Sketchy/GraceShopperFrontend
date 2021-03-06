import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { callApi } from '../../api';

import { 
    Button,
    TextField} from '@material-ui/core';

import './Welcome.css'

const Register = ({ setToken }) => {
    const history = useHistory();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [respMessage, setRespMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPass) {
            setRespMessage('Your passwords do not match!');
            return;
        };

        try {
            const data = await callApi({
                url: '/users/register',
                method: 'POST',
                body: {
                    first: firstName,
                    last: lastName,
                    email: email,
                    imageURL: imageURL,
                    username: username,
                    password: password,
                },
            });
        
            const token = data.token;

            if (token) {
                localStorage.setItem('token', token);
                setUsername('');
                setPassword('');
                setToken(token);
                history.push('/register/success');
            } else {
                setRespMessage(data.message);
            };
        } catch(error) {
            console.error(error);
        };
    };


    return (
        <main id="login-register">
            <div className="user-action-container">

            <div className="header-container">
                <h1>Register</h1>
            </div>

            {respMessage ? <div id="error-message">{ respMessage }</div> : ''}


            <form className="register-form" onSubmit={handleSubmit}>

                <div className="double-input">
                    <TextField 
                        id="firstName"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                        required={true} />

                    <TextField 
                        id="lastName"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                        required={true} />
                </div>

                <TextField 
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required={true} />

                <TextField 
                    id="username"
                    placeholder="Desired Username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    required={true} />

                <TextField 
                    id="imageURL"
                    placeholder="Profile Image URL (optional)"
                    value={imageURL}
                    onChange={(event) => setImageURL(event.target.value)}
                    required={false} />

                <TextField 
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required={true} />
                
                <TextField 
                    id="confirm-password"
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPass}
                    onChange={(event) => setConfirmPass(event.target.value)}
                    required={true} />

                <Button
                    className="responsive-button"
                    variant="contained"
                    color="primary"
                    type="submit"
                    >Register</Button>

                <Button
                    className="responsive-button"
                    variant="outlined"
                    color="primary"
                    onClick={() => {
                        history.push('/welcome');
                    }}>Back</Button>

            </form>
            </div>
        </main>
    );
    
};

export default Register;