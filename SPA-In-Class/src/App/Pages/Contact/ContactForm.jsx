import React, { useState } from 'react';
import styled from 'styled-components';

/* Scripts ---------- */
import API from '../../../common/axios.js';

/* Components -------- */
import FormGroup from '../../../common/Forms/FormGroup.jsx';
import Button from '../../../common/Forms/Button.jsx'

const formFields = {
    nameField: {
        id: 'userName',
        label: 'Name',
        inputType: 'text',
        value: '',
        validate: {
            required: true,
            valid: true,
            message: '',
        }
    },
    emailField: {
        id: 'userEmail',
        label: 'Email',
        inputType: 'email',
        value: '',
        validate: {
            required: true,
            valid: true,
            message: '',
        }
    },
    messageField: {
        id: 'userMessage',
        label: 'Message',
        inputType: 'textarea',
        value: '',
        validate: {
            required: false,
            valid: true,
            message: '',
        }
    },
}



const ContactForm = () => {

    const [userName, userNameUpdate] = useState(formFields.nameField);
    const [userEmail, userEmailUpdate] = useState(formFields.emailField);
    const [userMessage, userMessageUpdate] = useState(formFields.messageField);
    
    const handleChange = (event, formField) => {
        // console.log(event.target.value, formField);
//grandpa
        //update input
        const newField = {
            // clone of the formField
            ...formField,
            value: event.target.value,
        }
        //if() condition
        if(newField.validate.required === true){
            console.log('Validating: ', newField.label);

            if(newField.value.length < 4){
                newField.validate.valid =false;
                newField.validate.message = `You forgot to fill out the ${newField.label} field`;

            }else {
                newField.validate.valid =true;
                newField.validate.message = ``;
            }

        }



        if(formField.id === 'userName') {
            userNameUpdate(newField);
        }

        if (formField.id === 'userEmail'){
            userEmailUpdate(newField);
        }
        if (formField.id === 'userMessage'){
            userMessageUpdate(newField);
        }
    }

    //method to submit

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log('Captured Form Submit, we will take it from here.');

        if( userName.validate.valid === true && userEmail.validate.valid === true ){
            console.log('Valid Submitting form.');

            // .. AJAX goes here: AKA AXIOS

            const postData = {
                userName: userName,
                userEmail: userEmail,
                userMessage: userMessage,
            }


            API.post('/api/send', postData).then((result)=>{
                    console.log('result', result);
            });
        }
    }

    return (
        <ContactFormStyled className='ContactForm'>
            <form onSubmit={ handleFormSubmit }>
                <FormGroup 
                    formField = { userName } 
                    onChange={ handleChange }
                />
                <FormGroup 
                    formField = { userEmail } 
                    onChange={ handleChange }
                />
                <FormGroup 
                    formField = { userMessage }
                    onChange={ handleChange }
                />
                <Button type='submit'>Send Email</Button>
            </form>
        </ContactFormStyled>
    );
}

export default ContactForm;

const ContactFormStyled = styled.div`
    
`;