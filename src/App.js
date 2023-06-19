import './App.css';
import { Layout } from "./layout";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { SongList } from './pages/songlist/SongList';

export default function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/songlist" element={<SongList />} />
        </Routes>
      </Router>
    </Layout>
  );
};