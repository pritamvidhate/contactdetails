import React,{Fragment, useContext} from 'react'
import ContactItem from './ContactItem';
import ContactContext from '../../context/contact/ContactContext';

const Contacts = () => {
    const contactContext = useContext(ContactContext);

    const {contacts, filtered} = contactContext;

    if(contacts === 0){
        return <h4>Please add the Contact</h4>
    }

    return (
        <Fragment>
            {filtered !== null
                ? filtered.map(contact =>(
                    <ContactItem key = {contact.id} contact={contact}/>
                    ))
                :  contacts.map(contact =>(
                <ContactItem key = {contact.id} contact ={contact}/>
            ))}
        </Fragment>
    );
};

export default Contacts;