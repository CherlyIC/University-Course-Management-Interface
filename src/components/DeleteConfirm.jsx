export default function DeleteConfirm({ course, onConfirm, onCancel, loading }) {
  return (
    <div className="text-center">

      <div className="text-5xl mb-4">🗑️</div>

      <h4 className="text-lg font-bold text-slate-800 mb-2">Delete this course?</h4>

      <p className="text-slate-500 text-sm mb-6">
        You are about to delete{' '}
        <span className="font-semibold text-slate-700">"{course?.name}"</span>.
        This action cannot be undone.
      </p>

      <div className="flex gap-3">
        <button
          onClick={onCancel}
          className="flex-1 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-semibold text-sm hover:bg-slate-50 transition"
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          disabled={loading}
          className="flex-1 py-2.5 rounded-xl bg-red-500 hover:bg-red-600 disabled:opacity-60 text-white font-semibold text-sm transition"
        >
          {loading ? 'Deleting...' : 'Yes, Delete'}
        </button>
      </div>

    </div>
  )
}