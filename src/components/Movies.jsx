import React from "react"
import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import Movie from "./Movie"

function Movies() {
	const { isLoading, error, data } = useQuery(["movies"], () =>
		axios
			.get(
				`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=pl-PL`
			)
			.then(res => {
				return res.data
			})
	)

	console.log(data)

	return (
		<>
			{error ? (
				<p>Wystąpił błąd...</p>
			) : isLoading ? (
				<p className="text-center animate-pulse text-sm">Ładowanie filmów...</p>
			) : (
				data.results.map((movie, index) => (
					<Movie
						key={index}
						id={movie.id}
						title={movie.title}
						poster={movie.poster_path}
						desc={movie.overview}
						vote_average={movie.vote_average}
						vote_count={movie.vote_count}
					/>
				))
			)}
		</>
	)
}

export default Movies
