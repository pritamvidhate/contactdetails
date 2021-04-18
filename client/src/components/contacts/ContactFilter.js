import React,{useContext, useRef, useEffect} from 'react'
import ContactContext from '../../context/contact/ContactContext';

const ContactFilter = () => {
    const contactContext = useContext(ContactContext);
    const text = useRef('');

    const {filteredContacts, clearfilter, filtered} = contactContext;
    
    useEffect(() => {
        if(filtered === null) {
            text.current.value = ' ';
        };
    })
    
    const onChange = e =>{
        if(text.current.value !== ''){
            filteredContacts(e.targer.value);
        }else{
            clearfilter();
        }
    }
    return (
        <form>
            <input ref={text} type="text" placeholder="filter contacts..." onChange={onChange}/>
        </form>
    )
}

export default ContactFilter;