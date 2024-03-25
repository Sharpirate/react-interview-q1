import { useState } from "react";

export default function Search({ value, onChange, isNotAvailable }) {
  return (
    <div>
      <div className="">
        <label for="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={value}
          onChange={onChange}
        />
      </div>
      {isNotAvailable && <p>this name has already been taken</p>}
    </div>
  );
}
