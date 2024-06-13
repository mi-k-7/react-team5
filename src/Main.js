import React, {useEffect} from "react";
import { Link } from "react-router-dom";

function Main(props) {
    return (
        <div>
            <h2>메인 화면</h2>
            
            <div className='next_page'>
                <p>toOtherPage</p>
                <Link to={'/Quiz7'} className='start-button'>시작하기</Link>
            </div>
        </div>
    );
}

export default Main;