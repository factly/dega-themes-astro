import parseDate from '@helpers/parseDate';

const StoryCard = ({ post, type = 'basic' }) => {
  return (
    <>
      {type === 'basic' && (
        <article className="sc-card post">
          <a className="sc-card-link" href={`/${post.slug}/`}>
            <header className="sc-card-header">
              <h2 className="sc-card-title">{post.title}</h2>
            </header>

            <div className="sc-card-excerpt">{post.excerpt}</div>

            <footer className="sc-card-meta">
              <time className="sc-card-date" dateTime={parseDate(post.published_at)}>
                {parseDate(post.published_at)}
              </time>
              {/* <span className="sc-card-duration">2 min read</span> */}
            </footer>
          </a>
        </article>
      )}
    </>
  );
};

export default StoryCard;

//post.categories[0].name
