import React, { useRef, useEffect, createRef } from 'react'; // eslint-disable-line no-unused-vars
import { Helmet } from 'react-helmet';
// import FactCheckWidget from '@components/Post/FactCheckWidget';
// import Badge from '@components/Post/Badge';
import Seo from '@components/Seo';
import parseDate from '@helpers/parseDate.js';

import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook';
import { FaWhatsapp } from '@react-icons/all-files/fa/FaWhatsapp';
import { FaPinterestSquare } from '@react-icons/all-files/fa/FaPinterestSquare';
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn';
import { FaEnvelope } from '@react-icons/all-files/fa/FaEnvelope';
import { FaLink } from '@react-icons/all-files/fa/FaLink';
import { FaRegClock } from '@react-icons/all-files/fa/FaRegClock';

import { isBrowser } from '@helpers/isBrowser';
import { parseTiptapContent } from '@helpers/parseTiptapContent.jsx';

/**
 * TODO: URI encoding
 * TODO: borderradius in theme ui
 * TODO: Add backgroudn to embeds if failed like factly.in
 */

const Post = ({ post }) => {
  // const title = encodeURIComponent(post.title);
  // let url;
  // if (isBrowser) {
  //   url = encodeURIComponent(window.location.href);
  // }

  return (
    <>
      <Seo title={post.title} description={post.excerpt} />
      <Helmet>
        {post.schemas &&
          post.schemas.map((schema, i) => (
            <script key={i} type="application/ld+json">
              {JSON.stringify(schema)}
            </script>
          ))}
      </Helmet>

      <article className="article post tag-getting-started ">
        <header className="article-header de-canvas">
          <div className="article-tag post-card-tags">
            <span className="post-card-primary-tag">
              {post.categories.length > 0 && (
                <a href={`/category/${post.categories[0].slug}/`}>{post.categories[0].name}</a>
              )}
            </span>
          </div>

          <h1 className="article-title">{post.title}</h1>

          <p className="article-excerpt">{post.excerpt}</p>

          <div className="article-byline">
            <section className="article-byline-content">
              <ul className="author-list">
                <li className="author-list-item">
                  {post.users.length > 0 && (
                    <>
                      <a
                        key={post.id}
                        href={`/author/${post.users[0].slug}`}
                        className="author-avatar"
                      >
                        <img
                          className="author-profile-image"
                          src={post.users[0].medium?.url?.proxy}
                          alt={post.users[0].display_name}
                        />
                      </a>
                    </>
                  )}
                </li>
              </ul>

              <div className="article-byline-meta">
                <h4 className="author-name">
                  {post.users.length > 0 && (
                    <a href={`/author/${post.users[0].slug}`}>{post.users[0].display_name}</a>
                  )}
                </h4>
                <div className="byline-meta-content">
                  <time className="byline-meta-date" dateTime={parseDate(post.published_at)}>
                    {parseDate(post.published_at)}
                  </time>
                  {/* <span className="byline-reading-time">
                    <span className="bull">•</span> 2 min read
                  </span>  */}
                </div>
              </div>
            </section>
          </div>

          <figure className="article-image">
            <img
              srcset={`${post.medium?.url?.proxy}?rs:fill/w:320 300w,
                    ${post.medium?.url?.proxy}?rs:fill/w:640 720w,
                    ${post.medium?.url?.proxy}?rs:fill/w:720 960w,
                    ${post.medium?.url?.proxy}?rs:fill/w:960 1200w,
                    ${post.medium?.url?.proxy}?rs:fill/w:1200 2000w`}
              sizes="(max-width: 1200px) 100vw, 1200px"
              src={`${post.medium?.url?.proxy}?rs:fill/w:1200`}
              alt={post.title}
            />
          </figure>
        </header>

        {parseTiptapContent(post.description_html)}
      </article>
    </>
  );
};

export default Post;
