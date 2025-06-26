// src/zustand/usePostStore.ts
import { create } from 'zustand';

export interface Post {
  id: number;
  title: string;
  content: string;
  date: string;
}

interface PostStore {
  posts: Post[];
  addPost: (post: Post) => void;
  fetchPosts: () => void;
  getPostById: (id: number) => Post | undefined;
}

export const usePostStore = create<PostStore>((set, get) => ({
  posts: [],
  fetchPosts: () => {
    set({
      posts: [
        {
          id: 1,
          title: 'Zustand로 상태 관리하기',
          content: 'Zustand는 간단하고 가벼운 상태관리 라이브러리입니다.',
          date: '2025-06-26',
        },
        {
          id: 2,
          title: 'Next.js vs CRA',
          content: 'Next.js는 서버 사이드 렌더링을 지원합니다.',
          date: '2025-06-25',
        },
      ],
    });
  },
  addPost: (post: Post) => set((state) => ({ posts: [...state.posts, post] })),
  getPostById: (id: number) => get().posts.find((post) => post.id === id),
}));
