import "./styles/App.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Home from "./pages/Home"

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Home />,
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
