import "./Notes.css";

export const Notes = ({children}) => {
  return(
    <div className="notes">
      {(children.length !== 0 ? children : "You don't have any notes")}
    {console.log(children)}
    </div>
  )
};
