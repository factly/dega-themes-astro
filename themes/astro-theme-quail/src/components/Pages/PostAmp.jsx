import Post from '@components/Post/index.jsx';

/**
 * TODO: Add loader for infinite-scroller
 */
const PostDetailsAmp = ({ data }) => {
  const { posts, space, post, recentPosts } = data;
  // const postEdge = posts.edges.filter(({ node }) => node.id === post.id)[0];
  // const { previous: previousPost, next: nextPost } = postEdge; TODO: Astro removals
  const previousPost = null, nextPost = null;

  // for sharing links
  // const title = encodeURIComponent(post.title);
  // let url;
  // if (isBrowser) {
  //   url = encodeURIComponent(window.location.href);
  // }

  return (
    <>
      <main id="sc-main" className="sc-main">
        <Post post={post} previous={previousPost} next={nextPost} />
      </main>
    </>
  );
};

export default PostDetailsAmp;
