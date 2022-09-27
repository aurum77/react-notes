import "./Notes.css";

export const Notes = ({ children }) => {
  return (
    <div>
      <div className="notes__container">
        {children}
      </div>
    </div>
  );
};
