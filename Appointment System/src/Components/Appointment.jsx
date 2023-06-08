import React, { useState } from "react";

const Appointment = ({ values, setValues }) => {
  const [ownerName, setOwnerName] = useState("");
  const [petName, setPetName] = useState("");
  const [appDate, setAppDate] = useState("");
  const [appTime, setAppTime] = useState("");
  const [appNote, setAppNote] = useState("");
  const [contact, setContact] = useState("");

  const SaveAppoint = (e) => {
    e.preventDefault();

    let value = {
      name: ownerName,
      pet: petName,
      date: appDate,
      time: appTime,
      contact: contact,
      note: appNote,
    };
    const newValue = [...values, value];
    setValues(newValue);
    localStorage.setItem("values", JSON.stringify(newValue));
    setOwnerName("");
    setPetName("");
    setAppDate("");
    setAppTime("");
    setContact("");
    setAppNote("");
  };

  return (
    <div style={{ backgroundColor: "whitesmoke" }}>
      <div class="formcontainer">
        <div>
          <form onSubmit={SaveAppoint}>
            <div className="formsty">
              <label> Owner Name : </label>
              <input
                type="text"
                value={ownerName}
                onChange={(e) => setOwnerName(e.target.value)}
              />
            </div>

            <br />
            <div className="formsty">
              <label> Pet Name : </label>
              <input
                type="text"
                value={petName}
                onChange={(e) => setPetName(e.target.value)}
              />
            </div>

            <br />
            <div className="formsty">
              <label> Appointment Date :</label>
              <input
                type="date"
                value={appDate}
                placeholder="mm/dd/yyyy"
                onChange={(e) => setAppDate(e.target.value)}
              />
            </div>

            <br />
            <div className="formsty">
              <label>Appointment Time :</label>
              <input
                type="time"
                value={appTime}
                onChange={(e) => setAppTime(e.target.value)}
              />
            </div>
            <br />
            <div className="formsty">
              <label>Contact Number :</label>
              <input
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>

            <br />
            <div className="formsty">
              <label> Appointment Note :</label>
              <textarea
                placeholder="Detailed comments about the condition"
                name="message"
                id="appNote"
                cols="40"
                rows="5"
                value={appNote}
                onChange={(e) => setAppNote(e.target.value)}
              ></textarea>
            </div>
            <br />
            <button type="submit" className="bttn">
              Register
            </button>
          </form>
        </div>
        <div className="dog">
          <img width={560} src="mission.jpg" alt="office" />
        </div>
      </div>
    </div>
  );
};

export default Appointment;
