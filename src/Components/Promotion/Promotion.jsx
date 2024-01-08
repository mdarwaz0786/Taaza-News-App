import "./Promotion.css";
import AppleApp from "../../assets/AppleApp.png";
import GoogleApp from "../../assets/GoogleApp.png";

const Promotion = () => {
  return (
    <>
      <div className="promotion-container">
        <div>
          <p>For the best experience use Taaza News App on your smartphone.</p>
        </div>
        <div>
          <img src={AppleApp} alt="logo" />
        </div>
        <div>
          <img src={GoogleApp} alt="logo" />
        </div>
      </div>
    </>
  );
};

export default Promotion;
