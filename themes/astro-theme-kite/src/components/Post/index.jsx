import { Helmet } from 'react-helmet';
import Seo from '@components/Seo';
import parseDate from '@helpers/parseDate';
// import {
//   FaRegClock,
//   FaFacebook,
//   FaTwitter,
//   FaWhatsapp,
//   FaPinterestSquare,
//   FaLinkedinIn,
//   FaLink,
//   FaLinkedin,
//   FaCopy,
// } from 'react-icons/fa';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook';
import { FaWhatsapp } from '@react-icons/all-files/fa/FaWhatsapp';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';
import { GoMarkGithub } from '@react-icons/all-files/go/GoMarkGithub';
import { FaCopy } from '@react-icons/all-files/fa/FaCopy';
import { FaLink } from '@react-icons/all-files/fa/FaLink';
import { FaRegClock } from '@react-icons/all-files/fa/FaRegClock';
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn';
import { FaTwitterSquare } from '@react-icons/all-files/fa/FaTwitterSquare';
import { FaWhatsappSquare } from '@react-icons/all-files/fa/FaWhatsappSquare';
import { FaPinterest } from '@react-icons/all-files/fa/FaPinterest';
import { FaPinterestSquare } from '@react-icons/all-files/fa/FaPinterestSquare';
import { FaEnvelope } from '@react-icons/all-files/fa/FaEnvelope';
import { isBrowser } from '@helpers/isBrowser';

/**
 * TODO: URI encoding
 * TODO: borderradius in theme ui
 * TODO: Add backgroudn to embeds if failed like factly.in
 */

const Post = ({ post, data }) => {
  const title = encodeURIComponent(post?.title);
  let url;
  if (isBrowser) {
    url = encodeURIComponent(window?.location.href);
  }

  return (
    <>
      <div className="container wrapper">
        <div className="hero">
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            {post?.categories.length > 0 && (
              <li className="breadcrumb-item">
                <a href={`/category/${post.categories[0].slug}/`}>{post?.categories[0].name}</a>
              </li>
            )}
            <li className="breadcrumb-item breadcrumb-item-current">{post?.title}</li>
          </ul>
          <div className="hero__content flex flex-col flex-cc m-b-lg">
            <div className="tag-list flex flex-wrap m-b-sm">
              {post.categories.length > 0 && (
                <a
                  className="tag-list__item has-accent flex flex-cc"
                  href={`/category/${post.categories[0].slug}/`}
                  title={post.categories[0].name}
                  aria-label={post.categories[0].name}
                >
                  <span
                    className="tag-list__item--accent"
                    style={{ backgroundColor: '#D91C38' }}
                  ></span>
                  {post.categories[0].name}
                </a>
              )}
            </div>

            <h1 className="hero__title text-center">{post?.title}</h1>

            <div className="hero__post-info flex flex-cc text-acc-3 fw-500">
              <span>Mar 19, 2021</span>
              <span className="m-l-sm m-r-sm">—</span>
              <span>1 min read</span>
            </div>
          </div>

          <div className="hero__media">
            <figure className="hero__figure">
              <img
                className="hero__img lazyautosizes lazyloaded"
                src={post.medium.url.proxy}
                alt={post?.title}
                sizes="640px"
              />
            </figure>
          </div>
        </div>
        <article className="post tag-welcome tag-hash-announcement content-wrap post-access-public">
          <div className="social-share">
            <a
              className="social-share__item js-share"
              tabindex="0"
              target="_blank"
              href="https://twitter.com/share?text=${post.title}&amp;url=${post.slug}"
              title="Share on Twitter"
              aria-label="Share on Twitter"
            >
              <i className="icon icon-twitter icon--sm">
                <FaTwitter className="icon__svg" />
              </i>{' '}
            </a>
            <a
              className="social-share__item js-share"
              tabindex="0"
              href="https://www.facebook.com/sharer.php?u=${post.slug}"
              title="Share on Facebook"
              aria-label="Share on Facebook"
            >
              <i className="icon icon-facebook icon--sm">
                <FaFacebook className="icon__svg" />
              </i>{' '}
            </a>
            <a
              className="social-share__item js-share"
              tabindex="0"
              target="_blank"
              href="https://www.linkedin.com/shareArticle?mini=true&amp;url=${post.slug}&amp;title=${post.title}&amp;summary=${post.title}"
              title="Share on Linkedin"
              aria-label="Share on Linkedin"
            >
              <i className="icon icon-linkedin icon--sm">
                <FaLinkedin className="icon__svg" />
              </i>{' '}
            </a>
            <a
              className="social-share__item"
              tabindex="0"
              href="mailto:?subject=${post.title}&amp;body=${post.slug}&nbsp;${post.title}"
              title="Share by email"
              aria-label="Share by email"
            >
              <i className="icon icon-mail icon--sm">
                <FaEnvelope className="icon__svg" />
              </i>{' '}
            </a>
            <button
              className="copy-link js-copy-link"
              tabindex="0"
              data-url="${post.slug}"
              title="Copy to clipboard"
              data-label="Copied!"
              aria-label="Copy to clipboard"
            >
              <i className="icon icon-copy icon--sm">
                <FaCopy className="icon__svg" />
              </i>{' '}
            </button>
          </div>

          <div className="content">
            <p className="content-excerpt">{post.excerpt}</p>

            <div dangerouslySetInnerHTML={{ __html: post.description_html }}></div>
          </div>
        </article>

        <div className="content-wrap">
          {post.users.length > 0 && (
            <div className="post-authors p flex flex-wrap bg-default">
              <div className="section__title text-acc-3 m-b-sm">Published by</div>
              <span className="special-delimiter"></span>
              <div className="card author-card" data-type="post">
                <a
                  className="author-card__media flex flex-cc"
                  href={`/author/${post.users[0].slug}/`}
                >
                  <img
                    className="author-card__img is-round z-index-1 has-shadow lazyautosizes lazyloaded"
                    srcset={`${post.users[0].medium?.url?.proxy} 300w, ${post.users[0].medium?.url?.proxy} 600w`}
                    data-src={post.users[0].medium?.url?.proxy}
                    src={post.users[0].medium?.url?.proxy}
                    alt={post.users[0].display_name}
                    sizes="86px"
                  />
                </a>

                <div className="author-card__content flex-1 flex flex-col text-acc-1">
                  <div className="author-card__name fw-600 text-lg m-b-xs">
                    <a href={`/author/${post.users[0].slug}/`}>{post.users[0].display_name}</a>
                  </div>

                  <div className="author-card__descr text-acc-2 m-b">
                    {post.users[0].description}
                  </div>

                  <div className="author-card__details flex">
                    {/* <div className="author-card__social flex">
                    <a
                      href=""
                      target="_blank"
                      title="Twitter"
                      aria-label="Twitter"
                    >
                      <i className="icon icon-twitter icon--xs">
                        <FaTwitter className="icon__svg" />
                      </i>{' '}
                    </a>
                    <a
                      href=""
                      target="_blank"
                      title="Facebook"
                      aria-label="Facebook"
                    >
                      <i className="icon icon-facebook icon--xs">
                        <FaFacebook className="icon__svg" />
                      </i>{' '}
                    </a>
                    <a
                      href=""
                      target="_blank"
                      title="Website"
                      aria-label="Website"
                    >
                      <i className="icon icon-link icon--xs">
                        <FaLinkedin className="icon__svg" />
                      </i>{' '}
                    </a>
                  </div> */}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Post;
