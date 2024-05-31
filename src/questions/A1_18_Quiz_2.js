import React, { useState } from "react";
import useA1_18_Quiz from "./useA1_18_Quiz";

function A1_18_Quiz_2(props) {
    const [answerWrite, correct, answerNum, handleChange, handleClick] = useA1_18_Quiz('A1_18_Quiz_2');

    return (
        <div>
            <h2 className="questionTitle">Q. 앞서 기억해 둔 요가자세 중 (가), (나), (다), (라)에 들어갈 자세 분류를 적어보세요.</h2>
            <div className="question">
                <table className="table" align="center" border={1}>
                    <thead><th colSpan={4}>[ 보기 ]</th></thead>
                    <tbody>
                        <tr>
                        <th rowSpan={3}>1번</th>
                            <td rowSpan={3}><img src={props.img1}/></td>
                            <td colSpan={2}>나비 자세</td>
                        </tr>
                        <tr>
                            <td>자세 분류</td> <td>(가)</td>
                        </tr>
                        <tr>
                            <td>효과</td> <td>골반교정</td>
                        </tr>
                        <tr>
                            <th rowSpan={3}>2번</th>
                            <td rowSpan={3}><img src={props.img2}/></td>
                            <td colSpan={2}>비둘기 자세</td>
                        </tr>
                        <tr>
                            <td>자세 분류</td> <td>(나)</td>
                        </tr>
                        <tr>
                            <td>효과</td> <td>어깨결림 완화</td>
                        </tr>
                        <tr>
                            <th rowSpan={3}>3번</th>
                            <td rowSpan={3}><img src={props.img3}/></td>
                            <td colSpan={2}>굴렁쇠 자세</td>
                        </tr>
                        <tr>
                            <td>자세 분류</td> <td>(다)</td>
                        </tr>
                        <tr>
                            <td>효과</td> <td>혈액순환</td>
                        </tr>
                        <tr>
                            <th rowSpan={3}>4번</th>
                            <td rowSpan={3}><img src={props.img4}/></td>
                            <td colSpan={2}>아치 자세</td>
                        </tr>
                        <tr>
                            <td>자세 분류</td> <td>(라)</td>
                        </tr>
                        <tr>
                            <td>효과</td> <td>허리통증 완화</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="answer">
                <div className="answerContent-A1">
                    {answerWrite.map((answer, index) => (
                        <div key={index}>
                            <label className="answerContentInner">{answerNum[index]}</label>
                            <input className="answerContentInner" type="text" value={answer} onChange={(event) => handleChange(index, event.target.value)}/>
                        </div>
                    ))}
                </div>
                <div className="answerContent-A1">
                    <button className="answerButton" onClick={handleClick}>정답 확인</button>
                </div>
                {correct && <p className="answerContent-A1">{correct}</p>}
            </div>
        </div>
    );
}

export default A1_18_Quiz_2;
