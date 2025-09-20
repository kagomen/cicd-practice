import React, { useRef, useState } from "react"

type Todo = { id: number; title: string; completed: boolean }

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [title, setTitle] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim()) return
    setTodos([...todos, { id: Date.now(), title: title, completed: false }])
    setTitle("")
    inputRef.current?.focus()
  }

  const handleCompleted = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  return (
    <div className="flex justify-center">
      <div className="pt-10 w-full max-w-md">
        <h1 className="mb-4">Todo App</h1>
        {/* フォーム部分 */}
        <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
          <input
            ref={inputRef}
            type="text"
            value={title}
            placeholder="add a todo..."
            onChange={(e) => setTitle(e.target.value)}
            className="flex-grow px-2 py-1 border-2 border-gray-300 rounded focus:outline-none focus:border-pink-500"
          />
          <button
            type="submit"
            className="bg-pink-500 text-white px-3 py-1 rounded enabled:hover:opacity-70 enabled:cursor-pointer transition-all duration-200  disabled:bg-gray-300"
            disabled={!title.trim()}
          >
            add
          </button>
        </form>

        {/* TODO部分 */}
        <div className="space-y-4 px-2">
          {todos.map((todo) => {
            return (
              <div key={todo.id} className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onClick={() => handleCompleted(todo.id)}
                  className="scale-150 accent-pink-500 rounded"
                />
                <div
                  className={todo.completed ? "line-through text-gray-500" : ""}
                >
                  {todo.title}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
