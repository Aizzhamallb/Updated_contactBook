import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EditForm = ({ getOneContact, oneContact, updateContact }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [image, setImage] = useState("");

  const { id } = useParams();

  useEffect(() => {
    getOneContact(id);
  }, []);

  useEffect(() => {
    if (oneContact) {
      setName(oneContact.name);
      setNumber(oneContact.number);
      setImage(oneContact.image);
    }
  }, [oneContact]);

  function saveChanges() {
    let editedObj = {
      name,
      number,
      image,
    };
    updateContact(id, editedObj);
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
        placeholder="img"
        value={image}
        onChange={e => setImage(e.target.value)}
      />

      <Link to="/">
        <button onClick={saveChanges}>Save Changes</button>
      </Link>
    </div>
  );
};

export default EditForm;
