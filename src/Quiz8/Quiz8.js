import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Quiz8.css";

function Quiz8(props) {
    const [selected, setSelected] = useState({group1: null, group2: null, group3: null, group4: null});
    const [answerWrite, setanswerWrite] = useState('');
    const [totalScore, setTotalScore] = useState(0);
    const [correct, setCorrect] = useState(null);

    const RadioGroup = [
        {
            gName: 'group1',
            gQuestion: "1. 술을 얼마나 자주 마십니까?",
            gOptions: [
                { value: 1, label: "전혀 마시지 않는다 (0점)", score: 0 },
                { value: 2, label: "한달에 한번 미만(1점)", score: 1},
                { value: 3, label: "한달에 2 ~ 4회(2점)", score: 2},
                { value: 4, label: "1주일에 2 ~ 3회(3점)", score: 3},
                { value: 5, label: "1주일에 4회 이상(4점)", score: 4},
            ]
        },
        {
            gName: 'group2',
            gQuestion: "2. 펑소 술을 마실 때 몇 잔 정도 마십니까?",
            gOptions: [
                { value: 6, label: "0 ~ 2잔(0점)", score: 0 },
                { value: 7, label: "3 ~ 4잔(1점)", score: 1},
                { value: 8, label: "5 ~ 6잔(2점)", score: 2},
                { value: 9, label: "7 ~ 9잔(3점)", score: 3},
                { value: 10, label: "10잔 이상(4점)", score: 4},
            ]
        },
        {
            gName: 'group3',
            gQuestion: "3. 한번 술을 마실 때 소주 1병 또는 맥주 4병 이상의 음주는 얼마나 자주 하십니까?",
            gOptions: [
                { value: 11, label: "전혀 없다(0점)", score: 0 },
                { value: 12, label: "한달에 한번 미만(1점)", score: 1},
                { value: 13, label: "한달에 한번(2점)", score: 2},
                { value: 14, label: "1주일에 한번(3점)", score: 3},
                { value: 15, label: "매일같이(4점)", score: 4},

            ]
        },
        {
            gName: 'group4',
            gQuestion: "4. 친척이나 친구, 또는 의사가 당신이 술 마시는 것을 걱정하거나 술 끊기를 권유한 적이 있습니까?",
            gOptions: [
                { value: 16, label: "전혀 없다(0점)", score: 0 },
                { value: 17, label: "한달에 한번 미만(1점)", score: 1},
                { value: 18, label: "한달에 한번(2점)", score: 2},
                { value: 19, label: "1주일에 한번(3점)", score: 3},
                { value: 20, label: "매일같이(4점)", score: 4},
            ]
        }
    ];

    const TableGroup = [
        {
            gName: '저위험음주자',
            gNum1: '0 ~ 7점',
            gNum2: '0 ~ 4점',
        },
        {
            gName: '위험음주자',
            gNum1: '8 ~ 11점',
            gNum2: '5 ~ 7점',
        },
        {
            gName: '알코올 사용장애 추정자',
            gNum1: '12점 이상',
            gNum2: '8점 이상',
        },
    ];

    const handleChange = (gName, value) => {
        setSelected({
            ...selected,
            [gName]: value
        });
    };

    useEffect(() => {
        const score = Object.values(selected).reduce((acc, value) => {
            const group = RadioGroup.find(group => group.gOptions.some(option => option.value === value));
            const option = group ? group.gOptions.find(option => option.value === value) : null;
            return acc + (option ? option.score : 0);
        }, 0);
        setTotalScore(score);
    }, [selected]);

    if(totalScore > 0) {}

    const handleCheck = () => {
        setCorrect(Number(answerWrite) === totalScore);
        console.log(totalScore);
    }

    return (
        <>
            <main className="Quiz8-main">
                <div className="Quiz8-container">
                        <h2>Q. 음주 습관에 대한 자가 체크리스트입니다. 해당 사항을 클릭하세요.</h2>
                            {RadioGroup.map((group) => (
                                <div key={group.gName}>
                                    <h3>{group.gQuestion}</h3>
                                    {group.gOptions.map((option) => (
                                        <label key={option.value}>
                                            <input className="Quiz8-radioLabel" type="radio" name={group.gName} value={option.value}
                                                checked={selected[group.gName] === option.value}
                                                onChange={() => handleChange(group.gName, option.value)} />
                                            {option.label}
                                        </label>
                                    ))}
                                    <hr />
                                </div>
                            ))}
                    </div>
                
                <div className="Quiz8-answer">
                    {console.log(`총 점수: ${totalScore}`)}
                    <div className="Quiz8-answer-content">
                        1. 귀하의 점수는 <input className="Quiz8-answer-content-inner" type="number" value={answerWrite} onChange={(e) => setanswerWrite(e.target.value)} /> 점입니다.
                        <br/>
                        2. 아래의 표에서 본인의 점수에 해당하는 영역을 누르세요.
                        <table width={"80%"} align="center" border={1}>
                            <thead>
                                <tr>
                                    <td></td>
                                    <td>남성</td>
                                    <td>여성</td>
                                </tr>
                            </thead>
                            <tbody>
                                {TableGroup.map((TableGroup) => (
                                    <>
                                        <tr>
                                            <td>{TableGroup.gName}</td>
                                            <td>{TableGroup.gNum1}</td>
                                            <td>{TableGroup.gNum2}</td>
                                        </tr>
                                    </>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="Quiz8-answer-button-content">
                        <button className="Quiz8-answer-button" onClick={handleCheck}>정답 확인</button>
                    </div>
                    {correct !== null && (
                        <p className="Quiz8-answer-p">{correct ? '정답입니다!' : '오답입니다. 다시 풀어보세요.'}</p>
                    )}
                </div>
            </main>
            <div className="Quiz7-next-button">
                <button><Link to={'/Quiz9'}>다음 문제</Link></button>
            </div>
        </>
    );
}

export default Quiz8;