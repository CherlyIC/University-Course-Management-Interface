export default function CourseCard({ course, onEdit, onDelete, onView }) {
  const colors = [
    { bg: 'bg-sky-500', light: 'bg-sky-50', text: 'text-sky-600' },
    { bg: 'bg-violet-500', light: 'bg-violet-50', text: 'text-violet-600' },
    { bg: 'bg-emerald-500', light: 'bg-emerald-50', text: 'text-emerald-600' },
    { bg: 'bg-orange-500', light: 'bg-orange-50', text: 'text-orange-600' },
    { bg: 'bg-rose-500', light: 'bg-rose-50', text: 'text-rose-600' },
    { bg: 'bg-indigo-500', light: 'bg-indigo-50', text: 'text-indigo-600' },
  ]

  const name = course.courseName || 'Untitled Course'
  const color = colors[name.charCodeAt(0) % colors.length]
  const initials = name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-all duration-200 flex flex-col">
      <div className={`${color.bg} px-6 pt-6 pb-8`}>
        <div className="bg-white bg-opacity-20 rounded-xl w-12 h-12 flex items-center justify-center">
          <span className="text-white font-bold text-lg">{initials}</span>
        </div>
      </div>

      <div className="px-6 pb-6 flex flex-col flex-1 -mt-4">
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-4 mb-4">
          <h3 className="font-bold text-slate-800 text-base leading-snug mb-1">
            {name}
          </h3>
          <p className="text-slate-400 text-xs line-clamp-2">
            {course.description || 'No description available.'}
          </p>
        </div>

        <div className="flex gap-2 mt-auto">
          <button
            onClick={() => onView(course)}
            className="flex-1 text-xs font-semibold py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-600 transition border border-slate-200"
          >
            👁 View
          </button>
          <button
            onClick={() => onEdit(course)}
            className="flex-1 text-xs font-semibold py-2.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-600 transition border border-sky-200"
          >
            ✏️ Edit
          </button>
          <button
            onClick={() => onDelete(course)}
            className="flex-1 text-xs font-semibold py-2.5 rounded-xl bg-red-50 hover:bg-red-100 text-red-500 transition border border-red-200"
          >
            🗑 Delete
          </button>
        </div>
      </div>
    </div>
  )
}