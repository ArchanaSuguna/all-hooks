import React, { useState } from 'react';
import TodoList from './TodoList';
import { createTodos } from './utils';

const HookUseMemo1 = () => {
    const [tab, setTab] = useState("all");
    const [isDark, setIsDark] =  useState(false);

   const todos = createTodos();
  return (
    <div>     
        <button onClick={() => setTab("all")}>All</button>
        <button onClick={() => setTab("active")}>Active</button>
        <button onClick={() => setTab("completed")}>Completed</button>
        <br/>
        <label>
            <input type="checkbox" checked={isDark} onChange={(e) => setIsDark(e.target.checked)}/>isDark
        </label>
        <TodoList todos={todos} tab={tab} theme={isDark ? 'dark': 'light'}/>
    </div>
  )
}

export default HookUseMemo1