import Helmet from 'react-helmet';

function AuthorsListPage({ data }) {
  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>;
    </>
  );
}

export default AuthorsListPage;
