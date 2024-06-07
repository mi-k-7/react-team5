import React, { useState } from "react";
import useA1_18_Quiz from "./useA1_18_Quiz";

function A1_18_Quiz_1(props) {
    const [answerWrite, correct, answerNum, handleChange, handleClick] = useA1_18_Quiz('A1_18_Quiz_1');

    const TableGroup = [
        {
            gNumber: '1번',
            gImg: props.img1,
            gName: '(가)',
            gOption: '앉은 자세',
            gGood: '골반교정',
        },
        {
            gNumber: '2번',
            gImg: props.img2,
            gName: '(나)',
            gOption: '앉은 자세',
            gGood: '어깨결림 완화',
        },
        {
            gNumber: '3번',
            gImg: props.img3,
            gName: '(다)',
            gOption: '누운 자세',
            gGood: '혈액순환',
        },
        {
            gNumber: '4번',
            gImg: props.img4,
            gName: '(라)',
            gOption: '누운 자세',
            gGood: '허리통증 완화',
        },
    ];
    
    return (
        <div>
            <h2 className="questionTitle">Q. 앞서 기억해 둔 요가자세 중 (가), (나), (다), (라)에 들어갈 자세의 이름을 적어보세요.</h2>
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

export default A1_18_Quiz_1;
