import React, { useState } from 'react';
import styled from 'styled-components';

/* Scripts ----------------*/
import { services } from './servicesData.js';

/* Componets---------------*/
import FilterNav from './FilterNav/FilterNav.jsx';
import Gallery from './Gallery/Gallery.jsx';

const ServicesContainer = () => {

    // currCategory State value, currCategory Action
    const [ currCategory, currCategorySet ] = useState(services.categories[0]);

    console.log('currCategory', currCategory);

    return (
        <ServicesContainerStyled className='ServicesContainer'>
            <FilterNav 
                services={ services } 
                currCategory={ currCategory }
                currCategorySet={ currCategorySet}
            />
            <Gallery services={ services } currCategory={ currCategory }/> 
        </ServicesContainerStyled>
    );
}

export default ServicesContainer;

const ServicesContainerStyled = styled.div`
    
`;