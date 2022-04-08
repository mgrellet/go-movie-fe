
import React, {useState} from "react";

const initialMovieState = { id: 0, title: "Matrix", runtime: 190 }

const Movie = () => {
    const [movie, setMovie] = useState(initialMovieState);


    return (
        <div>
            <h2>A movie: {movie.title}</h2>
            <table className="table table-compact table-striped"></table>
            <thead></thead>
            <tbody>
                <tr>
                    <td><strong>Title: </strong></td>
                    <td>{movie.title}</td>
                </tr>
                <tr>
                    <td><strong>Run time: </strong></td>
                    <td>{movie.runtime}</td>
                </tr>
            </tbody>
        </div>
    )
}

export default Movie;