import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Donation from "../pages/Donation/Donation";
import Statistics from "../pages/Statistics/Statistics";
import DonationDetails from "../pages/DonationDetails/DonationDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";



const createRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/donation",
                element: <Donation></Donation>
            },
            {
                path: 'statistics',
                element: <Statistics></Statistics>
            },
            {
                path: '/donationDetails/:id',
                element: <DonationDetails></DonationDetails>,
                loader: () => fetch('/fakeData.json')
            }
        ]
    }
])

export default createRouter;