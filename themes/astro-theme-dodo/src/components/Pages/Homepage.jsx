import Seo from '@components/Seo';
import Featured from '../Homepage/Featured';
import FeaturedCategory from '../Homepage/FeaturedCategory';

const Homepage = ({ data }) => {
  const { posts, featuredCategories, space, categories, factchecks } = data;
  const featuredPost = posts.nodes[0];
  return (
    <>
      <Seo title={space.name} />
      <>
        {posts.nodes.length === 0 && <div>There are no posts to show!</div>}
        <Featured posts={posts.nodes} />
        {/* Featured categories Section  */}
        {featuredCategories?.nodes?.length > 0 && (
          <div>
            {featuredCategories.nodes.map((category) => {
              return <FeaturedCategory category={category} posts={category.posts.nodes} />;
            })}
          </div>
        )}
      </>
    </>
  );
};

export default Homepage;
