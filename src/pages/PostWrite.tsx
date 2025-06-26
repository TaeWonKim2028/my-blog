// src/pages/PostWrite.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePostStore } from '../zustands/usePostStore';

export function PostWrite() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { addPost } = usePostStore();
  const navigate = useNavigate();

  const handleSubmit = () => {
    const newPost = {
      id: Date.now(),
      title,
      content,
      date: new Date().toISOString().split('T')[0],
    };
    addPost(newPost);
    navigate('/');
  };

  return (
    <main className="main-wrapper">
      <section className="hero-section__card">
        <div className="hero-section__text-content">
          <h2 className="hero-section__title">글 작성하기</h2>
          <input
            type="text"
            placeholder="제목을 입력하세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input-text"
          />
          <textarea
            placeholder="내용을 입력하세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="input-text"
            rows={10}
          />
          <button onClick={handleSubmit} className="btn-primary" style={{ marginTop: '1rem' }}>
            등록
          </button>
        </div>
      </section>
    </main>
  );
}