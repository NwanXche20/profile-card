import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [age, setAge] = useState("");
  const [picture, setPicture] = useState(undefined);

  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();

    const DATABASE = {
      firstName: fName,
      lastName: lName,
      nation: country,
      state,
      age,
      picture,
    };

    localStorage.setItem("data", JSON.stringify(DATABASE));

    navigate("/profile-card");
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">Fill in your details</h1>

        <form onSubmit={submit} className="form">
          <div className="field">
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              id="first-name"
              className="input"
              required
              onChange={(e) => setFName(e.target.value)}
            />
          </div>

          <div className="field">
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              id="last-name"
              className="input"
              required
              onChange={(e) => setLName(e.target.value)}
            />
          </div>

          <div className="field">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              className="input"
              required
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>

          <div className="field">
            <label htmlFor="origin">State of Origin</label>
            <input
              type="text"
              id="origin"
              className="input"
              required
              onChange={(e) => setState(e.target.value)}
            />
          </div>

          <div className="field">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              max="100"
              min="16"
              id="age"
              className="input"
              required
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <div className="field">
            <label htmlFor="image">Profile Picture</label>
            <input
              type="file"
              id="image"
              className="input"
              required
              onChange={(e) => {
                const files = e.target.files[0];

                const url = URL.createObjectURL(files);

                setPicture(url);
              }}
            />
          </div>

          <input type="submit" className="btn input" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Register;
