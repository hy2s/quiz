import { useState } from "react";

const Categoris = ({categoris, onSelect}) => {
  const [selected, setSelected] = useState(null);
  const handleClick = (item) => {
    setSelected(item);
  };
  const handleStart = () => {
    if (selected) {
      onSelect(selected);
    } else {
      alert("카테고리를 선택해주세요!");
    }
  };
  return (
    <div className="category">
      <div className="title-wrap">
        <h2>내 문화력은 어느 정도일까?</h2>
        <h1>문화력 테스트</h1>
      </div>
      <div className="category-wrap">
      <h2>카테고리를 선택해 주세요</h2>
        <div className="categoryBtn-wrap">
          {
            categoris.map((item, idx)=>{
              return (
            <button
              key={idx}
              className={selected === item ? "selected" : ""}
              onClick={() => handleClick(item)}
            >
            {item}
            </button>
              )
            })
          }
        </div>
      </div>
      <button className="btn-style" onClick={handleStart}>시작하기</button>
    </div>
  );
};

export default Categoris;