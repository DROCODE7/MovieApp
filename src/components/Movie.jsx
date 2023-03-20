import React from "react"

function Movie({ title, poster, vote_average, vote_count }) {
	return (
		<div className="hover:cursor-pointer">
			<img
				className="rounded-lg h-72"
				src={`https://image.tmdb.org/t/p/original${poster}`}></img>
			<h2 className="text-center text-md font-semibold p-1">{title}</h2>
			<div className="text-sm">
				<p className="">Średnia ocena: {vote_average}</p>
				<p className="">Ilość ocen: {vote_count}</p>
			</div>
		</div>
	)
}

export default Movie
