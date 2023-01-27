import React, { useState, useEffect } from "react";
import logo from "../assets/nwaneri.png";

const ProfileCard = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [age, setAge] = useState("");
  const [picture, setPicture] = useState(undefined);

  useEffect(() => {
    const data = localStorage.getItem("data");

    const DATABASE = JSON.parse(data);

    setAge(DATABASE.age);
    setCountry(DATABASE.nation);
    setFName(DATABASE.firstName);
    setLName(DATABASE.lastName);
    setPicture(DATABASE.picture);
    setState(DATABASE.state);
  }, []);

  return (
    <div className="app">
      <div className="wrapper">
        <h1 className="title">Your profile</h1>

        <div className="content">
          <div className="profile__card">
            <div className="profile__card-heading">
              <img src={logo} alt="logo" />
              <h3>Nwaneri Incorporated Solutions Ltd.</h3>
            </div>

            <div className="profile">
              <div className="profile__pic">
                <img src={picture} alt="An image of the card holder" />
              </div>

              <div className="profile__details">
                <p>
                  <span>Name:</span> {lName} {fName}{" "}
                </p>
                <p>
                  <span>Country:</span> {country}
                </p>
                <p>
                  <span>State:</span> {state}{" "}
                </p>
                <p>
                  <span>Age:</span> {age}{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
