//import './SideBar.css';
import { Icon } from '@iconify/react';
import homeLine from '@iconify/icons-majesticons/home-line';
import plusIcon from '@iconify/icons-majesticons/plus';
import userLine from '@iconify/icons-majesticons/user-line';
import mountainIcon from '@iconify/icons-noto/mountain';
// npm install --save-dev @iconify/react @iconify/icons-majesticons
// npm install --save-dev @iconify/react @iconify/icons-noto
import styles from './SideBar.module.css';
import Link from 'next/link';
import { useAuth, useAuthDispath } from '../context/Auth.context';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function Sidebar() {
  const { user, isLoggedIn } = useAuth();
  const dispatch = useAuthDispath();
  const router = useRouter();

  const handleLogOut = () => {
    dispatch({ type: 'LOG_OUT' });
    router.push('/login');
  };

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/login');
    }
  }, [router, isLoggedIn]);

  return isLoggedIn ? (
    <nav className={styles.Flex_row}>
      <Link href="/" className={styles.Head}>
        <Icon className={styles.Logo} icon={mountainIcon} width="55" />
        <h1 className={styles.Hobby_tracker}>
          Hobby
          <br />
          Tracker
        </h1>
      </Link>

      <Link href="/" className={styles.Button}>
        <Icon className={styles.Icon} icon={homeLine} width="25" />
        <span className={styles.Span}>Explore</span>
      </Link>

      <Link href="/HT" className={styles.Button}>
        <Icon className={styles.Icon} icon={plusIcon} width="25" />
        <span className={styles.Span}>Post</span>
      </Link>

      <Link href="/" className={styles.Button}>
        <Icon className={styles.Icon} icon={userLine} width="25" />
        <span className={styles.Span}>{user.name}</span>
      </Link>

      <Button variant="contained" onClick={handleLogOut}>
        Sign out
      </Button>
    </nav>
  ) : null;
}

export default Sidebar;
