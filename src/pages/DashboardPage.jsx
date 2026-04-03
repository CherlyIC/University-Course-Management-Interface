import { useEffect, useState } from 'react'
import { getAllCourses, createCourse, updateCourse, deleteCourse } from '../api/courses'
import Navbar from '../components/Navbar'
import CourseCard from '../components/CourseCard'
import Spinner from '../components/Spinner'
import Modal from '../components/Modal'
import CourseForm from '../components/CourseForm'
import DeleteConfirm from '../components/DeleteConfirm'
import CourseDetail from '../components/CourseDetail'

export default function DashboardPage() {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [actionLoading, setActionLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const [showCreate, setShowCreate] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  const [showDelete, setShowDelete] = useState(false)
  const [showView, setShowView] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState(null)

  useEffect(() => { fetchCourses() }, [])

  const fetchCourses = async () => {
    setLoading(true)
    setError('')
    try {
      const res = await getAllCourses()
      const data = res.data.courses || res.data.data || res.data
      setCourses(Array.isArray(data) ? data : [])
    } catch {
      setError('Failed to load courses.')
    } finally {
      setLoading(false)
    }
  }

  const showSuccess = (msg) => {
    setSuccess(msg)
    setTimeout(() => setSuccess(''), 3000)
  }

  const handleCreate = async (formData) => {
    setActionLoading(true)
    try {
      await createCourse(formData)
      setShowCreate(false)
      showSuccess('✅ Course created successfully!')
      fetchCourses()
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create course.')
    } finally {
      setActionLoading(false)
    }
  }

  const handleEdit = async (formData) => {
    setActionLoading(true)
    try {
      await updateCourse(selectedCourse._id || selectedCourse.id, formData)
      setShowEdit(false)
      showSuccess('✅ Course updated successfully!')
      fetchCourses()
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update course.')
    } finally {
      setActionLoading(false)
    }
  }

  const handleDelete = async () => {
    setActionLoading(true)
    try {
      await deleteCourse(selectedCourse._id || selectedCourse.id)
      setShowDelete(false)
      showSuccess('✅ Course deleted successfully!')
      fetchCourses()
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to delete course.')
    } finally {
      setActionLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Course Catalog</h2>
            <p className="text-slate-400 text-sm mt-1">
              Manage all{' '}
              <span className="text-sky-500 font-semibold">{courses.length} courses</span>{' '}
              in the system
            </p>
          </div>
          <button
            onClick={() => setShowCreate(true)}
            className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-5 py-2.5 rounded-xl transition text-sm shadow-sm"
          >
            + Add New Course
          </button>
        </div>

        {success && (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl px-4 py-3 text-sm mb-6">
            {success}
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 rounded-xl px-4 py-3 text-sm mb-6">
            {error}
          </div>
        )}

        {loading && <Spinner />}

        {!loading && courses.length === 0 && (
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
                onView={() => { setSelectedCourse(course); setShowView(true) }}
                onEdit={() => { setSelectedCourse(course); setShowEdit(true) }}
                onDelete={() => { setSelectedCourse(course); setShowDelete(true) }}
              />
            ))}
          </div>
        )}
      </main>

      {showCreate && (
        <Modal title="Add New Course" onClose={() => setShowCreate(false)}>
          <CourseForm onSubmit={handleCreate} loading={actionLoading} />
        </Modal>
      )}

      {showEdit && selectedCourse && (
        <Modal title="Edit Course" onClose={() => setShowEdit(false)}>
          <CourseForm
            initialData={selectedCourse}
            onSubmit={handleEdit}
            loading={actionLoading}
          />
        </Modal>
      )}

      {showDelete && selectedCourse && (
        <Modal title="Confirm Delete" onClose={() => setShowDelete(false)}>
          <DeleteConfirm
            course={selectedCourse}
            onConfirm={handleDelete}
            onCancel={() => setShowDelete(false)}
            loading={actionLoading}
          />
        </Modal>
      )}

      {showView && selectedCourse && (
        <Modal title="Course Details" onClose={() => setShowView(false)}>
          <CourseDetail course={selectedCourse} />
        </Modal>
      )}
    </div>
  )
}