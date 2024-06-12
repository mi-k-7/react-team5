import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Quiz9.css";

function Quiz9(props) {
    const [answerWrite, setanswerWrite] = useState('');
    const [random, setRandom] = useState([]);
    const [correct, setCorrect] = useState(null);

    const SokdamGroup = [
        {
            gName: 'group1',
            gQuestion: "오는 말이 고와야 가는 말이 곱다",
            gAnswer: "가는 말이 고와야 오는 말이 곱다",
        },
        {
            gName: 'group2',
            gQuestion: "고래는 게 편",
            gAnswer: "가재는 게 편",
        },
        {
            gName: 'group3',
            gQuestion: "소똥도 약에 쓰려면 없다",
            gAnswer: "개똥도 약에 쓰려면 없다",
        },
        {
            gName: 'group4',
            gQuestion: "노력 끝에 낙이 온다",
            gAnswer: "고생 끝에 낙이 온다",
        },
        {
            gName: 'group5',
            gQuestion: "소나기에 옷 젖는 줄 모른다",
            gAnswer: "가랑비에 옷 젖는 줄 모른다",
        },
    ];
    
    const sokdamRandom = parseInt(Math.random() * SokdamGroup.length);
    useEffect(() => {
        const group = SokdamGroup[sokdamRandom];
    // console.log(random);
        setRandom(group);
      }, []);

    const handleChange = (gName, value) => {
            setanswerWrite({
                ...answerWrite,
                [gName]: value
            });
        };

    const handleCheck = () => {
        setCorrect(answerWrite[random.gName] === random.gAnswer);
    }

    return (
        <>
            <main className="Quiz9-main">
                <div className="Quiz9-container">
                    <h2>Q. 다음 속담의 틀린 부분을 바르게 고친 후 따라 읽어보세요.</h2>
                    <h3>{random.gQuestion}</h3>
                </div>

                <div className="Quiz9-answer">
                    <div className="Quiz9-answer-content">
                        <label className="Quiz9-answer-content-inner"></label>
                        <input className="answerContentInner-A4" type="text" onChange={(event) => handleChange(random.gName, event.target.value)}/>
                    </div>
                    <div className="Quiz9-answer-button-content">
                        <button className="Quiz9-answer-button" onClick={handleCheck}>정답 확인</button>
                    </div>
                    {correct !== null && (
                        <p className="Quiz9-answer-p">{correct ? '정답입니다!' : '오답입니다. 다시 풀어보세요.'}</p>
                    )}
                </div>
            </main>
            <button><Link to={'/'}>처음으로</Link></button>
        </>
    );
}

export default Quiz9;