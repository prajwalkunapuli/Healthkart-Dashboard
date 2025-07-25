
export default function PostsTable({ data }) {
  return (
    <table border="1" cellPadding="8" cellSpacing="0" style={{ width: '100%', marginTop: 20 }}>
      <thead>
        <tr>
          <th>Influencer ID</th>
          <th>Platform</th>
          <th>Date</th>
          <th>URL</th>
          <th>Caption</th>
          <th>Reach</th>
          <th>Likes</th>
          <th>Comments</th>
        </tr>
      </thead>
      <tbody>
        {data.length === 0 ? (
          <tr><td colSpan="8" style={{ textAlign: 'center' }}>No posts found</td></tr>
        ) : (
          data.map(post => (
            <tr key={post._id}>
              <td>{post.influencer_id}</td>
              <td>{post.platform}</td>
              <td>{new Date(post.date).toLocaleDateString()}</td>
              <td>
                <a href={post.URL} target="_blank" rel="noopener noreferrer">
                  Link
                </a>
              </td>
              <td>{post.caption}</td>
              <td>{post.reach}</td>
              <td>{post.likes}</td>
              <td>{post.comments}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}
