import { useState } from 'react'

export default function CourseForm({ initialData = {}, onSubmit, loading }) {
  const [formData, setFormData] = useState({
    name: initialData.name || '',
    description: initialData.description || '',
    code: initialData.code || '',
    instructor: initialData.instructor || '',
    credits: initialData.credits || '',
    duration: initialData.duration || '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  const inputClass =
    'w-full px-4 py-2.5 border border-sky-200 rounded-xl text-sm outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition'
  const labelClass = 'block text-sm font-semibold text-slate-700 mb-1'

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className={labelClass}>Course Name *</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g. Management Information Systems"
          required
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>Course Code *</label>
        <input
          name="code"
          value={formData.code}
          onChange={handleChange}
          placeholder="e.g. MIS301"
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
          rows={3}
          className={inputClass}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Instructor</label>
          <input
            name="instructor"
            value={formData.instructor}
            onChange={handleChange}
            placeholder="e.g. Dr. Smith"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Credits</label>
          <input
            name="credits"
            type="number"
            value={formData.credits}
            onChange={handleChange}
            placeholder="e.g. 3"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Duration</label>
        <input
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          placeholder="e.g. 16 weeks"
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-sky-500 hover:bg-sky-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition text-sm mt-2"
      >
        {loading ? 'Saving...' : 'Save Course'}
      </button>
    </form>
  )
}