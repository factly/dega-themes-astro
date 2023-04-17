import Helmet from 'react-helmet';

function TagsListPage({ data }) {
  return (
    <>
      <Helmet>
        <title> Tags </title>
      </Helmet>
      <pre>{JSON.stringify(data, null, 2)}</pre>;
    </>
  );
}

export default TagsListPage;
