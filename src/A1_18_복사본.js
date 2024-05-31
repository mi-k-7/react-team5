import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import A1_18_Quiz_1 from "./questions/A1_18_Quiz_1";
import A1_18_Quiz_2 from "./questions/A1_18_Quiz_2";
import A1_18_Quiz_3 from "./questions/A1_18_Quiz_3";

import img1 from "./assets/1_18_1.jpg";
import img2 from "./assets/1_18_2.jpg";
import img3 from "./assets/1_18_3.jpg";
import img4 from "./assets/1_18_4.jpg";

const styles = {
    header: {
        width: "100%",
        height: "150px",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "lightgray",
    },
    questionTitle: {
        margin: "40px 200px",
    },
    question: {
        margin: "20px 200px",
        display: "block",
        flexDirection: "row",
    },
   answer: {
        margin: "40px 200px",
        padding: 40,
        display: "block",
        flexDirection: "row",
        border: "2px solid grey",
        borderRadius: 16,
        justifyContent: "center",
    },
    answerContent: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        fontSize: 20,

    },
    answerContentInner: {
        margin: 10,
        padding: 10,
        width: 150,
    },
    answerButton: {
        margin: 10,
        padding: 10,
        width: 150,
        fontSize: 17,
        flexDirection: "row",
        justifyContent: "center",
    },
    table: {
        width: "85%",
        fontSize: 20,
        textAlign: "center",
    },
};

const Q1 = <A1_18_Quiz_1 styles={styles} img1={img1} img2={img2} img3={img3} img4={img4} />;
const Q2 = <A1_18_Quiz_2 styles={styles} img1={img1} img2={img2} img3={img3} img4={img4} />;
const Q3 = <A1_18_Quiz_3 styles={styles} img1={img1} img2={img2} img3={img3} img4={img4} />;
const Q4 = "Q4 화면";
const Q5 = "Q5 화면";
const Q6 = "Q6 화면";
const Q7 = "Q7 화면";


function A1_18_복사본(props) {
    //[보기] 2분 간 보인 후 비활성화
    const [visible, setVisible] = useState(true);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setVisible(false);
        }, 100000);
        return () => clearTimeout(timeout);
    }, []);

    //[보기] 2분 간 보일 때 숨어져 있다가 2분 후 활성화
    const [invisible, setInvisible] = useState(false);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setInvisible(true);
        }, 1000);
        return () => clearTimeout(timeout);
    }, []);
    
    //문제 랜덤 선정
    const questions = [Q2];
    const random = parseInt(Math.random() * questions.length);

    return (
        <div>
            <h1 style={styles.header}>인지 중재 치료</h1>
            {visible && 
                <div>
                    <h2 style={styles.questionTitle}>Q. 다음은 각 요가자세와 효과입니다. 요가자세와 효과를 기억해 주세요. 2분 후 문제가 나타납니다.</h2>
                    <div style={styles.question}>
                        <table style={styles.table}  align="center" border={1}>
                            <thead><th colSpan={4}>[ 보기 ]</th></thead>
                            <tbody>
                                <tr>
                                    <th rowSpan={3}>1번</th>
                                    <td rowSpan={3}><img src={img1}/></td>
                                    <td colSpan={2}>나비 자세</td>
                                </tr>
                                <tr>
                                    <td>자세 분류</td> <td>앉은 자세</td>
                                </tr>
                                <tr>
                                    <td>효과</td> <td>골반교정</td>
                                </tr>
                                <tr>
                                    <th rowSpan={3}>2번</th>
                                    <td rowSpan={3}><img src={img2}/></td>
                                    <td colSpan={2}>비둘기 자세</td>
                                </tr>
                                <tr>
                                    <td>자세 분류</td> <td>앉은 자세</td>
                                </tr>
                                <tr>
                                    <td>효과</td> <td>어깨결림 완화</td>
                                </tr>
                                <tr>
                                    <th rowSpan={3}>3번</th>
                                    <td rowSpan={3}><img src={img3}/></td>
                                    <td colSpan={2}>굴렁쇠 자세</td>
                                </tr>
                                <tr>
                                    <td>자세 분류</td> <td>누운 자세</td>
                                </tr>
                                <tr>
                                    <td>효과</td> <td>혈액순환</td>
                                </tr>
                                <tr>
                                    <th rowSpan={3}>4번</th>
                                    <td rowSpan={3}><img src={img4}/></td>
                                    <td colSpan={2}>아치 자세</td>
                                </tr>
                                <tr>
                                    <td>자세 분류</td> <td>누운 자세</td>
                                </tr>
                                <tr>
                                    <td>효과</td> <td>허리통증 완화</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div> 
            }
            {invisible &&
                <div>
                    {questions[random]}
                    <button><Link to={'..'}>이전</Link></button>
                    <button><Link to={'/A3_2'}>다음 문제</Link></button>
                </div>
            }
        </div>
    );
}

export default A1_18_복사본;