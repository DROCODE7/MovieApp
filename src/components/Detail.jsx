import { useParams, useNavigate } from "react-router"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export default function Detail() {
	const navigate = useNavigate()
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

	return (
		<>
			{error ? (
				<p>Coś poszło nie tak...</p>
			) : isLoading ? (
				<p>Ładowanie...</p>
			) : (
				<div className="flex flex-col md:flex-row justify-center items-center space-x-5 mr-4 mt-6 md:mx-24 text-center">
					<button
						className="text-white rounded-md p-2 hover:bg-teal-500 duration-300 ease-in"
						onClick={() => navigate(-1)}>
						<span class="material-symbols-outlined">arrow_back</span>
					</button>
					<img
						className="rounded-2xl h-60"
						src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
						alt={`${data.title}`}
						loading="lazy"
					/>
					<div className="text-sm md:text-md flex flex-col text-teal-400 space-y-4 ">
						<h2 className="text-3xl p-2">{data.title}</h2>
						<div className="text-sm flex justify-evenly items-center flex-wrap">
							{data.genres.map((data, index) => (
								<div
									key={index}
									className="text-green-500 bg-teal-900 rounded-full p-2 mb-3 px-4 uppercase">
									{data.name}
								</div>
							))}
						</div>
						<div className="flex md:flex-row items-center justify-evenly text-teal-200 space-x-8">
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
							{data.overview.length == 0 ? (
								<p className="text-center">Brak opisu...</p>
							) : (
								data.overview
							)}
						</p>
						<div className="flex md:flex-row items-center justify-evenly text-teal-200 space-x-8">
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
			)}
		</>
	)
}
