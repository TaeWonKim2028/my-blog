// src/pages/PostList.tsx
import { useEffect } from 'react';
import { usePostStore } from '../zustands/usePostStore';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import '../globals.css';

export function PostList() {
  const { posts, fetchPosts } = usePostStore();
  const navigate = useNavigate();

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <Header />
      <main className="main-wrapper">
        <section className="hero-section__card">
          <div className="hero-section__text-content">
            <h2 className="hero-section__title">블로그 포스트 목록</h2>
            <p className="hero-section__intro">블로그에 작성된 글들을 확인할 수 있습니다.</p>
            <button onClick={() => navigate('/write')} className="btn-primary" style={{ marginTop: '1rem' }}>
              글쓰기
            </button>
          </div>
        </section>
        <ul className="post-list">
          {posts.map((post) => (
            <li key={post.id} className="post-item" onClick={() => navigate(`/post/${post.id}`)}>
              <h2 className="post-title">{post.title}</h2>
              <p className="post-content">{post.content}</p>
              <small className="post-date">{post.date}</small>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
