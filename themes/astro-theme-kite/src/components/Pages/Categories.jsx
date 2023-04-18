import Helmet from 'react-helmet';

function CategoriesListPage({ data }) {
  return (
    <>
      <Helmet>
        <title> Categories </title>
      </Helmet>
      <div
        sx={{ maxWidth: '1400px', mx: 'auto', fontSize: '32px', px: '32px' }}
        className="max-w-[1400px] mx-auto text-[32px] px-8"
      >
        <h1>Categories</h1>
      </div>
      <div
        sx={{
          maxWidth: '1400px',
          mx: 'auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(256px, 1fr))',
          gridGap: '32px',
          p: '32px',
        }}
        className="max-w-[1400px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(256px,1fr))] gap-8 p-8"
      >
        {data.categories.nodes.map((category) => (
          <div
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              bg: '#D6BBFB',
              p: '48px',
              textAlign: 'center',
              borderRadius: '8px',
            }}
            className="flex flex-col gap-6 bg-[#D6BBFB] p-12 text-center rounded-[8px]"
          >
            <a
              sx={{ display: 'flex', justifyContent: 'center' }}
              className="flex justify-center"
              href={category.slug}
            >
              <img
                sx={{
                  width: '96px',
                  height: '96px',
                  bg: '#000',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  maxWidth: '100%',
                }}
                className="w-[96px] h-[96px] bg-black rounded-[50%] object-cover max-w-full"
                src="https://source.unsplash.com/random"
                alt=""
              />
            </a>
            <a sx={{ fontWeight: 700 }} className="font-bold" href={`/category/${category.slug}/`}>
              {category.name}
            </a>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default CategoriesListPage;
