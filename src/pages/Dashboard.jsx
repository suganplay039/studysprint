import { useState } from 'react'
import StatsBar from '../components/StatsBar.jsx'
import TaskForm from '../components/TaskForm.jsx'
import FilterBar from '../components/FilterBar.jsx'
import TaskList from '../components/TaskList.jsx'

export default function Dashboard({ tasks, loading, error, onAdd, onToggle, onDelete }) {
  // Filter is UI-only state, so it can live in the page
  const [filter, setFilter] = useState('All')

  const visibleTasks = tasks.filter((task) => {
    if (filter === 'Pending') return !task.completed
    if (filter === 'Completed') return task.completed
    return true
  })

  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <StatsBar tasks={tasks} />
      <TaskForm onAdd={onAdd} />
      <FilterBar filter={filter} onChange={setFilter} />

      {loading && <p className="text-center text-slate-500">Loading tasks...</p>}
      {error && (
        <p className="rounded bg-red-100 p-3 text-red-700">
          Could not load tasks: {error}
        </p>
      )}
      {!loading && (
        <TaskList
          tasks={visibleTasks}
          onToggle={onToggle}
          onDelete={onDelete}
          emptyMessage={
            tasks.length === 0
              ? 'No tasks yet. Add your first study task above!'
              : `No ${filter.toLowerCase()} tasks.`
          }
        />
      )}
    </div>
  )
}
