import "./App.css";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import { useState, useEffect } from "react";
import Saved from "./components/Saved";
import { getLocations, isNameValid } from "./mock-api/apis";

function App() {
  const [locationList, setLocationList] = useState(null);
  const [name, setName] = useState("");
  const [isValidName, setIsValidName] = useState(true);
  const [location, setLocation] = useState("");
  const [saved, setSaved] = useState([]);

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
    async function validateName() {
      try {
        const result = await isNameValid(name);
        setIsValidName(result);
      } catch (e) {
        // TODO: error handling
      }
    }

    validateName();
  }, [name]);

  function onLocationChange(e) {
    setLocation(e.target.value);
  }

  function onNameChange(e) {
    setName(e.target.value);
  }

  function handleSave() {
    setSaved([...saved, { name, location }]);
  }

  function handleClear() {
    setSaved([]);
  }

  return (
    <div>
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
  );
}

export default App;
