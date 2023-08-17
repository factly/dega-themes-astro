import FormatPageLayout from '@components/FormatPageLayout';

const FormatPage = ({ data }) => {
  const { posts } = data;
  return (
    <FormatPageLayout
      type="format"
      posts={posts.nodes}
      item={{ name: posts?.nodes[0]?.format?.name }}
    />
  );
};

export default FormatPage;
