import FormatPageLayout from '@components/FormatPageLayout';
import Seo from '@components/Seo';

function UserDetailsFormat({ data }) {
  const { user, posts } = data;
  const name = user.display_name ? `${user.display_name}` : `${user.first_name} ${user.last_name}`;

  return (
    <>
      <FormatPageLayout type="author" posts={posts.nodes} item={{ ...user, name }} />;
    </>
  );
}

export default UserDetailsFormat;
