import axios from "axios";

// Adjust based on your backend's actual location:
const API_BASE = "http://localhost:4000/api";

// ----------- Uploads -----------
export const uploadData = (endpoint, data) => 
  axios.post(`${API_BASE}/upload/${endpoint}`, data);

// ----------- Gets -----------
export const getInfluencers = () => 
  axios.get(`${API_BASE}/influencers`);

export const getPosts = () => 
  axios.get(`${API_BASE}/posts`);

export const getTracking = () => 
  axios.get(`${API_BASE}/tracking`);

export const getPayouts = () => 
  axios.get(`${API_BASE}/payouts`);

export const getROI = () => 
  axios.get(`${API_BASE}/insights/roi`);

export const getTopInfluencers = () => 
  axios.get(`${API_BASE}/insights/top-influencers`);

// Optional: get all insights in one call
export const getInsights = () =>
  axios.get(`${API_BASE}/insights`);
