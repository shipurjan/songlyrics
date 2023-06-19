import './App.css';
import { Layout } from "./layout";
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { SongList } from './pages/songlist/SongList';
import { Joke } from './pages/joke/Joke';
import { Dictionary } from './pages/dictionary/Dictionary';

export default function App() {
  return (
    <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/songlist" element={<SongList />} />
          <Route path="/joke" element={<Joke />} />
          <Route path="/dictionary" element={<Dictionary />} />
        </Routes>
    </Layout>
  );
};