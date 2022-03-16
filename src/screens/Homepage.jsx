import React, { useEffect } from "react";
// Sections
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Blog from "../components/Sections/Blog";
import Projects from "../components/Sections/Projects";
import Contact from "../components/Sections/Contact";
import TopNavbar from "../components/Nav/TopNavbar";
import Footer from "../components/Sections/Footer";
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, getSliderProducts } from '../actions/productAction';
import { useSnackbar } from 'notistack';
import { Helmet } from "react-helmet";
import ProductSlider from '../components/Sections/ProductSlider/ProductSlider';

export default function App() {
    return (
        <>
            <TopNavbar />
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
            </Helmet>
            <Header />
            <Services />
            <Projects />
            <Blog />
            <Contact />
            <Footer />
            {/* {!loading && <ProductSlider title={"Suggested for You"} tagline={"Based on Your Activity"} />} */}
        </>
    );
}

