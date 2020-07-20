import React from 'react';
import styled from 'styled-components';

import { mq } from '../common/mediaQueries.js';

const Footer = () => {


// single line comment
/*
    Multi line commment
    more than one line
    see
*/

    const myVariable = 'I went to the park';
    const anotherOne = 123;
    console.log(myVariable, anotherOne);

    const timbuktu = () => {
        //actions to execute
        console.log('Executing timbuktu');
    }

    timbuktu();

    return (
        <FooterStyled>
            <div className="nested-wrapper">
                My footer
            </div>
        </FooterStyled>
    );
}

export default Footer;

const FooterStyled = styled.footer`
    background-color: teal;

    @media ${mq.tablet} {
        background-color: orange;
    }

    @media ${mq.desktop} {
        background-color: purple;
    }


`;