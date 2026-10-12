import { Link } from 'react-router-dom'
import TaskList from '../components/TaskList.jsx'

export default function Completed({ tasks, onToggle, onDelete }) {
  const completedTasks = tasks.filter((task) => task.completed)

  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-bold">Completed Tasks ✅</h1>
      <p className="text-slate-600">
        You have finished {completedTasks.length} task
        {completedTasks.length === 1 ? '' : 's'}.
      </p>
      <TaskList
        tasks={completedTasks}
        onToggle={onToggle}
        onDelete={onDelete}
        emptyMessage="Nothing completed yet. Keep going!"
      />
      <Link to="/" className="inline-block text-indigo-600 hover:underline">
        ← Back to Dashboard
      </Link>
    </div>
  )
}
