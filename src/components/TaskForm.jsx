import { useState } from 'react'

const CATEGORIES = ['General', 'React', 'JavaScript', 'DSA', 'Revision']

export default function TaskForm({ onAdd }) {
  // Controlled inputs: the input value comes from state
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('General')

  function handleSubmit(e) {
    e.preventDefault() // stop the browser's full-page form submit
    if (title.trim() === '') return
    onAdd(title.trim(), category)
    setTitle('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 rounded-lg bg-white p-4 shadow-sm sm:flex-row"
    >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="What do you need to study?"
        className="flex-1 rounded border border-slate-300 px-3 py-2 focus:border-indigo-500 focus:outline-none"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="rounded border border-slate-300 px-3 py-2"
      >
        {CATEGORIES.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="rounded bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700"
      >
        Add Task
      </button>
    </form>
  )
}
