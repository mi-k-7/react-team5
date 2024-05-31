import React, {useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";

function Page1(props) {
    //몇 초 뒤에 화면 넘어가게끔 할 때
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate("/Page2");
        }, 10000);
    }, []);

    return (
        <div>
            <h1>1번입니다</h1>
            <Link to={'/page2'}>2번</Link>
        </div>
    );
}

export default Page1;