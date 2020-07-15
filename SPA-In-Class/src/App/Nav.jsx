import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { mq } from '../common/mediaQueries.js';

const Nav = () => {
    return (
        <NavStyled>
            <div className="nested-wrapper">
                <NavLink to="/" exact>Welcome</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/login">Login</NavLink>
            </div>        
        </NavStyled>
    );
}

export default Nav;

const NavStyled = styled.nav`
        background-color: teal;
        color : white;
        text-align: center;

        a {
            display: inline-block;

            text-align: center;
            line-height: 50px;
            font-size: 20px;
            background-color: #105050;
            color: white;

            text-decoration: none;

            /*margin-bottom: 30px;*/

                border-radius: 5px;

                width: 100%;
                line-height: 40px;

            @media ${mq.tablet}{
                width:100px;
                line-height: 50px;
                margin-left: 10px;
                margin-right: 10px;
            }

            @media ${mq.desktop}{
                width:150px;
            }    

            &:hover {
                background-color: #103534;
            }

            &.active {
                background-color: pink;
            }
        }
`;