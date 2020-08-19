import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';


import Deets from './Login/Deets.jsx';
import LoginForm from './Login/LoginForm.jsx';
import GoogleMap from './Login/GoogleMap.jsx';

const Login = () => {

    return (
        <LoginStyled className='Login'>
            <Helmet>
                <title>Login :: SPA App</title>
            </Helmet>
            <div className="nested-wrapper">
                <div className="column column1">
                    <Deets />
                </div>
                <div className="column column2">
                    <LoginForm />
                </div>
            </div>
        </LoginStyled>
    );
}

export default Login;

const LoginStyled = styled.div`
        .nested-wrapper {
                display: flex;

                .column {
                    padding: 20px;
                }

                .column1 {
                    width: 35%;
                    background-color: yellow;
                }
                .column2 {
                    width: 65%;
                    background-color: pink;
                }
            }
    
`;