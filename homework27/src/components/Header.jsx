import Link from "./Link";
import ChangeThemeButton from "./ChangeThemeButton";

function Header() {
  return (
    <div className="header-container">
      <div className="logo">todo</div>
      <div className="nav">
        <Link children="Home" href="/" />
        <Link children="About me" href="/about-me" />
        <Link children="Contacts" href="/contacts" />
        <ChangeThemeButton />
      </div>
    </div>
  );
}

export default Header;
