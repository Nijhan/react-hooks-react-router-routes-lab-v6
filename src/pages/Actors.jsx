// src/pages/Actors.js
function Actors() {
  const actors = [
    {
      name: "Tom Cruise",
      movies: ["Mission Impossible", "Top Gun", "Rain Man"],
    },
    {
      name: "Angelina Jolie",
      movies: ["Salt", "Maleficent", "Mr. & Mrs. Smith"],
    },
    {
      name: "Will Smith",
      movies: ["Men in Black", "I Am Legend", "The Pursuit of Happyness"],
    },
  ];

  return (
    <>
      <h1>Actors Page</h1>
      {actors.map((actor, i) => (
        <article key={i}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie, j) => (
              <li key={j}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </>
  );
}

export default Actors;
