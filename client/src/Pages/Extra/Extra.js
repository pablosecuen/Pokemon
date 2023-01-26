
import guia from "../../Assets/game/guia.png";
import { GameContainer, Guia } from "./styledExtra";

export default function Extra() {
  return (
    <GameContainer>
      <iframe
        title="gbajs"
        src="./gbajs/index.html"
        width="1800px"
        height="900px"
      />
      <div>
        <Guia src={guia} />
      </div>
    </GameContainer>
  );
}
