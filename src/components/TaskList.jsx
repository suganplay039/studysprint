import TaskItem from './TaskItem.jsx'

export default function TaskList({ tasks, onToggle, onDelete, emptyMessage }) {
  if (tasks.length === 0) {
    return (
      <p className="rounded-lg bg-white p-6 text-center text-slate-500 shadow-sm">
        {emptyMessage}
      </p>
    )
  }

  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}
