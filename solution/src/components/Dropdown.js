export default function Dropdown({ data, value, onChange }) {
  return (
    <div>
      <label for="countries">Location</label>

      <select name="countries" id="countries">
        {data.map((country) => (
          <option key={country} selected={country === value}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
}
