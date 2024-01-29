import "./Banner.css"
const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-left">
        <h2 className="banner-header">
          Experience food <br />
          <span className="primary">Delivery</span> like no other
        </h2>
        <p className="banner-text">
          We deliver the food of your choice wherever, whenever. Select your
          food from only the top restaurants in the area, and get it in a flash.
          Download the app now to discover more
        </p>
      </div>
      <div className="banner-right">
        <img src="/public/assets/banner1.png" alt="banner101" className="img101" />
        <img src="/public/assets/banner102.png" alt="banner102" className="img102" />
      </div>
    </div>
  );
};

export default Banner;
