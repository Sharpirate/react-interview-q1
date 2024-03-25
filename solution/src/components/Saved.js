export default function Saved({ data }) {
  return (
    <div>
      <div>
        <button>Clear</button>
        <button>Add</button>
      </div>

      <table>
        <tr>
          <th>Name</th>
          <th>Location</th>
        </tr>
        {data.map(({ name, location }) => (
          <tr key={`${name}-${location}`}>
            <td>{name}</td>
            <td>{location}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
