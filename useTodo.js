import { useEffect, useReducer } from 'react'
import { todoReducer } from '../useReducer/TodoReducer'

const init = () =>  JSON.parse(localStorage.getItem('todos')) || [] 

export const useTodo = () => {

  const [ todos, dispatch ] = useReducer( todoReducer, [], init )

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify( todos ))
  }, [todos])
  

  const handleTodoAdd = ( value ) => {
    const action = {
      type : '[TODO] Add Todo',
      payload : value
    }
    dispatch( action )
  }

  const handleTodoDelete = ( id ) => {
    const action = {
      type : '[TODO] Delete Todo',
      payload : id
    }
    dispatch( action )
  }

  const handleToogleTodo = ( id ) => {
    const action = {
      type : '[TODO] Toogle Todo',
      payload : id
    }
    dispatch( action )
  }

  
  return {
    todos,
    handleTodoAdd, 
    handleTodoDelete,
    handleToogleTodo,
    todosCount : todos.length,
    pendingTodosCount : todos.filter( todo => !todo.done ).length 
  }
}