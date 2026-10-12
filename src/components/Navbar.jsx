import { Link } from 'react-router-dom'

// Link (not <a href>) changes the URL without reloading the page
export default function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white shadow">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-2 p-4">
        <Link to="/" className="text-xl font-bold">
          📚 StudySprint
        </Link>
        <div className="flex gap-4 text-sm font-medium">
          <Link to="/" className="hover:underline">
            Dashboard
          </Link>
          <Link to="/completed" className="hover:underline">
            Completed
          </Link>
        </div>
      </div>
    </nav>
  )
}
