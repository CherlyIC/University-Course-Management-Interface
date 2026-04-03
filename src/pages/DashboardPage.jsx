// src/pages/DashboardPage.jsx
import { useEffect, useState } from 'react'
import { getAllCourses } from '../api/courses'
import Navbar from '../components/Navbar'
import CourseCard from '../components/CourseCard'
import Spinner from '../components/Spinner'

export default function DashboardPage() {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchCourses()
  }, [])

  const fetchCourses = async () => {
    setLoading(true)
    try {
      const res = await getAllCourses()
      const data = res.data.courses || res.data.data || res.data
      setCourses(Array.isArray(data) ? data : [])
    } catch (err) {
      setError('Failed to load courses. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleView = (course) => console.log('View:', course)
  const handleEdit = (course) => console.log('Edit:', course)
  const handleDelete = (course) => console.log('Delete:', course)

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Course Catalog</h2>
            <p className="text-slate-400 text-sm mt-1">
              {courses.length} course{courses.length !== 1 ? 's' : ''} available
            </p>
          </div>
          <button className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-5 py-2.5 rounded-lg transition text-sm">
            + Add New Course
          </button>
        </div>

        {loading && <Spinner />}

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 rounded-lg px-4 py-3 text-sm">
            {error}
          </div>
        )}

        {!loading && !error && courses.length === 0 && (
          <div className="text-center py-20 text-slate-400">
            <div className="text-5xl mb-4">📭</div>
            <p className="font-semibold">No courses found</p>
            <p className="text-sm mt-1">Click "Add New Course" to get started</p>
          </div>
        )}

        {!loading && courses.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard
                key={course._id || course.id}
                course={course}
                onView={handleView}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  )
}