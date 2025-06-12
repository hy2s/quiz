import { useState } from "react";

const Quizpage = ({quiz,onFinished}) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const currentQuiz = quiz[currentIdx];
  const handleClick = (item) => {
    // 정답인지 아닌지 체크
    const result = ( item === currentQuiz.correct ) ? score+10 : score;
    
    if(currentIdx+1 < quiz.length ){
      setCurrentIdx(currentIdx+1);
      setScore(result);
    } else {
      onFinished(result);
    }
  }
  return (
    <div className="quiz-page">
      <h2>퀴즈({currentIdx+1}/{quiz.length})</h2>
      <p>{currentQuiz.question}</p>
      <div className="choices">
        {
          currentQuiz.choices.map((item, idx)=>{
            return <button key={idx} onClick={()=>{handleClick(item)}}>{item}</button>
          })
        }
      </div>
      <p>현재 점수: {score}</p>
    </div>
  );
};

export default Quizpage;