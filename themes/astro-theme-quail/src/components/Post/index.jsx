import { Helmet } from 'react-helmet';
import Seo from '@components/Seo';
import parseDate from '@helpers/parseDate';
import { parseTiptapContent } from '@helpers/parseTiptapContent';
import { FaChevronLeft } from '@react-icons/all-files/fa/FaChevronLeft';
import { FaChevronRight } from '@react-icons/all-files/fa/FaChevronRight';
import { FaTwitterSquare } from '@react-icons/all-files/fa/FaTwitterSquare';
import { FaFacebookSquare } from '@react-icons/all-files/fa/FaFacebookSquare';
import { FaWhatsappSquare } from '@react-icons/all-files/fa/FaWhatsappSquare';
/**
 * TODO: URI encoding
 * TODO: borderradius in theme ui
 * TODO: Add backgroudn to embeds if failed like factly.in
 */

const Post = ({ post, previous, next }) => {
  // const title = encodeURIComponent(post.title);
  // let url;
  // if (isBrowser) {
  //   url = encodeURIComponent(window.location.href);
  // }

  return (
    <>
      <article className="sc-article post">
        <header className="sc-article-header sc-canvas">
          <span className="sc-article-meta">
            {post.users.length > 0 && (
              <>
                {' '}
                By{' '}
                <a key={post.id} href={`/author/${post.users[0].slug}`}>
                  {post.users[0].display_name}
                </a>
                {/* <span className="u-hidden u-hidden">,&nbsp;</span>
                    <span className="u-hidden ">&nbsp;and&nbsp;</span> */}
              </>
            )}{' '}
            {post.categories.length > 0 && (
              <>
                in{' '}
                <a href={`/category/${post.categories[0].slug}`} className="sc-article-tag">
                  {post.categories[0].name}
                </a>
              </>
            )}
            —
            <time
              className="c-timestamp c-topper__timestamp"
              dateTime={parseDate(post.published_at)}
            >
              {parseDate(post.published_at)}
              {/* <span className="c-timestamp__detail"> . 12:00 AM</span> */}
            </time>{' '}
          </span>

          <h1 className="sc-article-title">{post.title}</h1>

          <p className="sc-article-excerpt">{post.excerpt}</p>

          <figure className="sc-article-image">
            <img
              srcset={`${post.medium?.url?.proxy}?rs:fill/w:300 300w,
                    ${post.medium?.url?.proxy}?rs:fill/w:720 720w,
                    ${post.medium?.url?.proxy}?rs:fill/w:960 960w,
                    ${post.medium?.url?.proxy}?rs:fill/w:1200 1200w,
                    ${post.medium?.url?.proxy}?rs:fill/w:1200 2000w`}
              sizes="(max-width: 1200px) 100vw, 1200px"
              src={`${post.medium?.url?.proxy}?rs:fill/w:1200`}
              alt={post.title}
            />
          </figure>
        </header>

        <div className="sc-content sc-canvas">{parseTiptapContent(post.description_html)}</div>

        <footer className="sc-article-footer sc-canvas">
          <nav className="sc-navigation">
            <div className="sc-navigation-previous">
              {previous && (
                <a className="sc-navigation-link" href={`/${previous.slug}/`}>
                  <span className="sc-navigation-label">
                    <FaChevronLeft /> Previous issue
                  </span>
                  <h4 className="sc-navigation-title">{previous.title}</h4>
                </a>
              )}
            </div>

            <div className="sc-navigation-middle"></div>

            <div className="sc-navigation-next">
              {next && (
                <a className="sc-navigation-link" href={`/${next.slug}/`}>
                  <span className="sc-navigation-label">
                    Next issue
                    <FaChevronRight />
                  </span>
                  <h4 className="sc-navigation-title">{next.title}</h4>
                </a>
              )}
            </div>
          </nav>
        </footer>
      </article>
    </>
  );
};

export default Post;
