import "./Notes.css";
import Masonry from "react-masonry-css";

export const Notes = ({ children }) => {
  const breakpointColumnsObj = {
    default: 7,
    1800: 6,
    1500: 5,
    1300: 4,
    1050: 3,
    800: 2,
    500: 1,
  };

  return (
    <div className="center">
      <Masonry className="notes" breakpointCols={breakpointColumnsObj}>
        {children.length !== 0 ? children : "You don't have any notes"}
      </Masonry>
    </div>
  );
};
