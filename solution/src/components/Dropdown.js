export default function Dropdown({ data, value, onChange }) {
  return (
    <div>
      <label htmlFor="countries">Location</label>

      <select name="countries" id="countries" value={value} onChange={onChange}>
        {data.map((country) => (
          <option key={country}>{country}</option>
        ))}
      </select>
    </div>
  );
}
