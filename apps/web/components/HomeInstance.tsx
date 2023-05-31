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
    <div className={styles.instance}>
      <div className={styles.instance_top_text}>{word}</div>
    </div>
  );
};

export default HomeInstance;
