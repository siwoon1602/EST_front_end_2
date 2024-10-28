import React from "react";
import styled from "styled-components";
import Exam from "./Components/exam";

const BtnOne = styled.button`
  background-color: royalblue;
  border: 1px solid black;
  color: white;
  width: 60px;
  height: 30px;
  margin-right: 10px;
`;

const BtnTwo = styled(BtnOne)`
  color: black;
  border-radius: 10px;
  box-shadow: 0px 0px 5px;
  border: none;
  font-weight: 700;
`;

const BtnThree = styled(BtnOne)`
  background-color: yellowgreen;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  box-shadow: 0px 0px 5px black;
`;

const App = () => {
  return (
    <div>
      <BtnOne>버튼1</BtnOne>
      <BtnTwo>버튼2</BtnTwo>
      <BtnThree>버튼3</BtnThree>
      <br></br>
      <Exam></Exam>
    </div>
  );
};

export default App;
