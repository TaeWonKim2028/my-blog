import { Header } from '../components/Header/Header';


export function PostList() {
  return (
    <>
      <Header />
      <main
        className="main-wrapper"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center', // 수직 중앙 정렬
          alignItems: 'center',     // 수평 중앙 정렬
          minHeight: 'calc(100vh - 60px)', // Header 높이를 뺀 만큼 확보
          textAlign: 'center',
        }}
      >
        <img
        
          src="/images/그림1.png"
          alt="공사중"
          style={{ maxWidth: '400px', width: '100%', marginBottom: '1.5rem', alignItems: 'center' }}
        />
        <p style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>
          🚧 메인페이지는 현재 작업중에 있습니다 🚧
        </p>
      </main>
    </>
  );
}
