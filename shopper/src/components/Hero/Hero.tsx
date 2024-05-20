import "./Hero.css";
import hand_icon from "../../assets/hand_icon.png";
import arrow_icon from "../../assets/arrow.png";
import hero_image from "../../assets/hero_image.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS</h2>
        <div className="hero-hand-icon">
          <p>New</p>
          <img src={hand_icon} />
        </div>
        <p>Collections</p>
        <p>For Everyone</p>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} />
        </div>
      </div>
      <div className="hero-right"></div>
      <img src={hero_image} />
    </div>
  );
};

export default Hero;
