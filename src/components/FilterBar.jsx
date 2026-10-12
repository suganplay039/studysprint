const FILTERS = ['All', 'Pending', 'Completed']

export default function FilterBar({ filter, onChange }) {
  return (
    <div className="flex gap-2">
      {FILTERS.map((name) => (
        <button
          key={name}
          onClick={() => onChange(name)}
          className={`rounded-full px-4 py-1 text-sm font-medium ${
            filter === name
              ? 'bg-indigo-600 text-white'
              : 'bg-white text-slate-600 hover:bg-slate-200'
          }`}
        >
          {name}
        </button>
      ))}
    </div>
  )
}
