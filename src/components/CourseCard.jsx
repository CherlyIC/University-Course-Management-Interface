// src/components/CourseCard.jsx
export default function CourseCard({ course, onEdit, onDelete, onView }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-sky-50 p-6 hover:shadow-md transition">
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-bold text-slate-800 text-lg leading-tight">{course.name}</h3>
        <span className="bg-sky-100 text-sky-600 text-xs font-semibold px-2 py-1 rounded-full ml-2 whitespace-nowrap">
          {course.code}
        </span>
      </div>

      <p className="text-slate-500 text-sm mb-4 line-clamp-2">
        {course.description || 'No description provided.'}
      </p>

      <div className="flex items-center gap-4 text-xs text-slate-400 mb-5">
        <span>👤 {course.instructor || 'N/A'}</span>
        <span>📚 {course.credits} Credits</span>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => onView(course)}
          className="flex-1 text-xs font-semibold py-2 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-600 transition"
        >
          👁 View
        </button>
        <button
          onClick={() => onEdit(course)}
          className="flex-1 text-xs font-semibold py-2 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-600 transition"
        >
          ✏️ Edit
        </button>
        <button
          onClick={() => onDelete(course)}
          className="flex-1 text-xs font-semibold py-2 rounded-lg bg-red-50 hover:bg-red-100 text-red-500 transition"
        >
          🗑 Delete
        </button>
      </div>
    </div>
  )
}