import Post from '@components/Post/index.jsx';
import { isBrowser } from '@helpers/isBrowser';
import Seo from '@components/Seo';

/**
 * TODO: Add loader for infinite-scroller
 */
const PostDetails = ({ data }) => {
  const { posts, space, post, recentPosts } = data;
  // const postEdge = posts.edges.filter(({ node }) => node.id === post.id)[0];
  // const { previous: previousPost, next: nextPost } = postEdge; TODO: REMOVALS

  // for sharing links
  // const title = encodeURIComponent(post.title);
  // let url;
  // if (isBrowser) {
  //   url = encodeURIComponent(window.location.href);
  // }

  return (
    <>
      <div className="container wrapper">
        <Post post={post} />
      </div>
    </>
  );
};

export default PostDetails;
