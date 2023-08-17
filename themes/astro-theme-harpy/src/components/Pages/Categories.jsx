function CategoriesListPage({ data }) {
  return (
    <>
      <div
        className="max-w-[1270px] mx-auto text-[32px] px-8 mb-8 text-center"
      >
        <h1>Categories</h1>
      </div>
      <div
        className="max-w-[1270px] mx-auto flex flex-wrap gap-8 text-center px-6 mb-12 justify-center"
      >
        {data?.categories?.nodes?.map((category) => (
          <>
            <div>
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
