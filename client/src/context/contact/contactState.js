import React, {useReducer} from 'react';
import uuid from 'uuid';
// import axios from 'axios';
import ContactContext from './ContactContext';
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER,
    CLEAR_CURRENT
} from '../types';

const ContactState = props =>{
    const initialState ={
        contacts: [
            {
                id: 1,
                name: 'Nathalie marquez',
                email: 'nat@gmail.com',
                phone: '222-222-222',
                type: 'personal'
            },
            {
                id: 2,
                name: 'Miliedy Bruno',
                email: 'mil@gmail.com',
                phone: '444-444-444',
                type: 'personal'
            },
            {
                id: 3,
                name: 'Olivera Olja',
                email: 'olja@gmail.com',
                phone: '333-333-222',
                type: 'personal'
            }
        ],
        current: null
    };

    const [state, dispatch] = useReducer(contactReducer, initialState)

    //Add contact
    const addContact = contact =>{
        contact.id = uuid.v4();
        dispatch({type: ADD_CONTACT, payload: contact});
    };

    //delete contact
        const deleteContact = id =>{
        dispatch({type: DELETE_CONTACT, payload: id});
    };

    //set current contact
        const setCurrent = contact =>{
        dispatch({type: SET_CONTACT, payload: contact});
    };

    //clear current contact
        const clearCurrent = () =>{
        dispatch({type: CLEAR_CURRENT});
    };
    //update contact
    const updateContact = contact =>{
        dispatch({type: UPDATE_CONTACT, payload: contact});
    };

    //filter contact

    //clear filter

    return(
        <ContactContext.Provider
        value={{
            contacts: state.contacts,
            current : state.current,
            addContact,
            deleteContact,
            setCurrent,
            clearCurrent,
            updateContact
        }}
        >
            {props.children}
        </ContactContext.Provider>
    );
};

export default ContactState;