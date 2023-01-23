import Card from "../Card/Card";
// import { useSelector } from "react-redux";

export default function CardsContainer({pokemons}) {
  // const pokemons = useSelector((state) => state?.filteredPokemons);
  //el componente mira al estado global para poder acceder a la info
  return (
    <>
      {pokemons?.map((p) => {
        return (
          <Card
            key={p.id}
            name={p.name}
            img={p.img}
            attack={p.attack}
            defense={p.defense}
            health={p.health}
            height={p.height}
            weight={p.weight}
            type={p.type}
          />
        );
      })}
    </>
  );
}
