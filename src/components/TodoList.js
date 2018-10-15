import React from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo';

const TodoList = ({ todos, onTodoClick }) => {
  return (
    <ul>
      {todos.map(todo => {
        return (
          <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
        );
      })}
    </ul>
  );
};

TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
};

export default TodoList;
