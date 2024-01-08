import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="header">
        <Link to="/" className="header-link">Short-News</Link>
        <Link to="/MultiLineNews" className="header-link">Paragraph-News</Link>
        <Link to="/HeadLineNews" className="header-link">Top-Headlines</Link>
      </nav>
    </>
  );
};

export default Header;
