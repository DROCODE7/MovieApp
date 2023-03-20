import React from "react"
import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import Movie from "./Movie"

function Movies() {
	const { isLoading, error, data } = useQuery(["movies"], () =>
		axios
			.get(
				`https://api.themoviedb.org/3/movie/popular?api_key=8e341bd2d7b18eef49d36961ca7eab1e&language=pl-PL`
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
