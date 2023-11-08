import React, { useState, useEffect } from "react";
import { ArrowCircleUp } from "@mui/icons-material";
import '../styles/Scroll.css'

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollY = window.scrollY;

    if (scrollY > 1000) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`scroll-to-top-button ${visible ? "visible" : ""}`}>

      <ArrowCircleUp onClick={scrollToTop} sx={{height:60, width:60, color:'#4DB7FE', position:'absolute'}} />
    </div>
  );
}

export default ScrollToTopButton;