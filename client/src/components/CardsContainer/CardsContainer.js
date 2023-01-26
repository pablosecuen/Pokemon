import Card from "../Card/Card";

export default function CardsContainer({ pokemons }) {
  return (
    <>
      {pokemons?.map((p) => {
        return (
          <Card
            key={p.id}
            id={p.id}
            name={p.name}
            img={p.img ? p.img : "https://via.placeholder.com/150"}
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
