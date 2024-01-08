import "./SingleLineCategory.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import linesLogo from "../../assets/LineNewsLogo.png";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const SingleLineCategory = ({ setCategory }) => {
  SingleLineCategory.propTypes = {
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
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
            </div>

            <div className="offcanvas-body">
              <Link to="/SingleLinecategoryNews" className="category-link"><div className="offcanvas-body-item" data-bs-dismiss="offcanvas" onClick={() => setCategory("GENERAL")}>General</div></Link>
              <Link to="/SingleLinecategoryNews" className="category-link"><div className="offcanvas-body-item" data-bs-dismiss="offcanvas" onClick={() => setCategory("NATIONAL")}>National</div></Link>
              <Link to="/SingleLinecategoryNews" className="category-link"><div className="offcanvas-body-item" data-bs-dismiss="offcanvas" onClick={() => setCategory("INTERNATIONAL")}>International</div></Link>
              <Link to="/SingleLinecategoryNews" className="category-link"><div className="offcanvas-body-item" data-bs-dismiss="offcanvas" onClick={() => setCategory("SPORTS")}>Sports</div></Link>
              <Link to="/SingleLinecategoryNews" className="category-link"><div className="offcanvas-body-item" data-bs-dismiss="offcanvas" onClick={() => setCategory("TECHNOLOGY")}>Technology</div></Link>
              <Link to="/SingleLinecategoryNews" className="category-link"><div className="offcanvas-body-item" data-bs-dismiss="offcanvas" onClick={() => setCategory("BUSINESS")}>Business</div></Link>
              <Link to="/SingleLinecategoryNews" className="category-link"><div className="offcanvas-body-item" data-bs-dismiss="offcanvas" onClick={() => setCategory("HEALTH")}>Health</div></Link>
              <Link to="/SingleLinecategoryNews" className="category-link"><div className="offcanvas-body-item" data-bs-dismiss="offcanvas" onClick={() => setCategory("EDUCATION")}>Education</div></Link>
              <Link to="/SingleLinecategoryNews" className="category-link"><div className="offcanvas-body-item" data-bs-dismiss="offcanvas" onClick={() => setCategory("ENTERTAINMENT")}>Enertainment</div></Link>
              <Link to="/SingleLinecategoryNews" className="category-link"><div className="offcanvas-body-item" data-bs-dismiss="offcanvas" onClick={() => setCategory("POLITICS")}>Politics</div></Link>
              <Link to="/SingleLinecategoryNews" className="category-link"><div className="offcanvas-body-item" data-bs-dismiss="offcanvas" onClick={() => setCategory("CRIME")}>Crime</div></Link>
              <Link to="/SingleLinecategoryNews" className="category-link"><div className="offcanvas-body-item" data-bs-dismiss="offcanvas" onClick={() => setCategory("OTHERS")}>Others</div></Link>
            </div>
          </div>
        </div>

        <div className="lines-logo">
          <Link to="/"><img src={linesLogo} alt="logo" /></Link>
          <p style={{ fontSize: "1rem", fontWeight: "600" }}>Taaza News</p>
        </div>

        <div className="singleline-search">
          <IoIosSearch />
        </div>
      </div>
    </>
  );
};

export default SingleLineCategory;
