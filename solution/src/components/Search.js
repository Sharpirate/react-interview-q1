export default function Search({ value, onChange, isValid }) {
  return (
    <div>
      <div>
        <label className="name-label" htmlFor="name">
          Name
        </label>
        <input
          class="name-input"
          id="name"
          name="name"
          type="text"
          value={value}
          onChange={onChange}
        />
      </div>
      {!isValid && (
        <p className="invalid-name">this name has already been taken</p>
      )}
    </div>
  );
}
