//import './SideBar.css';
import { Icon } from '@iconify/react';
import homeLine from '@iconify/icons-majesticons/home-line';
import plusIcon from '@iconify/icons-majesticons/plus';
import userLine from '@iconify/icons-majesticons/user-line';
import mountainIcon from '@iconify/icons-noto/mountain';
// npm install --save-dev @iconify/react @iconify/icons-majesticons
// npm install --save-dev @iconify/react @iconify/icons-noto
import styles from "./SideBar.module.css"
import Link from 'next/link';

function SideBar() {

  return (
    
    <nav className={styles.flex_row}>

      <Link href="/" className={styles.head}>
        <Icon className={styles.logo} icon={mountainIcon} width="55"/>
        <h1 className={styles.hobby_tracker}>
          Hobby
          <br />
           Tracker
        </h1>
      </Link>
          
      <Link href="/" className={styles.button}>
        <Icon className={styles.icon} icon={homeLine} width="25"/>
        <span className={styles.span}>
          Explore 
        </span>
      </Link>

      <Link href="/HT" className={styles.button}>
        <Icon className={styles.icon} icon={plusIcon} width="25"/>
        <span className={styles.span}>
          Post
        </span>
      </Link>

      <Link href="/login" className={styles.button}>
        <Icon className={styles.icon} icon={userLine} width="25"/>
        <span className={styles.span}>
          Me
        </span>
      </Link>

    </nav>

  );
}


export default SideBar;
  