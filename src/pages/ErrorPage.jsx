import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
        <h2>Error 404</h2>
    
      <p className="">Page not Found!</p>
      <Link to={"/"}>
        <button className="button mid-btn">Go Home</button>

      </Link>
    </div>
  );
};

export default ErrorPage;
