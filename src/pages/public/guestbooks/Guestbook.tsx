import styles from './Guestbook.module.css';
import { Link } from 'react-router-dom';
import { Header } from '../../../components/Header/Header';
import { Footer } from '../../../components/Footer/Footer';

export default function Guestbook() {
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
          style={{ maxWidth: '400px', width: '100%'}}
        />

        {/* ✅ 버튼으로 변경 */}
        <Link
          to="/guestbook/write"
          className={styles.button}
        >
          방명록 남기러 가기
        </Link>
      </main>
      <Footer />
    </>
  );
}