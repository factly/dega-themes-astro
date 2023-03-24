import Helmet from 'react-helmet';

function CategoriesListPage({ data }) {
  return (
    <>
      <Helmet>
        <title> Categories </title>
      </Helmet>
      <pre>{JSON.stringify(data, null, 2)}</pre>;
    </>
  );
}

export default CategoriesListPage;
