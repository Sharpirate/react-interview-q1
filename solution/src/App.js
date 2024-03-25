import "./App.css";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import { useState, useEffect, useCallback } from "react";
import Saved from "./components/Saved";
import { getLocations, isNameValid } from "./mock-api/apis";
import { debounce } from "lodash";

function App() {
  // In terms of customer experience and efficiency, I have used semantic HTML elements to ensure that:
  // The whole interface can be navigated via keyboard allowing for faster interaction with the UI
  // The whole interface is announced correctly by screen readers
  // Additionally, if we want to avoid layout shift we can use absolute positions for certain elements such as the table and invalid name Message
  // I didn't have enough time to implement responsive styling but I would do it with media queries
  // I would position the table Name and Location columns one below another and I would make the width of the Name and Location input elements be relative to the current screen as opposed to a fixed width
  const [locationList, setLocationList] = useState(null);
  const [name, setName] = useState("");
  const [isValidName, setIsValidName] = useState(true);
  const [location, setLocation] = useState("");
  const [saved, setSaved] = useState([]);

  const validate = useCallback(
    debounce(async (name) => {
      try {
        const result = await isNameValid(name);
        setIsValidName(result);
      } catch (e) {
        // TODO: error handling
      }
    }, 200),
    []
  );

  useEffect(() => {
    async function fetchLocations() {
      try {
        const result = await getLocations();
        setLocationList(result);
        setLocation(result[0]);
      } catch (e) {
        // TODO: error handling
      }
    }

    fetchLocations();
  }, [setLocationList]);

  useEffect(() => {
    if (name !== "") {
      validate(name);
    }
  }, [name, validate]);

  function onLocationChange(e) {
    setLocation(e.target.value);
  }

  function onNameChange(e) {
    setName(e.target.value);
  }

  function handleSave() {
    if (isValidName && name && location) {
      setSaved([...saved, { name, location }]);
    }
  }

  function handleClear() {
    setSaved([]);
  }

  return (
    <div className="app">
      <div className="content">
        <Search isValid={isValidName} value={name} onChange={onNameChange} />
        {locationList && (
          <Dropdown
            data={locationList}
            value={location}
            onChange={onLocationChange}
          />
        )}
        <Saved data={saved} handleSave={handleSave} handleClear={handleClear} />
      </div>
    </div>
  );
}

export default App;
