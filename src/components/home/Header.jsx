import Logo from "./images/logo.png";

// import styling
import "../../stylesheets/css/Header.css";

const Header = () => {
  return (
    <div>
      <div className="top">
        <img src={Logo} className="logo" alt="prn-logo" height="130" />
      </div>
    </div>
  );
};

export default Header;
