import { useState } from "react";

function useQuiz7(componentType) {
    const [answerWrite, setanswerWrite] = useState(Array(4).fill(''));
    const [correct, setCorrect] = useState('');

    var componentType;
    const answerNum = ['(가)', '(나)', '(다)', '(라)'];
    // const answerCheck = ['나비 자세', '비둘기 자세', '굴렁쇠 자세', '아치 자세'];
    if (componentType === 'Quiz7_1') {
        var answerCheck = ['나비 자세', '비둘기 자세', '굴렁쇠 자세', '아치 자세'];
    } else if (componentType === 'Quiz7_2') {
        var answerCheck = ['앉은 자세', '앉은 자세', '누운 자세', '누운 자세'];
    } else if (componentType === 'Quiz7_3') {
        var answerCheck = ['골반교정', '어깨결림 완화', '혈액순환', '허리통증 완화'];
    }
    
    const handleChange = (index, value) => {
        const newAnswer = [...answerWrite];
        newAnswer[index] = value;
        setanswerWrite(newAnswer);
    };

    const handleClick = () => {
        const pass = answerWrite.every((answer,index) => answer == answerCheck[index]);
        if (pass) setCorrect('정답입니다!');
        else setCorrect('오답입니다. 다시 풀어보세요.');    
    };

    return [answerWrite, correct, answerNum, handleChange, handleClick];
}

export default useQuiz7;