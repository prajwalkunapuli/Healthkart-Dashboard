
export default function PayoutsTable({ data }) {
  return (
    <table border="1" cellPadding="8" cellSpacing="0" style={{ width: '100%', marginTop: 20 }}>
      <thead>
        <tr>
          <th>Influencer ID</th>
          <th>Basis</th>
          <th>Rate</th>
          <th>Orders</th>
          <th>Total Payout</th>
        </tr>
      </thead>
      <tbody>
        {data.length === 0 ? (
          <tr><td colSpan="5" style={{ textAlign: 'center' }}>No payouts found</td></tr>
        ) : (
          data.map(payout => (
            <tr key={payout._id}>
              <td>{payout.influencer_id}</td>
              <td>{payout.basis}</td>
              <td>₹{parseFloat(payout.rate).toLocaleString('en-IN')}</td>
              <td>{payout.orders}</td>
              <td>₹{parseFloat(payout.total_payout).toLocaleString('en-IN')}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}
