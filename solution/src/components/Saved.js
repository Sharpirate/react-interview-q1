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

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ name, location }) => (
            <tr key={`${name}-${location}`}>
              <td>{name}</td>
              <td>{location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
