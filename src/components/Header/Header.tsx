import HeaderStyled from "./Styled";
import PinterestLogo from "../../assets/img/PinterestLogo.svg";
import Search from "../../assets/img/Search.svg";
import Bell from "../../assets/img/Bell.svg";
import Messages from "../../assets/img/Messages.svg";
import Dropdown from "../../assets/img/Dropdown.svg";
import DropdownHome from "../../assets/img/DropdownHome.svg";

function Header() {
  return (
    <HeaderStyled>
      <div className="header__center">
        <div className="header__navigation">
          <a
            href="#"
            className="header__logo">
            <img
              src={PinterestLogo}
              alt="Pinterest Logo"
              className="header__icon"
            />
          </a>
          <a
            href="#"
            className="header__link header__link--clicked header__link--initial">
            Home
          </a>
          <a
            href="#"
            className="header__link header__link--initial">
            Today
          </a>
          <a
            href="#"
            className="header__link header__link--initial">
            Create
            <img
              src={DropdownHome}
              alt="Home dropdown"
              className="header__home"
            />
          </a>
          <a
            href="#"
            className="header__link header__link--toggle">
            Home
            <img
              src={DropdownHome}
              alt="Home dropdown"
              className="header__home"
            />
          </a>
        </div>
        <div className="header__option">
          <div className="header__searchbar header__searchbar--toggle">
            <div className="header__label">
              <img
                src={Search}
                alt="Search label"
                className="header__search"
              />
            </div>
            <input
              type="text"
              className="header__input"
              placeholder="Search"
            />
          </div>
          <button
            type="button"
            className="header__shortcut header__shortcut--toggle">
            <img
              src={Search}
              alt=""
              className="header__shortcut__icon"
            />
          </button>
          <button
            type="button"
            className="header__shortcut">
            <img
              src={Bell}
              alt=""
              className="header__shortcut__icon"
            />
          </button>
          <button
            type="button"
            className="header__shortcut">
            <img
              src={Messages}
              alt=""
              className="header__shortcut__icon"
            />
          </button>
          <a
            href="#"
            className="header__profile">
            <div className="header__photo">{false}</div>
          </a>
          <button
            className="header__settings"
            type="button">
            <img
              src={Dropdown}
              alt="settings"
              className="header__dropdown"
            />
          </button>
        </div>
      </div>
    </HeaderStyled>
  );
}

export default Header;
