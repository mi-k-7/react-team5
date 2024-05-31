import React from "react";
import { Link } from "react-router-dom";

function Page3(props) {
    return (
        <div>
            <h1>3번입니다</h1>
            <Link to={'/'}>시작</Link>
        </div>
    );
}

export default Page3;