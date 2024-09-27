import bannersShoes from "../../images/banners/shoes.png";
import bannersHouse from "../../images/banners/house.png"
import "./header-banner.css";

const HeaderBanner = () => {
  return (
    <div className="header-banner">
      <img
        className="header-banner-img"
        src= {bannersShoes}
        alt=""
      />
      <img
        className="header-banner-img"
        src={bannersHouse}
        alt=""
      />
    </div>
  );
};

export default HeaderBanner;
