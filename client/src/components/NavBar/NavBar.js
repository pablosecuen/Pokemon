import { Bar, HomeAbout, DivNavBar, Extra, Gif } from "./styled-navbar";
import { Link } from "react-router-dom";
import { LogoPoke } from "./styled-navbar";
import image from "../../Assets/logoconbg-01.png";
import gif from "../../Assets/gif/icegif-784.gif";
import img from "../../Assets/gameboy.png";
import { Disclamer, LogoGba } from "../Seachbar/StyledSearchBar";

export default function NavBar() {
  return (
    <Bar>
      <DivNavBar>
        <LogoPoke src={image} />
        <Link to="/home" style={{ textDecoration: "none" }}>
          <HomeAbout>HOME</HomeAbout>
        </Link>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <HomeAbout>ABOUT US</HomeAbout>
        </Link>
        <Link to="/create" style={{ textDecoration: "none" }}>
          <HomeAbout>CREATE YOUR POKEMON</HomeAbout>
        </Link>
      </DivNavBar>
      <Disclamer>Click this gba for a sorprise</Disclamer>
      <Link to="/extra" style={{ textDecoration: "none" }}>
        <LogoGba src={img} />
      </Link>
      <Gif src={gif} />
    </Bar>
  );
}
