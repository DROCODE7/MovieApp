import "./styles/App.css"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

/** Pages */
import Home from "./pages/Home"

/** Components */
import Detail from "./components/Detail"
import Navbar from "./components/Navbar"

function App() {
	const Layout = () => {
		return (
			<>
				<Navbar />
				<Outlet />
			</>
		)
	}

	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				{
					path: "/",
					element: <Home />,
				},
				{
					path: "/:id",
					element: <Detail />,
				},
			],
		},
	])

	const queryClient = new QueryClient()

	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	)
}

export default App
