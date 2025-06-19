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
    axios.put('http://localhost:5000/api/home', data)
      .then(() => alert('Saved!'));
  };

  if (!data) return <p className="text-center text-gray-500 text-lg animate-pulse py-12">Loading...</p>;

  return (
    <div className="min-h-screen py-10 px-6">
      <div className="max-w-7xl mx-auto bg-blue-200 rounded-2xl shadow-lg p-8 space-y-8">
        <h1 className="text-3xl font-extrabold text-gray-800 text-center">Edit Home Page</h1>

        {/* Title & Description */}
        <div className="space-y-4">
          <input
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            placeholder="Title"
            value={data.title}
            onChange={e => handleChange('title', e.target.value)}
          />
          <textarea
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 resize-vertical min-h-[100px]"
            placeholder="Description"
            value={data.description}
            onChange={e => handleChange('description', e.target.value)}
          />
        </div>

        {/* Hero Section */}
        <div className="border border-gray-200 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Hero Section</h2>
          <div className="space-y-3">
            {['badge', 'heading', 'subtext', 'primaryButton', 'secondaryButton'].map(field => (
              <input
                key={field}
                className="w-full px-4 py-3 border border-gray-800  bg-blue-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={data.hero?.[field] || ''}
                onChange={e => handleChange(`hero.${field}`, e.target.value)}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="border border-gray-200 rounded-xl p-6 ">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Stats</h2>
          <div className="space-y-4">
            {data.stats?.map((stat, i) => (
              <div key={i} className="border border-gray-200 p-4 rounded-lg bg-white shadow-sm">
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 mb-2"
                  placeholder="Label"
                  value={stat.label}
                  onChange={e => handleChange(`stats.${i}.label`, e.target.value)}
                />
                <input
                  type="number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 mb-2"
                  placeholder="Value"
                  value={stat.value}
                  onChange={e => handleChange(`stats.${i}.value`, e.target.value)}
                />
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 mb-2"
                  placeholder="Suffix"
                  value={stat.suffix}
                  onChange={e => handleChange(`stats.${i}.suffix`, e.target.value)}
                />
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  placeholder="Icon"
                  value={stat.icon}
                  onChange={e => handleChange(`stats.${i}.icon`, e.target.value)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* About */}
        <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">About Section</h2>
          <input
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 mb-3"
            placeholder="Heading"
            value={data.about?.heading}
            onChange={e => handleChange('about.heading', e.target.value)}
          />
          <textarea
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 resize-vertical min-h-[100px] mb-4"
            placeholder="Description"
            value={data.about?.description}
            onChange={e => handleChange('about.description', e.target.value)}
          />
          <h3 className="text-lg font-semibold text-gray-800 mb-3">About Cards</h3>
          <div className="space-y-4">
            {data.about?.cards?.map((card, i) => (
              <div key={i} className="border border-gray-200 p-4 rounded-lg bg-white shadow-sm">
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 mb-2"
                  placeholder="Card Title"
                  value={card.title}
                  onChange={e => handleChange(`about.cards.${i}.title`, e.target.value)}
                />
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 mb-2"
                  placeholder="Card Description"
                  value={card.description}
                  onChange={e => handleChange(`about.cards.${i}.description`, e.target.value)}
                />
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  placeholder="Icon"
                  value={card.icon}
                  onChange={e => handleChange(`about.cards.${i}.icon`, e.target.value)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Info</h2>
          <div className="space-y-3">
            {['location', 'email', 'phone'].map(field => (
              <input
                key={field}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={data.contact?.[field] || ''}
                onChange={e => handleChange(`contact.${field}`, e.target.value)}
              />
            ))}
          </div>
        </div>

        {/* Save Button */}
        <div className="text-center">
          <button
            onClick={handleSave}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 shadow-md"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}