import styled, { css } from "styled-components";
import { useState } from "react";
import Form from "./Form";

export default function Item({ content, todoList, setTodoList, TodoList }) {
  const [isChecked, setIsChecked] = useState(false);

  const toggleChecked = () => {
    setIsChecked(!isChecked);
  };

  const removeTodo = (e) => {
    setTodoList(todoList.filter((item) => item !== content));
  };

  return (
    <TodoContents>
      <Text onClick={toggleChecked} isChecked={isChecked}>
        {content}
      </Text>
      <RemoveButton onClick={removeTodo}>X</RemoveButton>
    </TodoContents>
  );
}

const TodoContents = styled.form`
  display: flex;
  font-size: 10rem;
  margin: 1rem;
  align-items: center;
`;
const Text = styled.div`
  font-size: 2rem;
  color: #495057;
  margin-left: 1rem;
  ${(props) =>
    props.isChecked &&
    css`
      text-decoration: line-through;
    `}
`;

const RemoveButton = styled.button`
  margin-left: 1rem;
  background-color: #00462a;
  border-radius: 50%;
  border: none;
  color: #fff;
  height: 2rem;
`;
