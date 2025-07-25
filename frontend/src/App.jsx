import axios from 'axios';
import { useEffect, useState } from 'react';
import FilterBar from './components/FilterBar';
import SummaryCards from './components/SummaryCards';
import TrackingTable from './components/TrackingTable';
import './App.css';

function App() {
  const [trackingData, setTrackingData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const platforms = [...new Set(trackingData.map(item => item.source))];
  const categories = [...new Set(trackingData.map(item => item.product))];

  useEffect(() => {
    axios.get('http://localhost:4000/api/tracking')
      .then(res => {
        setTrackingData(res.data);
        setFilteredData(res.data);
      });
  }, []);

  const handleFilterChange = ({ platform, category }) => {
    let data = [...trackingData];
    if (platform) {
      data = data.filter(item => item.source === platform);
    }
    if (category) {
      data = data.filter(item => item.product === category);
    }
    setFilteredData(data);
  };

  // Example aggregate calculations
  const totalOrders = filteredData.reduce((acc, curr) => acc + (curr.orders || 0), 0);
  const totalRevenue = filteredData.reduce((acc, curr) => acc + (curr.revenue || 0), 0);
  const totalInfluencers = new Set(filteredData.map(item => item.influencer_id)).size;

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-header">HealthKart Influencer Dashboard</h1>

      <FilterBar 
        onFilterChange={handleFilterChange} 
        platforms={platforms} 
        categories={categories} 
      />

      <SummaryCards
        totalOrders={totalOrders}
        totalRevenue={totalRevenue}
        totalInfluencers={totalInfluencers}
      />

      <TrackingTable data={filteredData} />
    </div>
  );
}

export default App;
