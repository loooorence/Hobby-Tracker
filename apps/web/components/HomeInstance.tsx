import styles from './HomeInstance.module.css';
import { useQuery } from '@tanstack/react-query';
import { gql } from '../data-access/graphql-client';
import Image from 'next/image';

const HomeInstance = () => {
  const word = /* 'Most Recent  */ 'Post';
  const { data: dataPosts } = useQuery({
    queryKey: ['Posts}'],
    queryFn: () => gql.GetPosts(),
  });

  const postImages = dataPosts?.posts.reverse().map((post) => (
    <div key={post.id} className={styles.Instance}>
      <div className={styles.Instance_top_text}>{word}</div>
      <Image
        className={styles.Image_posts}
        src={post.title}
        alt="Image"
        width={128}
        height={128}
      />
      <div className={styles.Post_description}>{post.description}</div>
    </div>
  ));

  return <div>{postImages}</div>;
};

export default HomeInstance;
