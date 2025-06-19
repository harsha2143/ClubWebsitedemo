// client/src/layouts/AdminLayout.jsx
import { Outlet, Link } from 'react-router-dom';

export default function AdminLayout() {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-200 p-4">
        <h2 className="font-bold text-lg mb-4">Admin Panel</h2>
        <nav className="space-y-2">
          <Link to="/admin/home">Edit Home</Link>
          <Link to="/admin/about">Edit About</Link>
        </nav>
      </aside>
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
