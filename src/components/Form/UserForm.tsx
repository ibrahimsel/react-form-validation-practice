import React from "react";
import "./UserForm.css";
const UserForm = () => {
  const userCredentials = {
    name: "",
    age: "",
  };

  const handleUserSubmit = (event: any) => {
    event.preventDefault();
    userCredentials.name = event.target[0].value;
    console.log("User form submitted");
  };

  return (
    <div className="user-form-container">
      <form onSubmit={handleUserSubmit} className="user-form">
        <label>Username</label>
        <input className="user-form-input" type="text"></input>
        <label>Age</label>
        <input className="user-form-input" type="number"></input>
        <button className="user-form-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;
