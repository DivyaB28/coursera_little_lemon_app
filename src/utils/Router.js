import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import MenuOptions from "../components/MenuOptions";

import Structure from "./Structure";
import About from "../components/About";
import BookingPage from "../components/Reservation";
import ConfirmReservation from "../components/ConfirmReservation";
import NotFound from "../components/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Structure />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/reservation",
        element: <BookingPage />,
      },
      {
        path: "/confirm-reservation",
        element: <ConfirmReservation />,
      },
      {
        path: "/orderonline",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <MenuOptions />,
      },
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
