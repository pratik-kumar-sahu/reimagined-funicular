import React, { Component, createContext } from "react";

export const ThemeContext = createContext();

export class ThemeContextProvider extends Component {
  state = {
    isLight: true,
    light: { text: "#555", ui: "#ddd", bg: "#eee" },
    dark: { text: "#ddd", ui: "#333", bg: "#555" },
  };

  toggleTheme = () => {
    this.setState({ isLight: !this.state.isLight });
  };

  render() {
    return (
      // Provider will wrap up the components in which we want to use the state
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
