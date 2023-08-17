import PostGrid from '../PostGrid';

function TagDetailsAll({ data }) {
  const { posts, tag, formats } = data;
  const header = (item) => {
    return (
      <div
        sx={{
          mb: (theme) => `${theme.space.spacing6}`,
          fontSize: (theme) => `${theme.fontSizes.h6}`,
        }}
      >
        <h1
          sx={{
            fontSize: [(theme) => `${theme.fontSizes.h5}`, (theme) => `${theme.fontSizes.h4}`],
            mb: (theme) => `${theme.space.spacing5}`,
            textTransform: 'capitalize',
            px: (theme) => theme.space.layout2,
          }}
        >
          {item.name}
        </h1>
      </div>
    );
  };
  return (
    <>
      <PostGrid type="tag" posts={posts.nodes} formats={formats.nodes} item={tag} header={header} />
    </>
  );
}

export default TagDetailsAll;
