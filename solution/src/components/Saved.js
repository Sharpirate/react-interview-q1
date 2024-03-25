export default function Saved({ data, handleSave, handleClear }) {
  return (
    <div>
      <div>
        <button onClick={handleClear}>Clear</button>
        <button onClick={handleSave}>Add</button>
      </div>

      <table>
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
