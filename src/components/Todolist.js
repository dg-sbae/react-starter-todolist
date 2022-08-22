import React, { useState, useContext, useEffect } from 'react';
import ReactDOM from "react-dom/client";
import styled from 'styled-components';

import Listitem from './ListItem';


const AddInput = styled.button`
  background: #1F96FE;
  color: white;
  border-radius: 2em;
  text-align: center;
  width: 20px;
  height: 20px;
  margin: 0 10px;
  line-height:0;
`;

const TodoList = () =>{
  const [userInput, setUserInput] = useState('');
  const [userInputList, setUserInputList] = useState([]);
  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  return (
    <div>
      <h2>Todo List Component</h2>
      <ul>
      <Listitem userInputList={userInputList} setUserInputList={setUserInputList}/>
      </ul>
      <input type="text" value={userInput} onChange={handleChange}/>
      <AddInput 
      type="submit"  
      onClick={()=>{
        setUserInputList([...userInputList,userInput])
        setUserInput('');
      }}> + </AddInput>
      </div>
  )
}

export default TodoList;