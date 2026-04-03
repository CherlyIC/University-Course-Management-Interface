import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const { logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <nav className="bg-white shadow-sm border-b border-sky-100 px-8 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">

        <div>
          <h1 className="text-lg font-bold text-sky-600 leading-none">University Manager</h1>
          <p className="text-xs text-slate-400">Supervisor Portal</p>
        </div>
      </div>

      <button
        onClick={handleLogout}
        className="flex items-center gap-2 bg-sky-50 hover:bg-sky-100 text-sky-600 font-semibold text-sm px-4 py-2 rounded-lg transition"
      >
        <span>⬅️</span> Logout
      </button>
    </nav>
  )
}