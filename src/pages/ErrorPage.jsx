import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            Error 404!
            <p className="">Page not Found!</p>
            <Link to={"/"} className="button ">Go Home</Link>
        </div>
    );
};

export default ErrorPage;