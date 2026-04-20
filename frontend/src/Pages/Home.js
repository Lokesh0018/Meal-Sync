import React from "react";
import TilichoLogo from "../images/tilichologo.webp";

const Home = () => {
  return (
    <div className="home-page">
      
      {/* Top Navbar */}
      <header className="navbar">
          <img src={TilichoLogo} alt="Tilicho Labs" className="header-logo"/>


        <nav className="nav-links">
          <span className="active">Home</span>
          <span>My Meals</span>
          <span>History</span>
        </nav>

        <div className="user">Hello, Employee</div>
      </header>

      {/* Main Content */}
      <main className="content">
        <h1>Welcome to MealSync</h1>
        <p className="subtitle">Choose your meal for today</p>

        {/* Meal Options */}
        <div className="meal-grid">
          <div className="meal-card">
            <h3>Vegetarian Meal</h3>
            <p>Healthy vegetarian dishes</p>
            <button>Select Veg Meal</button>
            <span className="link">View Menu</span>
          </div>

          <div className="meal-card">
            <h3>Non-Vegetarian Meal</h3>
            <p>Delicious non-veg dishes</p>
            <button>Select Non-Veg Meal</button>
            <span className="link">View Menu</span>
          </div>

          <div className="meal-card">
            <h3>Custom Meal</h3>
            <p>Build your own meal</p>
            <button>Select Custom Meal</button>
            <span className="link">Customize</span>
          </div>
        </div>

        {/* Weekly Section */}
        <div className="weekly">
          <h2>Weekly Pre-Booking</h2>
          <p>Plan your meals for the week in advance</p>
          <button>Schedule Meals</button>
        </div>

        {/* Bottom Cards */}
        <div className="info-grid">
          <div className="info-card">
            <h4>Today's Menu</h4>
            <p>Veg: Paneer Butter Masala</p>
            <p>Non-Veg: Chicken Curry</p>
          </div>

          <div className="info-card">
            <h4>Upcoming Events</h4>
            <p>Team Lunch on Friday</p>
          </div>

          <div className="info-card">
            <h4>Meal Stats</h4>
            <p>This Week: 12 Meals</p>
            <p>Monthly: 48 Meals</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;