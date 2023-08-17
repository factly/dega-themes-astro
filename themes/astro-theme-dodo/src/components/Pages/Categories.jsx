function CategoriesListPage({ data }) {
  return (
    <>
      <div sx={{ maxWidth: '1400px', mx: 'auto', fontSize: '32px', px: '32px' }} className="max-w-[1400px] mx-auto text-[32px] px-8">
        <h1>Categories</h1>
      </div>
      <div sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(256px, 1fr))', gridGap: '32px', maxWidth: '1400px', mx: 'auto', mb: '48px', p: '32px' }} className="grid grid-cols-[repeat(auto-fit,minmax(256px,1fr))] gap-8 max-w-[1400px] mx-auto mb-12 p-8">
        {data.categories.nodes.map((category) => (
          <>
            <a sx={{ padding: '24px', fontWeight: 500, bg: '#eff8fa', borderRadius: '4px' }} href={`/category/${category.slug}/`} className="p-6 bg-[#eff8fa] radius-[4px]">
              {category.name}
            </a>
          </>
        ))}
      </div>
    </>
  );
}

export default CategoriesListPage;
