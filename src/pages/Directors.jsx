// src/pages/Directors.js
function Directors() {
  const directors = [
    {
      name: "Scott Derrickson",
      movies: ["Doctor Strange", "Sinister", "The Exorcism of Emily Rose"],
    },
    {
      name: "Mike Mitchell",
      movies: ["Trolls", "Alvin and the Chipmunks: Chipwrecked", "Sky High"],
    },
    {
      name: "Edward Zwick",
      movies: ["Jack Reacher: Never Go Back", "Blood Diamond", "The Siege"],
    },
  ];

  return (
    <>
      <h1>Directors Page</h1>
      {directors.map((director, i) => (
        <article key={i}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((movie, j) => (
              <li key={j}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </>
  );
}

export default Directors;
