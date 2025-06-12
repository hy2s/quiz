
const Results = ({onRestart, appScore}) => {
  return (
    <div className="result">
      <p>퀴즈 종료</p>
      <p>최종 점수 : {appScore}점</p>
      <button onClick = {()=>{onRestart()}}>다시 시작</button>
    </div>
  );
};

export default Results;