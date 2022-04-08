import React, {Fragment, useState, useEffect} from "react";
import { Link } from "react-router-dom";

const initialMoviesState = [
    {id: 0, title: "Matrix", runtime: 190},
    {id: 1, title: "Terminator", runtime: 190},
    {id: 3, title: "Titans", runtime: 190}
];

const Movies = () => {


  // Declaración de una variable de estado que llamaremos "count"
  const [movies, setMovies] = useState(initialMoviesState);

   // De forma similar a componentDidMount y componentDidUpdate
   /*useEffect(() => {
    
    });*/


    return (
        <Fragment>
        <h2> choose a movie</h2>
        <ul>
            {movies.map((m) => (
            <li key={m.id}>
                <Link to={`/movies/${m.id}`}>{m.title}</Link>
            </li>
            ))}
        </ul>
        </Fragment>
    )
} 

export default Movies