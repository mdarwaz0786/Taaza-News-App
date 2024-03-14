import "./HeadLineCategory.css";
import Header from "../Header/Header.jsx";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import linesLogo from "../../assets/LineNewsLogo.png";
import { Link } from "react-router-dom";
import DailyDigest from "../../assets/DailyDigest.png";
import BreakingNow from "../../assets/BreakingNow.png";
import WeeklyRoundup from "../../assets/WeeklyRoundup.png";
import MonthlyRecap from "../../assets/MonthlyRecap.png";
import VirulBuzz from "../../assets/VirulBuzz.png";
import NewTrends from "../../assets/NewTrends.png";
import RawUnfiltered from "../../assets/RawUnfiltered.png";
import PropTypes from 'prop-types';


const HeadLineCategory = ({ setCategory }) => {
  HeadLineCategory.propTypes = {
    setCategory: PropTypes.function,
  };

  return (
    <>
      <div className="singleline-category">
        <div className="singleline-categorybar">
          <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
            <RxHamburgerMenu style={{ fontSize: "5rem", fontWeight: "700", width: "5rem", height: "2rem", color: "black" }} />
          </button>

          <div className="offcanvas offcanvas-start" data-bs-backdrop="static" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
            <div className="offcanvas-header">
              <p className="offcanvas-title" id="staticBackdropLabel">Category</p>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div className="offcanvas-body">
              <div>HeadLine</div>
            </div>
          </div>
        </div>

        <div className="lines-logo">
          <Link to="/"><img src={linesLogo} alt="logo" /></Link>
          <p style={{ fontSize: "1.2rem", fontWeight: "600" }}>Taaza News</p>
        </div>

        <div className="singleline-search">
          <IoIosSearch />
        </div>
      </div>

      <Header />

      <div className="headline-category">
        <div className="row-box first" onClick={() => { setCategory("hlines01") }}>
          <img src={DailyDigest} alt="icon" />
          <p>Daily Digest: Top 5 Stories</p>
        </div>

        <div className="row-box" onClick={() => setCategory("hlines02")}>
          <img src={BreakingNow} alt="icon" />
          <p>Breaking Now: 7 Critical Updates</p>
        </div>

        <div className="row-box" onClick={() => setCategory("hlines03")} >
          <img src={WeeklyRoundup} alt="icon" />
          <p>Weekly Roundup: 15 Hilights</p>
        </div>

        <div className="row-box" onClick={() => setCategory("hlines04")}>
          <img src={MonthlyRecap} alt="icon" />
          <p>Monthly Recap: Top 30 News</p>
        </div>

        <div className="row-box" onClick={() => setCategory("hlines06")}>
          <img src={VirulBuzz} alt="icon" />
          <p>Viral Buzz: 7 Online Sensations</p>
        </div>

        <div className="row-box" onClick={() => setCategory("hlines07")}>
          <img src={NewTrends} alt="icon" />
          <p>New Trends: 10 Changing Norms</p>
        </div>

        <div className="row-box" onClick={() => setCategory("hlines08")}>
          <img src={RawUnfiltered} alt="icon" />
          <p>Row Unfiltered: 8 Unedited Lines</p>
        </div>
      </div>
    </>
  );
};

export default HeadLineCategory;
