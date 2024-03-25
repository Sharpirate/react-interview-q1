import "./App.css";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import { useState, useEffect, useCallback } from "react";
import Saved from "./components/Saved";
import { getLocations, isNameValid } from "./mock-api/apis";
import { debounce } from "lodash";

function App() {
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
