import React from "react";
//react에서 component 클래서를 만들기 위해서 component로부터 상속을 받기
import {ListItem, ListItemText, InputBase, checkbox, Checkbox} from "@material-ui/core";

class Todo extends React.Component {
  //생성자 :constructor
  constructor(props){
    //App.js에서 넘겨준 속성들을 자신의 props에 저장
    //this.props.item 이라는 속성에 앞에서 전달ㅇ한 데이터를 저장
    super(props);//상위에서 넘겨준 모든 props를 현재 클래스에 저장/ 출력만 할거면 state값으로 바꿀 필요가 없다
    //state 생성
    //item이라는 이름으로 props 중에서 item 값을 state로 저장
    //props는 상위 컴포넌트에서 전달한 데이터라서 읽기는 가능하지만 수정이 안됨
    //수정이나 삭제를 하고자하는 경우는 state로 변환을 한다
    this.state={item:props.item}
  }

  //화면에 출력할 내용을 리턴하는 메서드
  render() {
    //const는 상수를 만드는 거고 자주사용하는 데이터를 짧게 사용하기 위해 다른 변수에 대입
    const item = this.state.item;
    return (
      <ListItem>
        <Checkbox checked = {item.done} style={{color: "black"}} ></Checkbox>
        <ListItemText>
          <InputBase inputProps={{"aria-label":"naked"}}
            type="text"
            id={item.id}
            name = {item.id}
            value ={item.title}
            multiline={true}
            fullWidth={true}
            />
        </ListItemText>
      </ListItem>
    )
  }
}
export default Todo;