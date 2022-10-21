import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Detail = ({ getOneContact, oneContact }) => {
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    getOneContact(params.id);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <div className="container">
      {oneContact ? (
        <>
          <img src={oneContact.image} alt="" width="350px" height="350px" />
          <h3>{oneContact.name}</h3>
          <h3>{oneContact.number}</h3>
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default Detail;
