import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/home').then(res => setContent(res.data));
  }, []);

  if (!content) return <p className="text-center text-gray-500 text-lg animate-pulse">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6 md:px-12 overflow-hidden w-full">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/subtle-dots.png')] opacity-10"></div>
        <div className="relative w-full text-center">
          <span className="inline-block px-4 py-1 bg-blue-400 text-sm font-semibold rounded-full mb-4 animate-fade-in">{content.hero.badge}</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight animate-slide-up">{content.hero.heading}</h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 mx-auto">{content.hero.subtext}</p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1">{content.hero.primaryButton}</button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">{content.hero.secondaryButton}</button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 md:px-12 bg-white w-full">
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {content.stats.map((stat, i) => (
            <div key={i} className="bg-gradient-to-br from-orange-400 to-orange-500 p-6 rounded-xl shadow-lg text-white transform hover:scale-105 transition-transform duration-300">
              <h2 className="text-3xl md:text-4xl font-extrabold">{stat.value}{stat.suffix}</h2>
              <p className="mt-2 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="py-16 px-6 md:px-12 bg-gray-50 w-full">
        <div className="w-full text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-violet-600 mb-4">{content.about.heading}</h2>
          <p className="text-lg text-gray-600 mb-10 mx-auto">{content.about.description}</p>
          <div className="grid gap-6 md:grid-cols-3">
            {content.about.cards.map((card, i) => (
              <div key={i} className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-violet-100">
                <h3 className="text-xl font-bold text-violet-600 mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-16 px-6 md:px-12 bg-white w-full">
        <div className="w-full">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Ongoing Events</h2>
          {content.events.ongoing.map((e, i) => (
            <div key={i} className="mb-6 p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <h4 className="text-lg font-semibold text-gray-800">{e.title}</h4>
              <p className="text-sm text-gray-500">{e.date}</p>
              <p className="text-gray-600 mt-2">{e.description}</p>
            </div>
          ))}

          <h2 className="text-3xl font-extrabold text-gray-800 mb-6 mt-12">Upcoming Events</h2>
          {content.events.upcoming.map((e, i) => (
            <div key={i} className="mb-6 p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <h4 className="text-lg font-semibold text-gray-800">{e.title}</h4>
              <p className="text-sm text-gray-500">{e.date}</p>
              <p className="text-gray-600 mt-2">{e.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 md:px-12 bg-gray-50 w-full">
        <div className="w-full text-center">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-6">What Members Say</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {content.testimonials.map((t, i) => (
              <div key={i} className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <p className="italic text-gray-600 mb-4">"{t.quote}"</p>
                <p className="font-bold text-gray-800">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-6 md:px-12 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center w-full">
        <div className="w-full">
          <h2 className="text-3xl font-extrabold mb-6">Contact Us</h2>
          <p className="text-lg mb-2">{content.contact.location}</p>
          <p className="text-lg mb-2">{content.contact.email}</p>
          <p className="text-lg">{content.contact.phone}</p>
        </div>
      </section>
    </div>
  );
}