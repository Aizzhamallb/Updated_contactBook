import React, { useState } from "react";
import AddContact from "./components/AddContact";
import Detail from "./components/Detail";
import EditForm from "./components/EditForm";
import Header from "./components/Header";
import ContactList from "./components/ContactList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";

const App = () => {
  const API = "http://localhost:5000/contacts";
  const [contacts, setContacts] = useState([]);
  const [oneContact, setOneContact] = useState(null);

  function addContact(newContact) {
    axios.post(API, newContact);
  }

  async function getContacts() {
    let res = await axios.get(API);
    setContacts(res.data);
  }

  async function getOneContact(id) {
    let res = await axios(`${API}/${id}`);
    console.log(res.data);
    setOneContact(res.data);
  }

  async function updateContact(id, editedContact) {
    await axios.patch(`${API}/${id}`, editedContact);
    getContacts();
  }

  async function deleteContact(id) {
    await axios.delete(`${API}/${id}`);
    getContacts();
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <ContactList
              getContacts={getContacts}
              contacts={contacts}
              deleteContact={deleteContact}
            />
          }
        />
        <Route path="/add" element={<AddContact addContact={addContact} />} />
        <Route
          path="/edit/:id"
          element={
            <EditForm
              getOneContact={getOneContact}
              oneContact={oneContact}
              updateContact={updateContact}
            />
          }
        />
        <Route
          path="/details/:id"
          element={
            <Detail getOneContact={getOneContact} oneContact={oneContact} />
          }
        />
      </Routes>
      <h2>Footer</h2>
    </BrowserRouter>
  );
};

export default App;
