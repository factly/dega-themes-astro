import Helmet from 'react-helmet';

function CategoriesListPage({ data }) {
  return (
    <>
      <Helmet>
        <title> Categories </title>
      </Helmet>
      <div
        sx={{
          maxWidth: '1270px',
          mx: 'auto',
          fontSize: '32px',
          px: '32px',
          mb: '32px',
          textAlign: 'center',
        }}
        className="max-w-[1270px] mx-auto text-[32px] px-8 mb-8 text-center"
      >
        <h1>Categories</h1>
      </div>
      <div
        sx={{
          maxWidth: '1270px',
          mx: 'auto',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '32px',
          textAlign: 'center',
          px: '24px',
          mb: '48px',
          justifyContent: 'center',
        }}
        className="max-w-[1270px] mx-auto flex flex-wrap gap-8 text-center px-6 mb-12 justify-center"
      >
        {data.categories.nodes.map((category) => (
          <>
            <div sx={{}}>
              <a href={category.slug}>
                {' '}
                {category.medium}
                <img
                  sx={{ borderRadius: '24px' }}
                  src="https://source.unsplash.com/random/280x230"
                  alt=""
                />
              </a>

              <a href={`/category/${category.slug}/`}>
                <p sx={{ mt: '24px', fontWeight: 700 }} className="mt-6 font-bold text-gray-900">
                  {' '}
                  {category.name}
                </p>
              </a>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default CategoriesListPage;
