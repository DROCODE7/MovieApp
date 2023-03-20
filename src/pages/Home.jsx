import Movies from "../components/Movies"
import Navbar from "../components/Navbar"

function Home() {
	return (
		<div className=" text-teal-500">
			<Navbar />
			<h2 className="mx-6 text-teal-400 text-xl md:text-3xl md:mx-20 mb-4 font-semibold uppercase mt-20 border-b-2 border-primary py-3 tracking-wide">
				Popularne filmy
			</h2>
			<div className="grid grid-cols-fluid gap-10 mx-6 md:mx-20 text-center">
				<Movies />
			</div>
		</div>
	)
}

export default Home
