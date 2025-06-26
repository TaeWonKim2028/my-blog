// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PostList } from './pages/PostList';
import { PostWrite } from './pages/PostWrite';
import { PostDetail } from './pages/PostDetail';
import './globals.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/write" element={<PostWrite />} />
        <Route path="/post/:id" element={<PostDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
