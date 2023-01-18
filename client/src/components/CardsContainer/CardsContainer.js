import Card from "../Card/Card";
import { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../Redux/Actions/Actions";


const CardsContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  const pokemons = useSelector((state) => state?.pokemons);
  return (
    <>
      {pokemons?.map((p) => {
        console.log(pokemons);
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
};

const mapStateToProps = (state) => {
  return {
    pokemons: state.Pokemons,
  };
};

export default connect(mapStateToProps, { getPokemons })(CardsContainer);
