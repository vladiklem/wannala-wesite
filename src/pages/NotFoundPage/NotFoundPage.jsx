import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="container">
            <h1 className="h2">
                oh ma gosh, we didn't find any page by your request, may be{" "}
                <Link to="/">Home page</Link> will help you
            </h1>
        </div>
    );
};

export default NotFoundPage;
