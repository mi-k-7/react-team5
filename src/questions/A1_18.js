import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./A.css";

import A1_18_Quiz_1 from "./A1_18_Quiz_1";
import A1_18_Quiz_2 from "./A1_18_Quiz_2";
import A1_18_Quiz_3 from "./A1_18_Quiz_3";

import img1 from "../assets/1_18_1.jpg";
import img2 from "../assets/1_18_2.jpg";
import img3 from "../assets/1_18_3.jpg";
import img4 from "../assets/1_18_4.jpg";

const TableGroup = [
    {
        gNumber: '1번',
        gImg: img1,
        gName: '나비 자세',
        gOption: '앉은 자세',
        gGood: '골반교정',
    },
    {
        gNumber: '2번',
        gImg: img2,
        gName: '비둘기 자세',
        gOption: '앉은 자세',
        gGood: '어깨결림 완화',
    },
    {
        gNumber: '3번',
        gImg: img3,
        gName: '굴렁쇠 자세',
        gOption: '누운 자세',
        gGood: '혈액순환',
    },
    {
        gNumber: '4번',
        gImg: img4,
        gName: '아치 자세',
        gOption: '누운 자세',
        gGood: '허리통증 완화',
    },
];

const Q1 = <A1_18_Quiz_1  img1={img1} img2={img2} img3={img3} img4={img4} />;
const Q2 = <A1_18_Quiz_2  img1={img1} img2={img2} img3={img3} img4={img4} />;
const Q3 = <A1_18_Quiz_3  img1={img1} img2={img2} img3={img3} img4={img4} />;

function A1_18(props) {
    //[보기] 2분 간 보인 후 비활성화
    const [visible, setVisible] = useState(true);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setVisible(false);
        }, 2000);
        return () => clearTimeout(timeout);
    }, []);

    //[보기] 2분 간 보일 때 숨어져 있다가 2분 후 활성화
    const [invisible, setInvisible] = useState(false);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setInvisible(true);
        }, 2000);
        return () => clearTimeout(timeout);
    }, []);
    
    //문제 랜덤 선정
    const questions = [Q1, Q2, Q3];
    const random = parseInt(Math.random() * questions.length);
   
    return (
        <div>
            <h1 className="header">인지 중재 치료</h1>
            {visible && 
                <div>
                    <h2 className="questionTitle">Q. 다음은 각 요가자세와 효과입니다. 요가자세와 효과를 기억해 주세요. 2분 후 문제가 나타납니다.</h2>
                    <div className="question">
                        <table className="table" align="center" border={1}>
                            <thead><th colSpan={4}>[ 보기 ]</th></thead>
                            <tbody>
                                {TableGroup.map((TableGroup) => (
                                    <>
                                        <tr>
                                            <th rowSpan={3}>{TableGroup.gNumber}</th>
                                            <td rowSpan={3}><img src={TableGroup.gImg}/></td>
                                            <td colSpan={2}>{TableGroup.gName}</td>
                                        </tr>

                                        <tr>
                                            <td>자세 분류</td>
                                            <td>{TableGroup.gOption}</td>
                                        </tr>

                                        <tr>
                                            <td>효과</td>
                                            <td>{TableGroup.gGood}</td>
                                        </tr>
                                    </>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div> 
            }
            {invisible &&
                <div>
                    {/* <h2 style={styles.questionTitle}>Q. 앞서 기억해 둔 요가자세 중 (가), (나), (다), (라)에 들어갈 자세 이름을 적어보세요.</h2> */}
                    {questions[random]}
                    <button><Link to={'..'}>이전</Link></button>
                    <button><Link to={'/A3_2'}>다음 문제</Link></button>
                </div>
            }
        </div>
    );
}

export default A1_18;