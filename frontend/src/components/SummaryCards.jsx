
export default function SummaryCards({ totalOrders, totalRevenue, totalInfluencers }) {
  return (
    <div className="summary-cards">
      <div className="card glass-card">
        <h3>Total Orders</h3>
        <p>{totalOrders}</p>
      </div>

      <div className="card glass-card">
        <h3>Total Revenue</h3>
        <p>₹{totalRevenue.toLocaleString('en-IN')}</p>
      </div>

      <div className="card glass-card">
        <h3>Influencers</h3>
        <p>{totalInfluencers}</p>
      </div>
    </div>
  );
}
