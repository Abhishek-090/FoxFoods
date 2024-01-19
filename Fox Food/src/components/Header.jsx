import "./style.css";
function Header({ home, menu, contact, about, cart, url }) {
  return (
    <>
      <nav className="navbar">
        <img className="logo" src={url}></img>
        <ul>
          <li>{home}</li>
          <li>{menu}</li>
          <li>{contact}</li>
          <li>{about}</li>
          <li>{cart}</li>
        </ul>
      </nav>
    </>
  );
}
export default Header;
