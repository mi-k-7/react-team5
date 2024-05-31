import React, {useEffect} from "react";
import { Link } from "react-router-dom";

function Main(props) {
    return (
        <div>
            <h2>메인 화면</h2>
            <button><Link to={'./A1_18'}>시작하기</Link></button>
        </div>
    );
}

export default Main;