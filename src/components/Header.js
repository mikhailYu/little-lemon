import Nav from "./Nav";
import logo from "../images/icons_assets/Logo.svg";
import "../stylesheets/header.css";

export default function Header(props) {
  return (
    <header>
      <div className="headerLogoCont">
        <img src={logo} alt="logo" />
      </div>
      <Nav />
    </header>
  );
}
