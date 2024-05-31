//이 파일 사용 안 함

import React from "react";
import { Link } from "react-router-dom";
import A1_18_Quiz_1 from "./A1_18_Quiz_1";
import A1_18_Quiz_2 from "./A1_18_Quiz_2";
import Page3 from "../Page3";

import img1 from "./assets/1_18_1.jpg";
import img2 from "./assets/1_18_2.jpg";
import img3 from "./assets/1_18_3.jpg";
import img4 from "./assets/1_18_4.jpg";

const styles ={
    questionTitle: {
        margin: "40px 200px",
    },
    question: {
        margin: "20px 200px",
        display: "block",
        flexDirection: "row",
        // border: "2px solid grey",
        // borderRadius: 16,
    },
   answer: {
        margin: "40px 200px",
        padding: 40,
        display: "flex",
        flexDirection: "row",
        border: "2px solid grey",
        borderRadius: 16,
        justifyContent: "center",
    },
    answerContent: {
        display: "flex",
        flexDirection: "row",
    },
    answerContentInner: {
        margin: 10,
        padding: 10,
        width: 200,
        fontSize: 20,
        
    },
    answerResult: {
        margin: 10,
        padding: 10,
        fontSize: 20,
    },
    table: {
        width: "70%",
        fontSize: 20,
        textAlign: "center",
    },
};

const Q1 = <A1_18_Quiz_1 styles={styles} img1={img1} img2={img2} img3={img3} img4={img4} />;
const Q2 = <A1_18_Quiz_2 styles={styles} img1={img1} img2={img2} img3={img3} img4={img4} />;
const Q3 = <Page3 />;
const Q4 = "Q4 화면";
const Q5 = "Q5 화면";
const Q6 = "Q6 화면";
const Q7 = "Q7 화면";

function A1_18_Quiz(props) {
    const questions = [Q2];
    const random = parseInt(Math.random() * questions.length);

    return (
        <div>
            {questions[random]}
            <button style={styles.answerResult}><Link to={'..'}>이전</Link></button>
            <button style={styles.answerResult}><Link to={'/A3_2'}>다음 문제</Link></button>
        </div>
    );
}

export default A1_18_Quiz;
