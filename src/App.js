import { useState } from 'react';
import './App.css';
import Box from './component/Box';

//박스두개(타이틀,사진,결과값)
//가위바위보버튼이 있음
//버튼으르 클릭하면 클릭한 값이 박스에 보임
//컴퓨터는 랜덤하게 아이템 선택 됨
// 3,4의 결과를 가지고 누가 이겼는지 승패를 따진다
//승패 결과에 따라 테두리 색 바뀜

const choice = {
  rock:{
    name : "Rock",
    img : "img/rock.png"
  },
  scissor:{
    name:"Scissor",
    img : "img/scissor.png"
  },
  paper:{
    name:"Paper",
    img:"img/paper.png"
  },

};

function App() {
  const [userSelect,setUserSelect] = useState(null)
  const play=(userChoice)=>{
    setUserSelect(choice[userChoice])
  }
  return (
    <div>
      <div className="main">
        <Box title="YOU" item={userSelect}/>
        {/* <Box title="COMPUTER"/> */}
      </div>
      <div className="main">
        <button onClick={() =>play("scissor")}>가위</button>
        <button onClick={() =>play("rock")}>바위</button>
        <button onClick={() =>play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
