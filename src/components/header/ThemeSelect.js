import React from "react";
import { connect } from "react-redux";
import { getTheme, setLightMode, setDarkMode } from "../../actions/getTheme";
// SVG ICONS
import icons from "./svgIcons";

class ThemeSelect extends React.Component {
  componentDidMount() {
    this.props.getTheme();
  }

  renderIcons = (darkMode) => {
    if (darkMode) {
      return <button onClick={this.props.setLightMode}>{icons.sunIcon}</button>;
    }
    return <button onClick={this.props.setDarkMode}>{icons.moonIcon}</button>;
  };

  render() {
    return <div>{this.renderIcons(this.props.theme.darkMode)}</div>;
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return { theme: state.theme };
};

export default connect(mapStateToProps, {
  getTheme,
  setDarkMode,
  setLightMode,
})(ThemeSelect);
