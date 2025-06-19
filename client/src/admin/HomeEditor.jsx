import { useEffect, useState } from 'react';
import axios from 'axios';

export default function HomeEditor() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/home').then(res => setData(res.data));
  }, []);

  const handleChange = (path, value) => {
    setData(prev => {
      const newData = { ...prev };
      const keys = path.split('.');
      let temp = newData;
      for (let i = 0; i < keys.length - 1; i++) {
        temp = temp[keys[i]];
      }
      temp[keys[keys.length - 1]] = value;
      return newData;
    });
  };

const handleSave = () => {
  console.log('Sending data:', data);
  axios
    .put('http://localhost:5000/api/home', data)
    .then(() => alert('Saved!'))
    .catch((err) => {
      console.error('Save failed:', err.response?.data || err.message);
      alert('Failed to save');
    });
};


  if (!data) return <p>Loading...</p>;

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Edit Home Page</h1>

      {/* Title & Description */}
      <div>
        <input
          className="border p-2 mb-2 w-full"
          placeholder="Title"
          value={data.title}
          onChange={e => handleChange('title', e.target.value)}
        />
        <textarea
          className="border p-2 w-full"
          placeholder="Description"
          value={data.description}
          onChange={e => handleChange('description', e.target.value)}
        />
      </div>

      {/* Hero Section */}
      <div className="border p-4 rounded">
        <h2 className="font-semibold mb-2">Hero Section</h2>
        {['badge', 'heading', 'subtext', 'primaryButton', 'secondaryButton'].map(field => (
          <input
            key={field}
            className="border p-2 mb-2 w-full"
            placeholder={field}
            value={data.hero?.[field] || ''}
            onChange={e => handleChange(`hero.${field}`, e.target.value)}
          />
        ))}
      </div>

      {/* Stats */}
      <div className="border p-4 rounded">
        <h2 className="font-semibold mb-2">Stats</h2>
        {data.stats?.map((stat, i) => (
          <div key={i} className="mb-4 border p-2 rounded">
            <input
              className="border p-1 mb-1 w-full"
              placeholder="Label"
              value={stat.label}
              onChange={e => handleChange(`stats.${i}.label`, e.target.value)}
            />
            <input
              type="number"
              className="border p-1 mb-1 w-full"
              placeholder="Value"
              value={stat.value}
              onChange={e => handleChange(`stats.${i}.value`, e.target.value)}
            />
            <input
              className="border p-1 mb-1 w-full"
              placeholder="Suffix"
              value={stat.suffix}
              onChange={e => handleChange(`stats.${i}.suffix`, e.target.value)}
            />
            <input
              className="border p-1 w-full"
              placeholder="Icon"
              value={stat.icon}
              onChange={e => handleChange(`stats.${i}.icon`, e.target.value)}
            />
          </div>
        ))}
      </div>

      {/* About */}
      <div className="border p-4 rounded">
        <h2 className="font-semibold mb-2">About Section</h2>
        <input
          className="border p-2 mb-2 w-full"
          placeholder="Heading"
          value={data.about?.heading}
          onChange={e => handleChange('about.heading', e.target.value)}
        />
        <textarea
          className="border p-2 mb-4 w-full"
          placeholder="Description"
          value={data.about?.description}
          onChange={e => handleChange('about.description', e.target.value)}
        />
        <h3 className="font-semibold mb-2">About Cards</h3>
        {data.about?.cards?.map((card, i) => (
          <div key={i} className="mb-4 border p-2 rounded">
            <input
              className="border p-1 mb-1 w-full"
              placeholder="Card Title"
              value={card.title}
              onChange={e => handleChange(`about.cards.${i}.title`, e.target.value)}
            />
            <input
              className="border p-1 mb-1 w-full"
              placeholder="Card Description"
              value={card.description}
              onChange={e => handleChange(`about.cards.${i}.description`, e.target.value)}
            />
            <input
              className="border p-1 w-full"
              placeholder="Icon"
              value={card.icon}
              onChange={e => handleChange(`about.cards.${i}.icon`, e.target.value)}
            />
          </div>
        ))}
      </div>

      {/* Contact */}
      <div className="border p-4 rounded">
        <h2 className="font-semibold mb-2">Contact Info</h2>
        {['location', 'email', 'phone'].map(field => (
          <input
            key={field}
            className="border p-2 mb-2 w-full"
            placeholder={field}
            value={data.contact?.[field] || ''}
            onChange={e => handleChange(`contact.${field}`, e.target.value)}
          />
        ))}
      </div>

      {/* Save Button */}
      <button
        onClick={handleSave}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Save
      </button>
    </div>
  );
}
