import React, { useMemo } from 'react';
import { filterTodos } from './utils';
import List from "./List"

const TodoList = ({todos, tab, theme}) => {

    const visibleTodos = useMemo(() => 
      filterTodos(todos, tab),
       [todos, tab]) 

    // const visibleTodos = filterTodos(todos, tab);

  return (
    <div className={theme}>
       <List items={visibleTodos} />
    </div>
  )
}

export default TodoList