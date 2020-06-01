import React from "react";
import PropTypes from "prop-types";

// import Header from "~/components/Header";
import Navbar from '../../shared/Navbar';
import Sidebar from '../../shared/Sidebar';
import Footer from '../../shared/Footer';
import { Wrapper } from "./styles";

export default function DefaultLayout({ children }) {  
    return (
    <div className="container-scroller">
        <Navbar/>
        <div className="container-fluid page-body-wrapper">
        <Sidebar/>
        <div className="main-panel">
            <div className="content-wrapper">
            {children}
            </div>
            <Footer/>
        </div>
        </div>
    </div>
    );    
}

DefaultLayout.propTypes = {
    children: PropTypes.element.isRequired,
};
