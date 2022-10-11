import "./NotFound.css";

export const NotFound = () => {
  return (
    <>
      <div className="notFound">
        <img
          className="notFound__img"
          src="https://http.cat/404"
          alt="a cat hiding under some paper"
        />
      </div>
      <div className="notFound__text">Not found</div>
    </>
  );
};
