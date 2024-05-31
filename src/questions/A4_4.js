import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./A.css";

function A4_4(props) {
    const [answerWrite, setanswerWrite] = useState('');
    const [random, setRandom] = useState([]);
    const [correct, setCorrect] = useState(null);

    const SokdamGroup = [
        {
            gName: 'group1',
            gQuestion: "오는 말이 고와야 가는 말이 곱다.",
            gAnswer: "가는 말이 고와야 오는 말이 곱다.",
        },
        {
            gName: 'group2',
            gQuestion: "고래는 게 편.",
            gAnswer: "가재는 게 편.",
        },
        {
            gName: 'group3',
            gQuestion: "소똥도 약에 쓰려면 없다.",
            gAnswer: "개똥도 약에 쓰려면 없다.",
        },
        {
            gName: 'group4',
            gQuestion: "노력 끝에 낙이 온다.",
            gAnswer: "고생 끝에 낙이 온다.",
        },
        {
            gName: 'group5',
            gQuestion: "소나기에 옷 젖는 줄 모른다.",
            gAnswer: "가랑비에 옷 젖는 줄 모른다.",
        },
    ];
    const sokdamRandom = (array) => {
        const indexRandom = Math.floor(Math.random() * array.length);
        return array[indexRandom];
    };
    
    // const group = sokdamRandom(SokdamGroup);
    // console.log(group);
   
    useEffect(() => {
        const group = sokdamRandom(SokdamGroup);
    // console.log(random);
        setRandom(group);
      }, []);

    const handleChange = (index, value) => {
            const newAnswer = [...answerWrite];
            newAnswer[index] = value;
            setanswerWrite(newAnswer);
        };

    const handleCheck = () => {
        setCorrect(answerWrite === random.gAnswer);
    }

    return (
        <div>
            <h1 className="header">인지 중재 치료</h1>
                <div>
                    <h2 className="questionTitle">Q. 다음 속담의 틀린 부분을 바르게 고친 후 따라 읽어보세요.</h2>
                    <div className="question">
                        <h3>{random.gQuestion}</h3>
                    </div>

                        <div className="answer-A4">
                            <div className="answerContent">
                                    <label className="answerContentInner-A4"></label>
                                    <input className="answerContentInner-A4" type="text" onChange={(event) => handleChange()}/>
                            </div>
                            <div className="answerButtonContent">
                                <button className="answerButton-A3" onClick={handleCheck}>정답 확인</button>
                            </div>
                            {correct !== null && (
                                <p className="answerP">{correct ? '정답입니다!' : '오답입니다. 다시 풀어보세요.'}</p>
                            )}
                        </div>

                    <button><Link to={'/'}>처음으로</Link></button>
                </div>
        </div>
    );
}

export default A4_4;