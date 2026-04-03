import API from './axios'

export const getAllCourses = () => API.get('/api/courses')
export const getCourseById = (id) => API.get(`/api/courses/${id}`)
export const createCourse = (data) => API.post('/api/courses', data)
export const updateCourse = (id, data) => API.put(`/api/courses/${id}`, data)
export const deleteCourse = (id) => API.delete(`/api/courses/${id}`)