import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import ContactLayout from "../layout/ContactLayout";
import AboutLayout from "../layout/AboutLayout";
import ServicesLayout from "../layout/ServicesLayout";
import { lazy } from "react";
import CareersLayout from "../layout/CareersLayout";
// import Team from "../pages/about/Team";


const HomeComp = lazy(()=> import("../pages/home/HomeComp"));
const Contact = lazy(()=> import("../pages/contact/Contact"));
const About = lazy(()=> import("../pages/about/About"));
const Services = lazy(()=> import("../pages/services/Servces"));
const Careers = lazy(()=> import("../pages/careers/Careers"));


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
            // {
            //     path: "team",
            //     element: <Team />
            // }
        ]
    },
    {
        path: "/services",
        element: <ServicesLayout />,
        children: [
            {
                index: true,
                element: <Services />
            }
        ]
    },
    {
        path: "/careers",
        element: <CareersLayout />,
        children: [
            {
                index: true,
                element: <Careers />
            }
        ]
    },
])