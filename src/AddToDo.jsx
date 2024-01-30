import {Paper, TextField, Button, Grid} from "@material-ui/core";
import React from "react";

class AddToDo extends React.Component {
  constructor(props) {
    super(props);
    //App.js 파일에서 넘겨준 메서드를 add에 저장
    this.add = props.add;

    //입력한 문자열을 저장하기 위한 속성을 생성
    this.state = {item:{title:""}}
  }
  //Textfield에서 값을 입력할 때마다 호출되는 이벤트 리스너
  //Input 의 내용이 변경될 때 호출
  onInputChange = (e) => {
    //state.title에 입력한 내용을 대입
    const thisItem = this.state.item;
    thisItem.title = e.target.value;
    this.setState({ item: thisItem });
    console.log(thisItem);
    console.log(this.state.item.title);
  };

  //+버튼을 눌렀을 때 호출
  onButtonClick = () => {
    //배열에 데이터를 삽입하는 함수를 호출
      this.add(this.state.item);
      //텍스트 필드를 초기화
      this.setState({ item: { title: "" } });
  };

  //Enter를 눌렀을 때 처리
  enterKeyEventHandler = (e) => {
      if (e.key === "Enter") {
          this.onButtonClick();
      }
  };

  render() {
    return (
      <Paper style = {{margin:16, padding: 16}}>
        <Grid container>
          <Grid xs={11} md={11} item style = {{paddingRight:16}}>
            <TextField placeholder="여기에 작성 " fullWidth onChange={this.onInputChange} value={this.state.title} onKeyPress={this.enterKeyEventHandler}/>
            
          </Grid>
          <Grid xs={1} md={1} item >
            <Button fullWidth color="secondary" onClick={this.onButtonClick}>
              +
            </Button>
          </Grid>
        </Grid>
      </Paper>
    )
  }
}
export default AddToDo;