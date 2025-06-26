// src/components/Header/Header.tsx
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import {
  MdOutlineMenu,
  MdOutlineClose,
  MdOutlineDarkMode,
  MdOutlineLightMode,
} from 'react-icons/md';
import clsx from 'clsx';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') === 'dark');
  const location = useLocation();

  const navItems = [
    { to: '/about', label: 'ABOUT' },
    { to: '/', label: 'POSTS' },
    { to: '/guestbook', label: 'GUESTBOOK' },
  ];

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__inner}>
          {/* 로고: 테마에 따라 변경 */}
          <Link to="/" className={styles.logoWrapper}>
            <img
              src={isDark ? '/images/headerImageDark.png' : '/images/headerImage.png'}
              alt="헤더 로고"
              className={styles.logo}
            />
          </Link>

          {/* 중앙 메뉴 */}
          <nav className={styles.centeredNav}>
            <ul className={styles['desktop-nav__list']}>
              {navItems.map((item) => (
                <li
                  key={item.to}
                  className={clsx(styles['desktop-nav__item'], {
                    [styles.darkText]: isDark,
                    [styles.lightText]: !isDark,
                  })}
                >
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* 우측 아이콘 */}
          <div className={styles['header__icons']}>
            <div
              className={styles.themeToggle}
              onClick={() => setIsDark(!isDark)}
              title="Toggle theme"
            >
              {isDark ? (
                <MdOutlineLightMode size={22} color="white" />
              ) : (
                <MdOutlineDarkMode size={22} />
              )}
            </div>

            <MdOutlineMenu
              size={24}
              className={styles['header__menu-toggle']}
              onClick={() => setIsMobileMenuOpen(true)}
            />
          </div>
        </div>
      </header>

      {/* 모바일 메뉴 */}
      {isMobileMenuOpen && (
        <div className={styles['mobile-menu']}>
          <div className={styles['mobile-menu__header']}>
            <span className="layout-logo">My Blog</span>
            <MdOutlineClose size={24} onClick={() => setIsMobileMenuOpen(false)} />
          </div>
          <ul className={styles['mobile-menu__nav']}>
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to} onClick={() => setIsMobileMenuOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
