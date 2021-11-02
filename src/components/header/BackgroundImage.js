import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
// ACTION CREATORS
import { getTheme } from "../../actions/getTheme";
// IMAGES
import bgMobileDark from "../../images/bg-mobile-dark.jpg";
import bgDesktopDark from "../../images/bg-desktop-dark.jpg";
import bgMobileLight from "../../images/bg-mobile-light.jpg";
import bgDesktopLight from "../../images/bg-desktop-light.jpg";

function BackgroundImage({ theme }) {
  const images = {
    desktop: {
      dark: bgDesktopDark,
      light: bgDesktopLight,
    },
    mobile: {
      dark: bgMobileDark,
      light: bgMobileLight,
    },
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
  }, [windowWidth]);

  const renderBackgroundImageSize = () => {
    return window.innerWidth > 500
      ? renderImageType(images.desktop)
      : renderImageType(images.mobile);
  };

  const renderImageType = (size) => {
    if (!theme.darkMode) {
      return size.light;
    }
    return size.dark;
  };

  return (
    <div>
      <img
        className="mx-auto absolute w-full min-w-50"
        src={renderBackgroundImageSize()}
        alt="background of NY stock exchange"
        style={{ zIndex: -1000 }}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    theme: state.theme,
  };
};

export default connect(mapStateToProps, { getTheme })(BackgroundImage);
