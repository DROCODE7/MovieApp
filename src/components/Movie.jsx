import { Link } from "react-router-dom"

function Movie({ title, poster, vote_average, vote_count, id }) {
	return (
		<Link to={`/${id}`}>
			<div className="flex flex-col hover:cursor-pointer border rounded-xl p-5 border-teal-200 mb-5">
				<img
					className="h-72 object-contain"
					src={`https://image.tmdb.org/t/p/original${poster}`}
					alt={title}
					loading="lazy"
				/>
				<h2 className="text-center text-md font-bold p-1">{title}</h2>
				<div className="text-sm">
					<p className="">Średnia ocena: {vote_average}</p>
					<p className="">Ilość ocen: {vote_count}</p>
				</div>
			</div>
		</Link>
	)
}

export default Movie
