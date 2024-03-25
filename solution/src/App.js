import "./App.css";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import { useState } from "react";
import Saved from "./components/Saved";

const COUNTRIES = ["China", "USA", "Brazil"];

function App() {
  const [name, setName] = useState(null);
  const [location, setLocation] = useState(COUNTRIES[0]);
  const [saved, setSaved] = useState([
    { name: "Bogomil", location: "China" },
    { name: "Ivan", location: "USA" },
    { name: "Ivan", location: "Brazil" },
  ]);

  function onLocationChange(e) {
    setLocation(e.target.value);
  }

  function onNameChange(e) {
    setName(e.target.value);
  }

  return (
    <div>
      <Search isNotAvailable={true} value={name} onChange={onNameChange} />
      <Dropdown data={COUNTRIES} value={location} onChange={onLocationChange} />
      <Saved data={saved} />
    </div>
  );
}

export default App;
