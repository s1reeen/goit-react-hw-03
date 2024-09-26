import { useEffect, useState } from "react";
import ContactForm from "./components/Contactform/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { nanoid } from "nanoid";
import "modern-normalize/modern-normalize.css";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = JSON.parse(window.localStorage.getItem("contacts"));
    return (
      savedContacts ?? [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      ]
    );
  });

  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (values, options) => {
    const newContact = { ...values, id: nanoid() };
    setContacts((prevContacts) => [...prevContacts, newContact]);
    options.resetForm();
  };

  const visibleContacts = contacts.filter(({ name, number }) => {
    return (
      name.toLowerCase().includes(searchData.toLowerCase()) ||
      number.includes(searchData)
    );
  });

  const handleDeleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div className="app">
      <h1>Phonebook</h1>
      <ContactForm handleAddContact={handleAddContact} />
      <SearchBox value={searchData} onSearch={setSearchData} />
      <ContactList contacts={visibleContacts} onDelete={handleDeleteContact} />
    </div>
  );
}

export default App;
