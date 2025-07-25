export default function TrackingTable({ data }) {
  return (
    <div className="tracking-table-container glass-card">
      <table className="tracking-table">
        <thead>
          <tr>
          <th>Source</th>
          <th>Campaign</th>
          <th>Influencer ID</th>
          <th>User ID</th>
          <th>Product</th>
          <th>Date</th>
          <th>Orders</th>
          <th>Revenue</th>
        </tr>
      </thead>
      <tbody>
        {data.length === 0 ? (
          <tr><td colSpan="8" style={{ textAlign: 'center' }}>No tracking data found</td></tr>
        ) : (
          data.map(track => (
            <tr key={`${track.influencer_id}-${track.user_id}`}>
              <td>{track.source}</td>
              <td>{track.campaign}</td>
              <td>{track.influencer_id}</td>
              <td>{track.user_id}</td>
              <td>{track.product}</td>
              <td>{new Date(track.date).toLocaleDateString()}</td>
              <td>{track.orders}</td>
              <td>₹{track.revenue.toLocaleString('en-IN')}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
    </div>
  );
}
