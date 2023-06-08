import React, { useState } from "react";
import Home from "../Home";

const TryToggle = () => {
  // const [hey, setHey] = useState("");
  const [tesla, setTesla] = useState(false);
  const school = () => {
    // setTesla((prev))=>!(prev);
    setTesla((prev) => !prev);
  };
  return (
    <>
      <div>
        <button
          style={{ marginLeft: "600px", padding: "6px", marginBottom: "6px" }}
          onClick={school}
        >
          Click
        </button>
      </div>
      {tesla ? (
        <>
          <p>hhiiii</p>
          <input type="text" />
        </>
      ) : null}
    </>
  );
};

export default TryToggle;
