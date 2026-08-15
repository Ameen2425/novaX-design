import "./Loader.css";

function Loader() {
  return (
    <div className="loader-container">
      {[1, 2, 3, 4].map((item) => (
        <div className="card" key={item}>
          <div className="image"></div>
          <div className="title"></div>
          <div className="text"></div>
          <div className="button"></div>
        </div>
      ))}
    </div>
  );
}

export default Loader;