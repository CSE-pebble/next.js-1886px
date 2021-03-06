import styled, { css } from "styled-components";
import { useState } from "react";

export default function Form({ todoList, setTodoList }) {
  const [text, setText] = useState("");

  const PressEnter = (e) => {
    if (e.key == "Enter") {
      e.preventDefault();
      addTodo();
    }
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  const addTodo = (e) => {
    const updatedList = [...todoList, text];
    setTodoList(updatedList);
    setText("");
  };

  return (
    <InputForm>
      <TodoInput
        input
        type="text"
        placeholder="할 일을 입력하세요"
        onKeyDown={PressEnter}
        value={text}
        onChange={onChange}
      ></TodoInput>
      <InputButton input type="button" onClick={addTodo}>
        추가
      </InputButton>
    </InputForm>
  );
}

const InputForm = styled.form`
  width: 100%;
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #00462a;
  padding: 1rem;
`;

const TodoInput = styled.input`
  width: 91%;
  height: 100%;
  outline: none;
  padding-left: 1.5rem;
  font-size: 1.5rem;
`;

const InputButton = styled.button`
  width: 8%;
  height: 100%;
  outline: none;
  font-size: 1.5rem;
`;
