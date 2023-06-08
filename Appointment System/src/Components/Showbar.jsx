import React from "react";
import deleteLogo from "../../public/deleteLogo.svg";

const Showbar = ({ values, setValues }) => {
  const deleteList = (pet) => {
    const filteredPetlist = values.filter((element, index) => {
      return element.pet !== pet;
    });
    setValues(filteredPetlist);
    localStorage.setItem("values", JSON.stringify(filteredPetlist));
  };

  const handleDelete = () => {
    localStorage.removeItem("values");
    setValues([]);
  };

  return (
    <div style={{ backgroundColor: "whitesmoke" }}>
      {values.length > 0 && (
        <>
          {values.map((value) => (
            <div className="card" style={{ backgroundColor: "whitesmoke" }}>
              <div className="cardName">
                <h4>Pet Name :{value.pet}</h4>
                <h4>Owner :{value.name}</h4>
                <h4>Note :{value.note}</h4>
              </div>
              <div>
                <span>{value.time}</span>
                <br />
                <span>{value.date}</span>
              </div>

              <div>
                <button
                  onClick={() => deleteList(value.pet)}
                  className="cardButton"
                >
                  <img width={35} src={deleteLogo} alt="delete icon" />
                </button>
              </div>
            </div>
          ))}
          <button onClick={() => handleDelete()} className="dlt">
            <span style={{ color: "white" }}>Remove All</span>
          </button>
        </>
      )}
      <br />
      <br />
      {values.length < 1 && (
        <div className="dat">
          <span>No datas are added yet</span>
        </div>
      )}
    </div>
  );
};

export default Showbar;
