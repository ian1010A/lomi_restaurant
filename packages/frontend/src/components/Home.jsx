import { NavBar } from "./Navbar";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home-page">
      <NavBar />
      <div className="home-intro-container">
        <div className="home-intro">
          <div className="home-intro-text">
            <h1>Lomi Restaurant</h1>
            <h2>Kula Local, Kula Fresh</h2>
            <Link to="/menu">
              <button className="order-now-btn">Order Now</button>
            </Link>
          </div>
          <div className="home-intro-image overlap-images orbit-animation">
            <img className="overlap-img orbit-img orbit-img-1" src="/images/food.jpg" alt="" />
            <img className="overlap-img orbit-img orbit-img-2" src="/images/tea.jpg" alt="" />
            <img className="overlap-img orbit-img orbit-img-3" src="/images/ugali-mayai.png" alt="" />
            <img className="overlap-img orbit-img orbit-img-4" src="/images/ugalimatumbo.png" alt="" />
            <img className="overlap-img orbit-img orbit-img-5" src="/images/samosas.png" alt="" />
          </div>
        </div>
      </div>
      <div className="menu-preview"></div>
    </div>
  );
};

export default HomePage;