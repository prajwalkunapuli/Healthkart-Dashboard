export default function InfluencersTable({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th><th>Category</th><th>Gender</th><th>Followers</th><th>Platform</th>
        </tr>
      </thead>
      <tbody>
        {data.map(inf => (
          <tr key={inf._id}>
            <td>{inf.name}</td>
            <td>{inf.category}</td>
            <td>{inf.gender}</td>
            <td>{inf.followerCount}</td>
            <td>{inf.platform}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
