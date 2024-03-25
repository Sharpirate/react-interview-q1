export default function Saved({ data, handleSave, handleClear }) {
  return (
    <div>
      <div className="buttons">
        <button className="button" onClick={handleClear}>
          Clear
        </button>
        <button className="button" onClick={handleSave}>
          Add
        </button>
      </div>
      {/* table */}
      <table className="table">
        <thead>
          <tr>
            <th className="table-name">Name</th>
            <th className="table-location">Location</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ name, location }) => (
            <tr key={`${name}-${location}`}>
              <td className="name-td">{name}</td>
              <td className="location-td">{location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
