import styles from './HomeInstance.module.css';
import { useQuery } from '@tanstack/react-query';
import { gql } from '../data-access/graphql-client';

const HomeInstance = () => {
  const word = /* 'Most Recent  */ 'Post';
  const { data: dataPosts, isLoading } = useQuery({
    queryKey: ['Posts'],
    queryFn: () => gql.GetPosts(),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const postImages = dataPosts?.posts.reverse().map((post) => (
    <div key={post.id} className={styles.Instance}>
      <div className={styles.Instance_top_text}>{word}</div>
      <img
        className={styles.Image_posts}
        src={post.title}
        alt="Image"
        // width={1200}
        // height={1200}
      />
      <div>Author: {post.author.name}</div>
      {post.Label && post.Label[0] ? (
        <div>Label: {post.Label[0]?.name}</div>
      ) : null}
      <div className={styles.Post_description}>{post.description}</div>
    </div>
  ));

  return <div>{postImages}</div>;
};

export default HomeInstance;
