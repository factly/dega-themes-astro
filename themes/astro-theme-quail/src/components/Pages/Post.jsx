import Post from '@components/Post/index.js';

/**
 * TODO: Add loader for infinite-scroller
 */
const PostDetails = ({ data }) => {
  const { posts, space, post } = data;
  const postEdge = posts.edges.filter(({ node }) => node.id === post.id)[0];
  const { previous: previousPost, next: nextPost } = postEdge;

  // for sharing links
  // const title = encodeURIComponent(post.title);
  // let url;
  // if (isBrowser) {
  //   url = encodeURIComponent(window.location.href);
  // }

  return (
    <main id="sc-main" className="sc-main">
      <Post post={post} previous={previousPost} next={nextPost} />
    </main>
  );
};

export default PostDetails;
