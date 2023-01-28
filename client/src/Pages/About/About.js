import { Background, AboutUs, BgFilter, Hr } from "./styledAbout";

export default function About() {
  return (
    <Background>
      <BgFilter>Además</BgFilter>
      <AboutUs>
        <h3>
          <p>
            Hoy tengo la oportunidad de desarrollar mi primer proyecto
            individual: una página web de Pokémon creada desde cero. Esta página
            cuenta con varias secciones, como una landing page atractiva, una
            sección home donde se pueden ver los Pokémon rendereizados a través
            de una API, y una sección donde los usuarios pueden crear su propio
            Pokémon utilizando filtros dinámicos y combinados.
          </p>
          <Hr></Hr>
          <p>
            En cuanto a la metodología, utilicé CRUD (Create, Read, Update,
            Delete) para manejar la información de los Pokémon y garantizar una
            experiencia de usuario óptima. Además, utilicé tecnologías como
            HTML, CSS, JavaScript y React para desarrollar la página.
          </p>{" "}
          <Hr></Hr>
          <p>
            La seccion home, tiene renderizado de pokemons por api, acceso
            completo y detallado a sus propiedades en virtud de como recibimos
            la información desde los end point, la arquitectura fue diseñada
            para lograr una modularizacion optima y validaciones en base de
            datos, servidor y cliente, cuenta tambien con una ruta /extra con
            una pequeña sorpresa que espero despierte nostalgia en los usuarios
            de este sitio, en esta ruta podran se ejectua de manera integrada un
            emulador de Game Boy Advance y viene incluido el juego de Pokemon
            Kanto Ultimate, un pequeño juego de muuchas horas de duracion que
            por supuesto profundiza el ecosistema del sitio y genera un espacio
            donde la interaccion sea mucho mas prolongada de lo habitual,
            pensado espeficamente para tocar un espacio sensible en los
            usuarios.
          </p>
          <Hr></Hr>
          <p>
            Quiero agradecer a mis compañeros de bootcamp, con quienen comparto
            probablemente 12 a 15 horas dias en Discord y seguramente sin ellos
            esta etapa hubiera sido mas dificil, tambien a todos los profesores,
            el personal a cargo y al proceso educativo de Soy Henry por haberme
            dado las herramientas necesarias para llevar a cabo este proyecto.
            Sin su apoyo y enseñanzas, no habría podido lograrlo. Estoy muy
            orgulloso de lo que he logrado y espero poder seguir aprendiendo y
            creciendo en el futuro.
          </p>
        </h3>
        <Hr></Hr>
        <Hr></Hr>
        <h2>
          Mi nomre es Pablo J. Amico, les deseo una experiencia de usuario
          placentera.
        </h2>
      </AboutUs>
    </Background>
  );
}
