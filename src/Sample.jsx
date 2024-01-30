import React from "react";
//react에서 component 클래서를 만들기 위해서 component로부터 상속을 받기

class Sample extends React.Component {
  //화면에 출력할 내용을 리턴하는 메서드
  render() {
    return (
      <div className="Sample">
        <p>안녕하세요</p>
        
      </div>
    )
  }
}
export default Sample;