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
      <div className="quiz-title">
        <h2>Q{currentIdx+1}.</h2>
        <p>{currentQuiz.question}</p>
      </div>
      <div className="choices">
        {
          currentQuiz.choices.map((item, idx)=>{
            return <button key={idx} onClick={()=>{handleClick(item)}}>{item}</button>
          })
        }
      </div>
      <button className="btn-style">다음 문제 →</button>
    </div>
  );
};

export default Quizpage;