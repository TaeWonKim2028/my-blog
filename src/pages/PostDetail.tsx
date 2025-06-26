// src/pages/PostDetail.tsx
import { useParams } from 'react-router-dom';
import { usePostStore } from '../zustands/usePostStore';

export function PostDetail() {
  const { id } = useParams();
  const post = usePostStore((state) => state.getPostById(Number(id)));

  if (!post) return <p className="empty-message">포스트를 찾을 수 없습니다.</p>;

  return (
    <main className="main-wrapper">
      <section className="hero-section__card">
        <div className="hero-section__text-content">
          <h2 className="hero-section__title">{post.title}</h2>
          <p className="post-date">작성일: {post.date}</p>
          <p className="post-content" style={{ marginTop: '1rem' }}>{post.content}</p>
        </div>
      </section>
    </main>
  );
}