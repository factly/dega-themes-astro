import StoryCard from '../UI/StoryCard';
import Seo from '@components/Seo';

const Homepage = ({ data }) => {
  const { space, categories, factchecks, posts } = data;

  // TODo: Add pagination and featured categories

  return (
    <>
      <Seo data={data} title={space?.name} />
      <div className="container wrapper">
        <div className="grid post-feed js-post-feed">
          {posts.nodes.slice(0, 24).map((post) => (
            <StoryCard post={post} />
          ))}{' '}
        </div>
        <hr />
      </div>
    </>
  );
};

export default Homepage;
