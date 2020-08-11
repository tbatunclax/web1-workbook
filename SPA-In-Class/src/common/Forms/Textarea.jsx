import React from 'react';
import styled from 'styled-components';

const Textarea = ({formField, onChange}) => {

    const handleOnChange = (event) => {
        //console.log(e, formField);
        onChange(event, formField);
    }

    return (
        <TextareaStyled className='Control Textarea'>
            <textarea 
                id={ formField.id }
                name= { formField.id }
                onChange = { handleOnChange }
                value = { formField.value } 
            /> 
        </TextareaStyled>
    );
}

export default Textarea;

const TextareaStyled = styled.div`
    
`;