import { createBrowserRouter } from "react-router-dom";
import BookFerry from "../pages/BookFerry/BookFerry";
import FerryBooking from "../pages/FerryBooking/FerryBooking";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <BookFerry />,
	},
	{
		path: "/online",
		element: <FerryBooking />,
	},
]);
