import React, { useState, useContext, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import TodoList from "./components/Todolist";
import styled from 'styled-components';

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);


function App(){
  return (
    <div>
      <h1>React Todo List App</h1>
      <TodoList/>
    </div>
  );
}

root.render(<App/>);