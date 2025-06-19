// client/src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WebsiteLayout from './layouts/WebsiteLayout';
import AdminLayout from './layouts/AdminLayout';
import Home from './pages/Home';
import About from './pages/About';
import HomeEditor from './admin/HomeEditor';
import AboutEditor from './admin/AboutEditor';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="home" element={<HomeEditor />} />
          <Route path="about" element={<AboutEditor />} />
        </Route>
      </Routes>
    </Router>
  );
}
