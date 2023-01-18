import { Bar, HomeAbout, Li } from "./styled-navbar";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Bar>
        <Link to="/home">
          <HomeAbout>HOME</HomeAbout>
        </Link>
        <Link to="/about">
          <HomeAbout>ABOUT US</HomeAbout>
        </Link>
        <Link to="/detail">
          <HomeAbout>DETAIL</HomeAbout>
        </Link>
        <Link to="/create">
          <HomeAbout>CREATE YOUR POKEMON</HomeAbout>
        </Link>
    </Bar>
  );
}
