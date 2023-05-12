//import './SideBar.css';
import { Icon } from '@iconify/react';
import homeLine from '@iconify/icons-majesticons/home-line';
import plusIcon from '@iconify/icons-majesticons/plus';
import userLine from '@iconify/icons-majesticons/user-line';
import mountainIcon from '@iconify/icons-noto/mountain';
// npm install --save-dev @iconify/react @iconify/icons-majesticons
// npm install --save-dev @iconify/react @iconify/icons-noto
import styles from "./SideBar.module.css"

import {
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

function SideBar() {
  /*const navigate = useNavigate();

  const navigateHome = () => {
    // navigate to /
    navigate('/');
  };

  const navigateToMe = () => {
    // navigate to /contacts
    navigate('/me');
  };
  const navigateToPost = () => {
    // navigate to /contacts
    navigate('/post');
  };*/

  return (
    <nav className={styles.flex_col}>
      
      <div>
        <Icon className={styles.logo} icon={mountainIcon} width="55"/>
        <span className={styles.logo_span}>
          <h1 className={styles.hobby_tracker}>
            Hobby
            <br />
            Tracker
          </h1>
        </span>
      </div>

      <div className={styles.flex_row}>
          
          <button className={styles.button}>
            <Icon className={styles.home_icon} icon={homeLine} color="#879198" width="25"/>
            <span className={styles.span}>
              Home 
            </span>
          </button>

          <button className={styles.button}>
            <Icon className={styles.post_icon} icon={plusIcon} color="#879198" width="25"/>
            <span className={styles.span}>
              Post
            </span>
          </button>

          <button className={styles.button}>
            <Icon className={styles.me_icon} icon={userLine} color="#879198" width="25"/>
            <span className={styles.span}>
              Me
            </span>
          </button>

  

      </div>

    </nav>

  );
}

function Home() {
  return <h2>Home</h2>;
}

function Me() {
  return <h2>Me</h2>;
}

function Post() {
  return <h2>Post</h2>;
  
}

export default SideBar;
  