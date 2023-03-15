import StoryCard from '../UI/StoryCard';

const Homepage = ({ data }) => {
  const { space, categories, factchecks, posts } = data;

  const featuredPosts = posts.nodes.slice(0, 3);

  return (
    <>
      <main id="site-main" className="site-main outer">
        <div className="inner posts">
          <div className="post-feed">
            <StoryCard post={featuredPosts[0]} type="large" />

            <StoryCard post={featuredPosts[1]} type="featured" />
            <StoryCard post={featuredPosts[2]} type="featured" />

            {posts.nodes.slice(3).map((post) => (
              <StoryCard post={post} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Homepage;
