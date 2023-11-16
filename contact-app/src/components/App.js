import AddContact from "./AddContact";
import ContactList from "./ContactList";
import Header from "./Header";

import React , {useEffect, useState} from "react";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [ contacts, setContacts ] = useState([])

  const addContactHandler = (contact)=>{
    console.log(contact)
    setContacts([...contacts, contact])
  };


  useEffect(()=>{
   const retrieveContacts=  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
   if(retrieveContacts) setContacts(retrieveContacts);
  }, []);

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="App">
      <header className="App-header">
      <p>hello world</p>
        <Header/>
        <AddContact addContactHandler = {addContactHandler}/>
        <ContactList  contacts={contacts}/>
      </header>
    </div>
  );
}

export default App;
