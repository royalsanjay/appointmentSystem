import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import searchLogo from "../../public/searchLogo.svg";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const getDatafromLS = () => {
  const data = localStorage.getItem("values");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};
const Search = ({ values, setValues }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortProperty, setSortProperty] = useState("");
  // const [list, setList] = useState(values);
  const [sortOrder, setSortOrder] = useState("");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSortProperty = (property) => {
    if (sortProperty === property) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortProperty(property);
      setSortOrder("asc");
    }
    setShowOptions(false); // Hide options after selection
  };
  const handleSortOrder = (values) => {
    setSortOrder(values);
    setShowOptions(false); // Hide options after selection
  };

  useEffect(() => {
    if (searchQuery) {
      const filteredPets = values.filter((pet) =>
        pet.pet.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setValues(filteredPets);
    } else {
      setValues(getDatafromLS());
    }
  }, [searchQuery]);

  useEffect(() => {
    if (sortProperty !== "") {
      const sortedlist = values.slice().sort((a, b) => {
        let comparison = 0;
        if (sortProperty === "pet") {
          comparison = a.pet.localeCompare(b.pet);
        } else if (sortProperty === "name") {
          comparison = a.name.localeCompare(b.name);
        } else if (sortProperty === "date") {
          // Assuming 'date' refers to a date property in petData objects
          comparison = new Date(a.date) - new Date(b.date);
        }
        if (sortOrder === "desc") {
          comparison *= -1; // Reverse the comparison for descending order
        }
        return comparison;
      });
      setValues(sortedlist);
    } else {
      setValues(getDatafromLS());
    }
  }, [sortProperty, values]);

  return (
    <>
      <div className="mainContainer">
        <div className="search-container">
          <div>
            <input
              className="search-input "
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search..."
            />
          </div>
          <div>
            <button className="icon-button">
              <img
                style={{ width: "20px", height: "24px", marginTop: "1px" }}
                src={searchLogo}
                alt="search Logo"
              />
            </button>
          </div>
        </div>
        <div className="sort-container">
          <DropdownButton id="dropdown-basic-button" title="Sort By">
            <Dropdown.Item href="#/action-1">
              <div
                className={`sort-option ${
                  sortProperty === "pet" ? "selected" : ""
                }`}
                onClick={() => handleSortProperty("pet")}
              >
                Pet Name
                {sortProperty === "pet" && (
                  <span className="tick-mark">&#10003;</span>
                )}
              </div>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">
              {" "}
              <div
                className={`sort-option ${
                  sortProperty === "name" ? "selected" : ""
                }`}
                onClick={() => handleSortProperty("name")}
              >
                Owner Name
                {sortProperty === "name" && (
                  <span className="tick-mark">&#10003;</span>
                )}
              </div>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3">
              {" "}
              <div
                className={`sort-option ${
                  sortProperty === "date" ? "selected" : ""
                }`}
                onClick={() => handleSortProperty("date")}
              >
                Date
                {sortProperty === "date" && (
                  <span className="tick-mark">&#10003;</span>
                )}
              </div>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">
              <div
                className={`sort-option ${
                  sortOrder === "asc" ? "selected" : ""
                }`}
                onClick={() => handleSortOrder("asc")}
              >
                Asc
                {sortOrder === "asc" && (
                  <span className="tick-mark">&#10003;</span>
                )}
              </div>
            </Dropdown.Item>
            <Dropdown.Item eventKey="4">
              {" "}
              <div
                className={`sort-option ${
                  sortOrder === "desc" ? "selected" : ""
                }`}
                onClick={() => handleSortOrder("desc")}
              >
                Desc
                {sortOrder === "desc" && (
                  <span className="tick-mark">&#10003;</span>
                )}
              </div>
            </Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
    </>
  );
};

export default Search;
