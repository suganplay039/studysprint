import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Completed from './pages/Completed.jsx'

const API_URL = 'https://jsonplaceholder.typicode.com/todos?_limit=5'

export default function App() {
  // Tasks live HERE (above Routes) so both pages share the same list
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error(`Request failed: ${res.status}`)
        return res.json()
      })
      .then((data) => {
        // JSONPlaceholder todos have no category, so give each one a default
        const mapped = data.map((todo) => ({
          id: todo.id,
          title: todo.title,
          completed: todo.completed,
          category: 'General',
        }))
        setTasks(mapped)
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, []) // [] = run once after first render

  function addTask(title, category) {
    const newTask = { id: Date.now(), title, category, completed: false }
    setTasks([newTask, ...tasks]) // new array, never tasks.push()
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    )
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <Navbar />
      <main className="mx-auto max-w-3xl p-4 sm:p-6">
        <Routes>
          <Route
            path="/"
            element={
              <Dashboard
                tasks={tasks}
                loading={loading}
                error={error}
                onAdd={addTask}
                onToggle={toggleTask}
                onDelete={deleteTask}
              />
            }
          />
          <Route
            path="/completed"
            element={
              <Completed
                tasks={tasks}
                onToggle={toggleTask}
                onDelete={deleteTask}
              />
            }
          />
        </Routes>
      </main>
    </div>
  )
}
