import styles from './HomeInstance.module.css';
import { useQuery} from '@tanstack/react-query';
import { gql } from '../data-access/graphql-client';

// query call to the database to access user posts
const HomeInstance = () => {
  const word = /* 'Most Recent  */ 'Post';
  const { data: dataPosts } = useQuery({
    queryKey: ['Posts}'],
    queryFn: () => gql.GetPosts(),
  });

// home instance component logic that shows up on homescreen
  const postImages = dataPosts?.posts.reverse().map((post) => (
    <div key={post.id} className={styles.Instance}>
      <div className={styles.Instance_top_text}>{word}</div>
      <img className={styles.Image_posts} src={post.title} alt="Image" />
      <div className={styles.Post_description}>{post.description}</div>
    </div>
  ));

// returning posted image
  return <div>{postImages}</div>;
};

export default HomeInstance;
