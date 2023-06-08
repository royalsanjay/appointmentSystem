import React, { useState } from "react";

const Tryjs = () => {
  const [appDate, setAppDate] = useState("");
  const [appTime, setAppTime] = useState("");

  const submithandler = () => {
    const values = {
      date: appDate,
      time: appTime,
    };
    localStorage.setItem("data", JSON.stringify(values));
  };

  console.log(appDate);
  return (
    <>
      <form onSubmit={submithandler}>
        <div className="formsty">
          <label> Appointment Date :</label>
          <input
            type="date"
            value={appDate}
            placeholder="mm/dd/yyyy"
            onChange={(e) => {
              setAppDate(e.target.value);
            }}
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

        <button type="submit">set</button>
      </form>

      <p>{JSON.parse(localStorage.getItem("data")).time || "nothing"}</p>
    </>
  );
};

export default Tryjs;
