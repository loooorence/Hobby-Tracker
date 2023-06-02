import { useQuery } from '@tanstack/react-query';
import styles from './HomeInstance.module.css';
import { gql } from '../data-access/graphql-client';

const HomeInstance = () => {
  const word = 'Most Recent Post';
  // const {
  //   isLoading: isLoadingUsers,
  //   error: errorUsers,
  //   data: dataUsers,
  // } = useQuery({
  //   queryKey: ['Users'],
  // queryFn: () => gql.GetUsers(),
  // });

  // console.log(dataUsers);

  return (
    <div className={styles.Instance}>
      <div className={styles.Instance_top_text}>{word}</div>
    </div>
  );
};

export default HomeInstance;
