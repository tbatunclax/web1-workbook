import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faMapMarker,
} from '@fortawesome/free-solid-svg-icons';

const HouseMarker = () => {

    return (
        <HouseMarkerStyled className='HouseMarker'>
            <div className="icon">
                <FontAwesomeIcon icon={ faMapMarker } />
            </div>
            <h1>HOME SWEET HOME</h1>
        </HouseMarkerStyled>
    );
}

export default HouseMarker;

const HouseMarkerStyled = styled.div`
    &.HouseMarker {
        text-align: center;
        color: red;

        width: 20px;

        /* Center Position on map marker coordinates. */
        position: absolute;
        left: 50%; top: 50%;
        transform: translate(-50%, -50%);

        .icon {
            margin: auto;
            width: 25px;
            height: 25px;
            text-align: center;

            svg {
                width: 100%;
                height: auto;
            }
        }

        h1 {
            margin: 0;
            font-size: 16px;
        }
    }
`;