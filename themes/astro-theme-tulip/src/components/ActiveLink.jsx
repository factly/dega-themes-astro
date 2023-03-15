import React, { Children } from 'react';

// TODO: ASTRO Convert to astro

const ActiveLink = ({ children, activeClassName, ...props }) => {
  const { asPath } = useRouter();
  const child = Children.only(children);
  const childClassName = child.props.className || '';

  // pages/index.js will be matched via props.href
  // pages/about.js will be matched via props.href
  // pages/[slug].js will be matched via props.as

  const addTrailingSlash = (url) => url.replace(/\/?$/, '/');
  const href = props.href && addTrailingSlash(props.href);
  const as = props.as && addTrailingSlash(props.as);
  const className =
    asPath === href || asPath === as
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName;

  return (
    <a {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </a>
  );
};

export default ActiveLink;
