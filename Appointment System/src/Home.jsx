import React, { useEffect, useState } from "react";
import "./App.css";
import bookLogo from "../public/bookLogo.svg";
import addApp from "../public/addApp.svg";
import icon from "../public/icon.png";
import cancelLogo from "../public/cancelLogo.svg";
import Appointment from "./Components/Appointment";
import Showbar from "./Components/Showbar";
import { Link } from "react-router-dom";
import CancelApp from "./Components/CancelApp";
import Search from "./Components/Search";
import Landing from "./Landing";

const getDatafromLS = () => {
  const data = localStorage.getItem("values");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const Home = () => {
  const [toggle, setToggle] = useState(false);
  const [ram, setRam] = useState(false);
  const [values, setValues] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timeout = () => {
      setLoad(false);
    };
    setTimeout(timeout, 3000);
  }, []);

  const tools = () => {
    setToggle((prev) => !prev);
    setRam(false);
  };

  const cools = () => {
    setRam((prev) => !prev);
    setToggle(false);
  };

  useEffect(() => {
    setValues(getDatafromLS());
  }, []);
  return (
    <>
      {load ? (
        <Landing />
      ) : (
        <>
          <div style={{ backgroundColor: "whitesmoke" }}>
            <div className="Navbar">
              <div className="logoDiv">
                <img width={120} src={icon} alt="logo" />
              </div>
              <div className="Menus">
                <ul className="hospitalName ">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Gallery</a>
                  </li>
                  <li>
                    <a href="#">About us </a>
                  </li>
                </ul>
              </div>

              <div className="navButtons">
                <button className="bttns">
                  <Link to="/about" className="anchor">
                    More Info
                  </Link>
                </button>
              </div>
            </div>

            <br />
            <div>
              <Search values={values} setValues={setValues} />
            </div>
            <div className="firsts">
              <img src={bookLogo} alt="Booking SVG" />
              <h1 className="sys">Appointment System</h1>
            </div>
          </div>
          <div className="adders" style={{ backgroundColor: "whitesmoke" }}>
            <div>
              <button className="dxr">
                <div className="inner" onClick={tools}>
                  <img sizes="130px" src={addApp} alt="Adding Appoint" />
                  <p className="pessage"> Add Appointment</p>
                </div>
              </button>
            </div>
            <div>
              <button className="dxr">
                <div className="inner" onClick={cools}>
                  <img sizes="130px" src={cancelLogo} alt="Cancel Appoint" />
                  <p className="pessage"> Cancel Appointment</p>
                </div>
              </button>
            </div>
          </div>
          {toggle ? (
            <div>
              <Appointment
                values={values}
                setValues={setValues}
                setToggle={setToggle}
              />
            </div>
          ) : null}
          {ram ? (
            <div>
              <CancelApp setRam={setRam} />
            </div>
          ) : null}
          <Showbar values={values} setValues={setValues} />
        </>
      )}
    </>
  );
};

export default Home;
