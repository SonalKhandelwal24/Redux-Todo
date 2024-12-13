import { useState, useRef } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, removeTodo, updateTodo } from '../features/todo/todoSlice.ts';

function AddTodo() {
  const [editInput, setEditInput] = useState('');
  const [editId, setEditId] = useState(null);
  const dispatch = useDispatch();
  const todos = useSelector((state: any) => state.todos);
  const listRef = useRef(null);

  const updateTodoHandler = (e: any, id: string) => {
    e.preventDefault();
    if (editInput.trim()) {
      dispatch(updateTodo({ id, text: editInput }));
      setEditId(null);
      setEditInput('');
    }
  };

  return (
    <>
      <div className="text-2xl font-bold p-4 text-gray-800">Todos</div>
      <ul className="list-none">
        {todos.map((todo: any) => (
          <li
            className="mt-4 flex justify-between items-center bg-gray-100 px-4 py-3 rounded-lg border border-gray-300 shadow-sm"
            key={todo.id}>
            {editId === todo.id ? (
              <form onSubmit={(e) => updateTodoHandler(e, todo.id)} className="flex flex-1">
                <input
                  type="text"
                  className="bg-white rounded border border-gray-300 focus:border-gray-500 focus:ring-1 focus:ring-gray-400 text-base outline-none text-gray-700 py-2 px-3 flex-1 mr-2"
                  value={editInput}
                  onChange={(e) => setEditInput(e.target.value)}
                />
                <button type="submit"
                  className="text-white bg-gray-700 border-0 py-1 px-4 mr-2 focus:outline-none hover:bg-gray-800 rounded text-md">
                  Save
                </button>
                <button type="button"
                  onClick={() => setEditId(null)}
                  className="text-gray-700 bg-gray-300 border-0 py-1 px-4 focus:outline-none hover:bg-gray-400 rounded text-md">
                  Cancel
                </button>
              </form>
            ) : (
              <>
                <div className="text-gray-800 flex-1" ref={listRef}>{todo.text}</div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => {
                      setEditId(todo.id);
                      setEditInput(todo.text);
                    }}
                    className="text-white bg-gray-700 border-0 py-1 px-4 focus:outline-none hover:bg-gray-800 rounded text-md"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => dispatch(deleteTodo(todo.id))}
                    className="text-white bg-gray-700 border-0 py-1 px-4 focus:outline-none hover:bg-gray-800 rounded text-md"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
      <button
        onClick={() => dispatch(removeTodo())}
        className="text-white bg-gray-700 border-0 py-2 px-4 my-4 focus:outline-none hover:bg-gray-800 rounded text-lg font-semibold"
      >
        Remove All
      </button>
    </>
  );
}

export default AddTodo;
