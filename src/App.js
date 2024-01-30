import logo from './logo.svg';
import './App.css';
import React from "react";
import ToDo from "./ToDo";
import Sample from './Sample';

class App extends React.Component {
  constructor(props){
    super(props);
    //3개의 객체를 가진 배열을 생성
    this.state = {
      items:[
        {id:0, "title":"hello", "done":true},
        {id:1, "title":"react", "done":true},
        {id:2, "title":"vue", "done":false},
        {id:3, "title":"angular", "done":true}
      ]
      }
    // this.state = {item:{id:0, "title":"hello", "done":true}}
    //App.js에 this.state.item이라는 이름으로 데이터를 생성
    //ToDo에게 item이라는 이름으로 데이터를 전달

  }
  render(){
    //배열을 순회하면서 출력할 내용을 생성
    //item은 배열을 순회할 때 각각의 데이터이고 idx는 인덱스
    //배열을 순회하면서 출력물을 만들 때는 key를 생성 / 안만들면 출력에는 문제 없지만 콘솔에 에러 출력
    var display = this.state.items.map((item, idx)=>(
      <ToDo item = {item} key={item.id}></ToDo>
    ));
    // var display = this.state.items.map((item, idx)=>{
    //   <ToDo item = {item} key={item.id}></ToDo>
    // });
    return (
      <div className="App">
        {display}
      </div>
    );
  }
  
}

export default App;
