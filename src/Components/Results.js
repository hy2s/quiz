
const Results = ({onRestart, appScore}) => {
  return (
    <div className="result">
      <h2>당신의 문화력은</h2>
      <h1>{appScore}점</h1>
      <h3>10문제 중 <span>8문제</span>를 맞혔어요!</h3>
      <button className="btn-style" onClick = {()=>{onRestart()}}>다시 시작</button>
    </div>
  );
};

export default Results;