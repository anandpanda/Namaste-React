import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return (
        <div>
            <h1>404 Error</h1>
            <h3>Oops!! Page not found!</h3>
            <p>{err.status} : {err.statusText}</p>
        </div>
    );
}

export default Error;