import React, { useState, useContext, useEffect } from 'react';
import ReactDOM from "react-dom/client";
import styled from 'styled-components';

const Listitem = ({userInputList, setUserInputList})=>{
  console.log('userInputList :', userInputList)
  const [newUserInput, setNewUserInput] = useState('')
  function handleNewUserInput(){
    console.log('jioiii')

  }
  return (
    <>
       { userInputList.map((userInput)=>{
        return (
          <li>
            {userInput}

            <button
            onClick={()=>{
              handleNewUserInput()
            }}
            > edit </button>

            <button
              onClick={()=>{
              setUserInputList(userInputList.filter((type) => type !== userInput))
            }}
            > x </button>
          </li>
          
        )
       })}
    </>
  )
}

export default Listitem;