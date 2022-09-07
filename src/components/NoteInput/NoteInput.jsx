import "./NoteInput.css";

export const NoteInput = ({ inputValue, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="noteInput">
        <input
          className="noteInput__input"
          type="text"
          placeholder="Take a note..."
          value={inputValue}
          onChange={onChange}
        />
        <button>submit</button>
      </div>
    </form>
  );
};
