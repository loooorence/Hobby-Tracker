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

function Sidebar() {
  return (
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

      <Link href="/ht" className={styles.Button}>
        <Icon className={styles.Icon} icon={plusIcon} width="25" />
        <span className={styles.Span}>Post</span>
      </Link>

      <Link href="/login" className={styles.Button}>
        <Icon className={styles.Icon} icon={userLine} width="25" />
        <span className={styles.Span}>Me</span>
      </Link>
    </nav>
  );
}

export default Sidebar;
