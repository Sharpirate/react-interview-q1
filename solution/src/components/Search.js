export default function Search({ value, onChange, isValid }) {
  return (
    <div>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={value}
          onChange={onChange}
        />
      </div>
      {!isValid && <p>this name has already been taken</p>}
    </div>
  );
}
