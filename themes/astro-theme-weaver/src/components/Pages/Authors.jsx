import Helmet from 'react-helmet';

function AuthorsListPage({ data }) {
  return (
    <>
      <Helmet>
        <title> Authors </title>
      </Helmet>
      <pre>{JSON.stringify(data, null, 2)}</pre>;
    </>
  );
}

export default AuthorsListPage;
