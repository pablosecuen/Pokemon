import { Bar, HomeAbout, DivNavBar } from "./styled-navbar";
import { Link } from "react-router-dom";
import { LogoPoke } from "./styled-navbar";
export default function NavBar() {
  return (
    <Bar>
      <DivNavBar>
        <LogoPoke />
        <Link to="/home">
          <HomeAbout>HOME</HomeAbout>
        </Link>
        <Link to="/about">
          <HomeAbout>ABOUT US</HomeAbout>
        </Link>
        <Link to="/create">
          <HomeAbout>CREATE YOUR POKEMON</HomeAbout>
        </Link>
      </DivNavBar>
    </Bar>
  );
}
