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
  const [computerSelect,setComputerSelect]=useState(null);
  const [result,setResult]=useState("");

  const play=(userChoice)=>{
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice],computerChoice));

  };

  const judgement = (user,computer) => {
    //유저가 선택한 값과 컴퓨터가 같음 
    //만약 유저가 바위를 선태갷ㅆ다 컴퓨터가 가위다 >> 유저가 이김 
    //유저가 바위를 선택하고 컴퓨터가 종이 선택함
    //유저가 가위 서냍갛고 컴퓨터가 종이 선택함
    // 유저가 가위 선택했는데 컴퓨터가 바위
    //유저가 보 선택 컴퓨터가 바위 
    //유저 보 컴퓨터 가위 
    if(user.name === computer.name){
      return "tie";
    }else if(user.name =="Rock")
    return computer.name =="Scissor"?"win":"lose";
      else if(user.name =="Scissor")
      return computer.name =="Pager"?"win":"lose";
      else if(user.name == "Paper")
      return computer.name == "Rock"?"win":"lose";
  }

  const randomChoice =()=>{
    let itemArray= Object.keys(choice); // 객체에 키값만 뽑아서 어레이로 만드는 함수 

    let randomitem=Math.floor(Math.random()*itemArray.length);
    let final=itemArray[randomitem];
    return choice[final];
  };


  return (
    <div>
      <div className="main">
        <Box title="YOU" item={userSelect} result={result}/>
        <Box title="COMPUTER" item={computerSelect} result={result}/>
      </div>
      <div className="main">
        <button onClick={() =>play("scissor")}>가위</button>
        <button onClick={() =>play("rock")}>바위</button>
        <button onClick={() =>play("paper")}>보</button>
      </div>
    </div>
  );
};

export default App;
