function StatCard({ label, value, color }) {
  return (
    <div className="rounded-lg bg-white p-4 text-center shadow-sm">
      <p className={`text-2xl font-bold ${color}`}>{value}</p>
      <p className="text-sm text-slate-500">{label}</p>
    </div>
  )
}

export default function StatsBar({ tasks }) {
  // Derived values: computed from tasks, NOT stored in their own useState
  const total = tasks.length
  const completed = tasks.filter((task) => task.completed).length
  const pending = total - completed
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100)

  return (
    <section className="space-y-3">
      <div className="grid grid-cols-3 gap-3">
        <StatCard label="Total" value={total} color="text-indigo-600" />
        <StatCard label="Completed" value={completed} color="text-green-600" />
        <StatCard label="Pending" value={pending} color="text-amber-600" />
      </div>
      <div className="rounded-lg bg-white p-4 shadow-sm">
        <div className="mb-2 flex justify-between text-sm">
          <span className="font-medium">Progress</span>
          <span>
            {completed} of {total} done ({percent}%)
          </span>
        </div>
        <div className="h-3 w-full rounded-full bg-slate-200">
          <div
            className="h-3 rounded-full bg-green-500 transition-all"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    </section>
  )
}
