import styles from './HomeInstance.module.css';

const HomeInstance = () => {
  const word = 'Most Recent Post';
  return (
    <div className ={styles.instance}>
      <div className = {styles.instance_top_text}>{word}</div>
    </div>
  );
};

export default HomeInstance;