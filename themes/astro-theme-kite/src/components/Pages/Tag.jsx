import FormatPageLayout from '@components/FormatPageLayout';

const TagDetailsFormat = ({ data }) => {
  const { posts, tag } = data;

  return <FormatPageLayout type="tag" posts={posts.nodes} item={tag} />;
};

export default TagDetailsFormat;
