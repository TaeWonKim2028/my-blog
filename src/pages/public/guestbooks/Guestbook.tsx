import { useEffect, useState } from 'react';
import styles from './Guestbook.module.css';
import { Header } from '../../../components/Header/Header';
import { Footer } from '../../../components/Footer/Footer';

export default function Guestbook() {
  const [showComments, setShowComments] = useState(false);
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const handleClick = () => {
    setShowComments(true);
  };

  return (
    <>
      <Header />
      <main
        className="main-wrapper"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: 'calc(100vh - 60px)',
          textAlign: 'center',
        }}
      >
        <img
          src="/images/그림2.png"
          alt="공사중"
          style={{ maxWidth: '400px', width: '100%' }}
        />

        <button onClick={handleClick} className={styles.button}>
          ✍️ 방명록 남기러 가기
        </button>

        {showComments && (
          <div style={{ width: '100%', marginTop: '2rem', textAlign: 'center' }}>
            {/* ✅ GitHub 아이콘 + 안내문 */}
            <div style={{ marginBottom: '1rem' }}>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="GitHub"
                style={{ width: '32px' }}
              />
              <p style={{ marginTop: '0.5rem', fontWeight: 'bold' }}>
                GitHub 계정으로 방명록을 남겨주세요!
              </p>
            </div>
            <Utterances isDark={isDark} />
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}

function Utterances({ isDark }: { isDark: boolean }) {
  return (
    <section
      ref={(el) => {
        if (!el) return;
        if (el.childNodes.length > 0) return;

        const script = document.createElement('script');
        script.src = 'https://utteranc.es/client.js';
        script.setAttribute('repo', 'TaeWonKim2028/my-blog'); // ⭐ 본인 저장소로 설정
        script.setAttribute('issue-term', 'pathname');
        script.setAttribute('label', 'guestbook');
        script.setAttribute('theme', isDark ? 'github-dark' : 'github-light');
        script.crossOrigin = 'anonymous';
        script.async = true;
        el.appendChild(script);
      }}
    />
  );
}
