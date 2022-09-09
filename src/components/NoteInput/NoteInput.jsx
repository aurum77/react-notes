import "./NoteInput.css";

export const NoteInput = ({
  inputTitle,
  inputContent,
  handleInputTitleChange,
  handleInputContentChange,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="noteInput">
        <div className="noteInput__box">
          <input
            className="noteInput__title"
            type="text"
            placeholder="Title"
            value={inputTitle}
            onChange={handleInputTitleChange}
          />
          <input
            className="noteInput__content"
            type="text"
            placeholder="Take a note..."
            value={inputContent}
            onChange={handleInputContentChange}
          />
          <button className="noteInput__button">Submit</button>
        </div>
      </div>
    </form>
  );
};
