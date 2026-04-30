import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import HomeComp from "../pages/home/HomeComp";
import ContactLayout from "../layout/ContactLayout";
import Contact from "../pages/contact/Contact";
import AboutLayout from "../layout/AboutLayout";
import About from "../pages/about/About";
import Team from "../pages/about/Team";



export const element = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <HomeComp />
            }
        ]
    },
    {
        path: "/contact",
        element: <ContactLayout />,
        children: [
            {
                index: true,
                element: <Contact />
            }
        ]
    },
    {
        path: "/about",
        element: <AboutLayout />,
        children: [
            {
                index: true,
                element: <About />
            },
            {
                path: "team",
                element: <Team />
            }
        ]
    },
])