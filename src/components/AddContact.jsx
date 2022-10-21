import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddContact = ({ addContact }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [image, setImage] = useState("");

  function createContact() {
    if (!name || !number || !image) {
      alert("Some inp are empty!");
      return;
    }
    let newContact = {
      name,
      number,
      image,
    };
    addContact(newContact);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="number"
        value={number}
        onChange={e => setNumber(e.target.value)}
      />
      <input
        type="text"
        placeholder="image"
        value={image}
        onChange={e => setImage(e.target.value)}
      />

      <Link to="/">
        <button onClick={createContact}>Save</button>
      </Link>
    </div>
  );
};

export default AddContact;
