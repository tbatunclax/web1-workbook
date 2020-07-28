import React, { useState } from 'react';
import styled from 'styled-components';

/* Componets c3 + tab ---------parent----*/
/* import children */

import Tab from './Tab.jsx';
import Section from './Section.jsx'; 

/* Scripts -----*/
import { tabItems } from './tabItems.js';

const Tabbed = () => {

    const [chosenTab, chosenTabSet] = useState(tabItems[1]);

    console.log('chosenTab', chosenTab);

    // loop through tabs

    const renderTabs = () => {
        return tabItems.map ((tabItem, idx) =>{
            return <Tab 
                        key={ idx } 
                        tabItem={ tabItem } 
                        chosenTabSet={ chosenTabSet }
                        chosenTab = { chosenTab }
                    />;
        });
    }



    return (
        
        <TabbedStyled className='Tabbed'>
            { renderTabs() }
            <Section chosenTab={ chosenTab } /> 
        </TabbedStyled>
    );
}

export default Tabbed;

const TabbedStyled = styled.div`
            
        
    
`;