import React from 'react';
import './contact.css'
const Contact = () => {

    return (<div className={'contact_container'}>
        <h1>Send me a message :)</h1>
        <form action={''}>
            <input type="text" id={'name_input'} name={'name'}placeholder='Name: ' required/>
            <input type="email" id={'name_input'} name={'email'} placeholder='E-mail: ' required/>
            <input type="text" id={'message_input'} name={'message'} placeholder='Message: ' required/>
            <input className={'btn-77'} type="submit" id={'submit_button'} />
        </form>
    </div>)
}

export default Contact;