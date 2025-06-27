// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PostList } from './pages/PostList';
import { PostWrite } from './pages/PostWrite';
import { PostDetail } from './pages/PostDetail';
import Guestbook from './pages/public/guestbooks/Guestbook';
import './globals.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/write" element={<PostWrite />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/guestbook" element={<Guestbook />} /> {/* ✅ Guestbook 라우트 추가 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
