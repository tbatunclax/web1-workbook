import React from 'react';
import styled from 'styled-components';

const FormGroup = ({label, id, inputType='text'}) => {

    return (
        <FormGroupStyled className='FormGroup'>
            <div className="FormGroup">
                    <label htmlFor={ id }>{ label }:</label>
                    <div className="control">
                        <input id={ id }/>
                    </div>
            </div>
        </FormGroupStyled>
    );
}

export default FormGroup;

const FormGroupStyled = styled.div`
    
`;