import { Link } from "react-router-dom";
import Logo from "../images/devchallenges.svg";
import DropDown from "./DropDown";

export default function Header() {
  return (
    <header className="container px-4 mt-4 mx-auto flex justify-between items-center">
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
      <DropDown />
    </header>
  );
}
