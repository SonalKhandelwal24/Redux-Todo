import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice.ts'

function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch();

    const addTodoHandler = (e: any) => {
        e.preventDefault();
        dispatch(addTodo(input))
        setInput('')
    }

    return (
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
            <input
                type="text"
                className="bg-gray-100 rounded border border-gray-300 focus:border-gray-500 focus:ring-1 focus:ring-gray-400 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter a Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type="submit"
                className="text-white bg-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 rounded text-lg"
            >
                Add Todo
            </button>
        </form>
    )
}

export default AddTodo;
