import "../stylesheets/footer.css";

/* eslint-disable jsx-a11y/alt-text */
export default function Footer(props) {
  return (
    <footer>
      <img
        className="footerLogo"
        src={require("../images/icons_assets/verticalLogo.png")}
      />

      <nav className="footerNav">
        <ul className="footerNavList list1">
          <p className="footerBold">Doormat Navigation</p>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/menu">Menu</a>
          </li>
          <li>
            <a href="/reservations">Reservations</a>
          </li>
          <li>
            <a href="/order-online">Order Online</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>

        <ul className="footerNavList list2">
          <p className="footerBold">Contact</p>
          <li>
            <a href="/address">Address</a>
          </li>
          <li>
            <a href="/number">Phone Number</a>
          </li>
          <li>
            <a href="/email">Email</a>
          </li>
        </ul>

        <ul className="footerNavList list3">
          <p className="footerBold">Social Media Links</p>
          <li>
            <a href="/address">Address</a>
          </li>
          <li>
            <a href="/number">Phone Number</a>
          </li>
          <li>
            <a href="/email">Email</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
