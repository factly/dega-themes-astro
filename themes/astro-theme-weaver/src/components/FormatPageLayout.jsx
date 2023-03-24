import StoryCard from './UI/StoryCard';

const FormatPageLayout = ({ type, posts, item }) => {
  return (
    <>
      <div className="site-content">
        <main id="site-main" className="site-main outer">
          <div className="post-feed inner">
            <section className="post-card post-card-large">
              <div className="post-card-content">
                <div className="post-card-content-link">
                  {type === 'author' && item.medium?.url?.proxy && (
                    <img
                      className="author-profile-pic"
                      src={item.medium?.url?.proxy}
                      alt={item.name}
                    />
                  )}

                  <header className="post-card-header">
                    <h2 className="post-card-title">{item.name}</h2>
                  </header>

                  <div className="post-card-excerpt">{item.description}</div>
                </div>
              </div>
            </section>

            {posts.map((post) => (
              <StoryCard post={post} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default FormatPageLayout;
