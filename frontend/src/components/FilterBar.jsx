import { useState } from 'react';

export default function FilterBar({ onFilterChange, platforms, categories }) {
  const [platform, setPlatform] = useState('');
  const [category, setCategory] = useState('');

  const handleApply = () => {
    onFilterChange({ platform, category });
  };

  return (
    <div className="filter-bar glass-card">
      <div className="filter-group">
        <label htmlFor="platform-select">Platform</label>
        <select id="platform-select" value={platform} onChange={e => setPlatform(e.target.value)}>
          <option value="">All Platforms</option>
          {platforms.map(p => <option key={p} value={p}>{p}</option>)}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="category-select">Category</label>
        <select id="category-select" value={category} onChange={e => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          {categories.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      <button onClick={handleApply}>Apply Filters</button>
    </div>
  );
}
