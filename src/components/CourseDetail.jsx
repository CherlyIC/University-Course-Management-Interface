
export default function CourseDetail({ course }) {

  const fields = [
    { label: 'Course Name', value: course.courseName },
    { label: 'Description', value: course.description },
    { label: 'Course ID', value: course._id || course.id },
    { label: 'Created At', value: course.createdAt ? new Date(course.createdAt).toLocaleDateString() : null },
  ]

  return (
    <div className="space-y-3">
      {fields.map(({ label, value }) => (
        <div key={label} className="flex gap-3 py-2.5 border-b border-slate-50 last:border-0">
          <span className="text-sm font-semibold text-slate-400 w-32 shrink-0">{label}</span>
          <span className="text-sm text-slate-700 font-medium">
            {value || <span className="text-slate-300 italic">Not provided</span>}
          </span>
        </div>
      ))}
    </div>
  )
}