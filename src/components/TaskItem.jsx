export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="flex items-center gap-3 rounded-lg bg-white p-3 shadow-sm">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        className="h-5 w-5 accent-green-600"
      />
      <div className="min-w-0 flex-1">
        <p
          className={`truncate ${task.completed ? 'text-slate-400 line-through' : ''}`}
        >
          {task.title}
        </p>
        <span className="text-xs text-indigo-600">{task.category}</span>
      </div>
      <span
        className={`hidden rounded-full px-2 py-0.5 text-xs sm:inline ${
          task.completed
            ? 'bg-green-100 text-green-700'
            : 'bg-amber-100 text-amber-700'
        }`}
      >
        {task.completed ? 'Completed' : 'Pending'}
      </span>
      {/* Arrow function so delete runs on click, not on render */}
      <button
        onClick={() => onDelete(task.id)}
        className="rounded px-2 py-1 text-sm text-red-600 hover:bg-red-50"
      >
        Delete
      </button>
    </li>
  )
}
