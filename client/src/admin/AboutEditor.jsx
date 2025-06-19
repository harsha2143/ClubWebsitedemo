// client/src/admin/HomeEditor.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function AboutEditor() {
  const [data, setData] = useState({ title: '', description: '' });

  useEffect(() => {
    axios.get('http://localhost:5000/api/pages/about').then(res => setData(res.data));
  }, []);

  const handleChange = e => setData({ ...data, [e.target.name]: e.target.value });

  const handleSave = () => {
    axios.put('http://localhost:5000/api/pages/about', data)
      .then(() => alert('Saved!'));
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Edit Home Page</h1>
      <input name="title" value={data.title} onChange={handleChange} placeholder="Title"
        className="border p-2 mb-2 block w-full" />
      <textarea name="description" value={data.description} onChange={handleChange}
        placeholder="Description" className="border p-2 mb-4 block w-full" />
      <button onClick={handleSave} className="bg-blue-600 text-white px-4 py-2 rounded">
        Save
      </button>
    </div>
  );
}
