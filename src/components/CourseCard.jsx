export default function CourseCard({ course, onEdit, onDelete, onView }) {
  const name = course.courseName || 'Untitled Course'
  const initials = name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()

  return (
    <div className="bg-white border border-sky-200 rounded-2xl p-5 flex flex-col gap-4 hover:shadow-md hover:shadow-sky-100 transition-all duration-200">
      <div className="flex items-center justify-between">
        <div className="w-10 h-10 rounded-xl bg-sky-600 flex items-center justify-center text-sky-100 font-semibold text-sm flex-shrink-0">
          {initials}
        </div>
        <span className="text-xs bg-sky-50 text-sky-600 px-3 py-1 rounded-full font-medium border border-sky-200">
          Course
        </span>
      </div>

      <div>
        <h3 className="font-semibold text-slate-800 text-sm leading-snug mb-1">
          {name}
        </h3>
        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
          {course.description || 'No description available.'}
        </p>
      </div>

      <div className="border-t border-sky-100"></div>

      <div className="flex gap-2">
        <button
          onClick={() => onView(course)}
          className="flex-1 text-xs py-2 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 transition font-medium"
        >
          View
        </button>
        <button
          onClick={() => onEdit(course)}
          className="flex-1 text-xs py-2 rounded-lg bg-sky-600 text-sky-50 hover:bg-sky-700 transition font-medium"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(course)}
          className="flex-1 text-xs py-2 rounded-lg border border-red-200 bg-red-50 text-red-700 hover:bg-red-100 transition font-medium"
        >
          Delete
        </button>
      </div>
    </div>
  )
}