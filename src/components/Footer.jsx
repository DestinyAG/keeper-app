import React from "react";

function Footer(){
    const currentYear = new Date().getFullYear();

    return <footer>copyrightÂ© {currentYear}</footer>
}

export default Footer;