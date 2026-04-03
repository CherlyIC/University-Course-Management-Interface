import { useState } from 'react'

export default function CourseForm({ initialData = {}, onSubmit, loading }) {

  const [formData, setFormData] = useState({
    courseName: initialData.courseName || '',
    description: initialData.description || '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  const inputClass = "w-full px-4 py-2.5 border border-sky-200 rounded-xl text-sm outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition"
  const labelClass = "block text-sm font-semibold text-slate-700 mb-1"

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      <div>
        <label className={labelClass}>Course Name *</label>
        <input
          name="courseName"
          value={formData.courseName}
          onChange={handleChange}
          placeholder="e.g. Management Information Systems"
          required
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Describe what this course covers..."
          rows={4}
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-sky-500 hover:bg-sky-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition text-sm"
      >
        {loading ? 'Saving...' : 'Save Course'}
      </button>

    </form>
  )
}