import React from "react";
import { useState } from "react";

const CancelApp = (props) => {
  const [name, setName] = useState("");
  const [appDate, setAppDate] = useState("");
  const [appTime, setAppTime] = useState("");
  const submithandler = (e) => {
    console.log(e.name);
  };

  return (
    <div style={{ backgroundColor: "whitesmoke" }}>
      <form onSubmit={submithandler}>
        <div className="cancelRam">
          <label> Owner Name : </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Appointmet Date :</label>
          <input
            type="date"
            value={appDate}
            onChange={(e) => setAppDate(e.target.value)}
          />
          <label>Appointment Time :</label>
          <input
            type="time"
            value={appTime}
            onChange={(e) => setAppTime(e.target.value)}
          />
        </div>
        <button
          style={{
            width: "230px",
            marginTop: "40px",
            marginLeft: "440px",
            color: "white",
          }}
          className="bttn"
          type="submit"
        >
          Cancel Appointment
        </button>
      </form>
      <br />
    </div>
  );
};

export default CancelApp;
