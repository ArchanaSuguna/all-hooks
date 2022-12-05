import React, { memo } from 'react'

const List = memo(({items}) => {
  return (
    <div>
        {
            items.map((visibleTodo) => {
               return <li key={visibleTodo.id}>
                    {
                        visibleTodo.completed? <s>{visibleTodo.todo}</s>: visibleTodo.todo
                    }
                  </li>
            })
        }
    </div>
  )
})

export default List 