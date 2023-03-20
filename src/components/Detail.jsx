import { useParams } from "react-router"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export default function Detail() {
	const { id } = useParams()
	const { isLoading, error, data } = useQuery(["movie"], () =>
		axios
			.get(
				`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=pl-PL`
			)
			.then(res => {
				return res.data
			})
	)

	console.log(data)
	if (isLoading) return <p>Ładowanie</p>
	return (
		<div className="flex flex-col md:flex-row justify-center items-center space-x-5 mx-6 mt-6 md:mx-24 text-center">
			<img
				className="rounded-2xl h-60"
				src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
			/>
			<div className="flex flex-col text-teal-400 space-y-4">
				<h2 className="text-3xl">{data.title}</h2>
				<div className="flex md:flex-row items-center justify-evenly text-teal-200 space-x-8">
					<div className="flex space-x-2">
						<span class="material-symbols-outlined">attach_money</span>
						<p>{data.budget}</p>
					</div>

					<div className="flex space-x-2">
						<span class="material-symbols-outlined">calendar_month</span>
						<p>{data.release_date}</p>
					</div>

					<div className="flex space-x-2">
						<span class="material-symbols-outlined">schedule</span>
						<p>{data.runtime} min</p>
					</div>
				</div>

				<p className="bg-teal-900 p-3 rounded-xl text-left">
					<div className="flex space-x-3 text-green-500">
						<p>Gatunek: </p>
						{data.genres.map(data => (
							<p>🎬 {data.name}</p>
						))}
					</div>
					{data.overview}
				</p>
				<div className="flex md:flex-row items-center justify-evenly text-teal-200 space-x-8">
					<div className="flex space-x-2">
						<span class="material-symbols-outlined">visibility</span>
						<p>{data.popularity.toFixed(0)}</p>
					</div>

					<div className="flex space-x-2">
						<span class="material-symbols-outlined">calendar_month</span>
						<p>{data.vote_average.toFixed(2)}</p>
					</div>

					<div className="flex space-x-2">
						<span class="material-symbols-outlined">schedule</span>
						<p>{data.vote_count}</p>
					</div>
				</div>
			</div>
		</div>
	)
}
