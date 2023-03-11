import React from "react"

function Movie({ title, poster, desc }) {
	return (
		<div className="grid">
			<img
				className="rounded-lg"
				src={`https://image.tmdb.org/t/p/original${poster}`}></img>
			<h2 className="text-center text-lg font-semibold p-1">{title}</h2>
			{/* <p className="bg-gray-200 rounded-md p-2">{desc}</p> */}
		</div>
	)
}

export default Movie
