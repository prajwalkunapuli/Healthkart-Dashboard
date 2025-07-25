**HealthKart Influencer Dashboard**

A comprehensive dashboard for managing and tracking influencer marketing campaigns for HealthKart. This application provides insights into influencer performance, campaign tracking, and payout management.

**Features**

- **Campaign Tracking**: Monitor the performance of influencer campaigns in real-time
- **Influencer Management**: View and manage all influencer profiles and their performance metrics
- **Revenue Analytics**: Track sales and revenue generated through influencer campaigns
- **Payout Tracking**: Manage and track influencer payouts
- **Multi-platform Support**: Track performance across different social media platforms
- **Responsive Design**: Works on desktop and mobile devices

**Installation**

 Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher) or yarn

**Setup Instructions**

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd healthkart-dashbord
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

**Configuration**

1. **Backend Configuration**
   - The application uses JSON files in the `sample_data` directory for data storage
   - No database setup is required for basic functionality

2. **Environment Variables**
   Create a `.env` file in the backend directory with the following variables:
   ```
   PORT=4000
   NODE_ENV=development
   ```

**Running the Application**

1. **Start the backend server**
   ```bash
   cd backend
   npm start
   ```
   The backend server will start on `http://localhost:4000`

2. **Start the frontend development server**
   ```bash
   cd frontend
   npm start
   ```
   The frontend will open automatically in your default browser at `http://localhost:3000`

**Data Structure**

The application uses the following JSON files for data storage:

- `sample_data/influencers.json`: Contains influencer profiles and details
- `sample_data/posts.json`: Stores information about social media posts
- `sample_data/tracking.json`: Tracks campaign performance metrics
- `sample_data/payouts.json`: Manages influencer payment information

**Project Structure**

```
healthkart-dashbord/
├── backend/               # Backend server code
│   ├── routes/           # API route handlers
│   ├── models/           # Data models (if using database)
│   ├── index.js          # Main server file
│   └── package.json      # Backend dependencies
│
├── frontend/             # Frontend React application
│   ├── public/           # Static files
│   ├── src/              # Source code
│   │   ├── components/   # Reusable UI components
│   │   ├── App.jsx       # Main application component
│   │   └── index.js      # Application entry point
│   └── package.json      # Frontend dependencies
│
└── sample_data/          # JSON data files
    ├── influencers.json
    ├── posts.json
    ├── tracking.json
    └── payouts.json
```

**Dependencies**

 **Backend**
- Express.js - Web framework
- CORS - Cross-origin resource sharing
- Body-parser - Parse incoming request bodies
- Nodemon - Development server with auto-reload

 **Frontend**
- React - JavaScript library for building user interfaces
- Axios - Promise-based HTTP client
- React Router - Navigation and routing
- Styled Components - CSS-in-JS styling

**Notes**

- All monetary values are displayed in Indian Rupees (₹)
- The application is configured to work with sample data out of the box
- No database setup is required for initial use

**License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**Acknowledgments**

- Built for HealthKart
- Special thanks to all contributors
