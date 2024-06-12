import React, { useState } from "react";
import useQuiz7 from "./useQuiz7";

function Quiz7_2(props) {
    const [answerWrite, correct, answerNum, handleChange, handleClick] = useQuiz7('Quiz7_2');

    const TableGroup = [
        {
            gNumber: '1번',
            gImg: props.img1,
            gName: '나비 자세',
            gOption: '(가)',
            gGood: '골반교정',
        },
        {
            gNumber: '2번',
            gImg: props.img2,
            gName: '비둘기 자세',
            gOption: '(나)',
            gGood: '어깨결림 완화',
        },
        {
            gNumber: '3번',
            gImg: props.img3,
            gName: '굴렁쇠 자세',
            gOption: '(다)',
            gGood: '혈액순환',
        },
        {
            gNumber: '4번',
            gImg: props.img4,
            gName: '아치 자세',
            gOption: '(라)',
            gGood: '허리통증 완화',
        },
    ];

    return (
        <>
            <div className="Quiz7-container">
                <h2>Q. 앞서 기억해 둔 요가자세 중 (가), (나), (다), (라)에 들어갈 자세 분류를 적어보세요.</h2>
                <table className="Quiz7-table" align="center" border={1}>
                    <thead><th colSpan={4}>[ 보기 ]</th></thead>
                    <tbody>
                        {TableGroup.map((TableGroup) => (
                            <>
                                <tr>
                                    <th rowSpan={3}>{TableGroup.gNumber}</th>
                                    <td rowSpan={3}><img src={TableGroup.gImg}/></td>
                                    <td width="40%" colSpan={2}>{TableGroup.gName}</td>
                                </tr>

                                <tr>
                                    <td width="15%">자세 분류</td>
                                    <td>{TableGroup.gOption}</td>
                                </tr>   

                                <tr>
                                    <td width="15%">효과</td>
                                    <td>{TableGroup.gGood}</td>
                                </tr>
                            </>
                            ))}
                    </tbody>
                </table>
            </div>

            <div className="Quiz7-answer">
                <div className="Quiz7-answer-content">
                    {answerWrite.map((answer, index) => (
                        <div key={index}>
                            <label className="Quiz7-answer-content-inner">{answerNum[index]}</label>
                            <input className="Quiz7-answer-content-inner" type="text" value={answer} onChange={(event) => handleChange(index, event.target.value)}/>
                        </div>
                    ))}
                </div>
                <div className="Quiz7-answer-content">
                    <button className="Quiz7-answer-button" onClick={handleClick}>정답 확인</button>
                </div>
                {correct && <p className="Quiz7-answer-content">{correct}</p>}
            </div>
        </>
    );
}

export default Quiz7_2;
