// client/src/pages/Home.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function About() {
  const [content, setContent] = useState({});

  useEffect(() => {
    axios.get('http://localhost:5000/api/pages/about').then(res => setContent(res.data));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold">{content.title}</h1>
      <p className="mt-2">{content.description}</p>
    </div>
  );
}
