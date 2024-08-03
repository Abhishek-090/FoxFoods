import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <nav className="navbar">
        <img className="logo" src="src/images/fox-logo1.png" />
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </nav>
    </>
  );
}
export default Header;
