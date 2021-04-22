import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export class Navbar extends Component {
  // After wrapping, calling ThemeContext here via React property contextType
  static contextType = ThemeContext;
  render() {
    console.log(this.context); // we can access state now using this.context
    const { isLight, light, dark } = this.context;
    const theme = isLight ? light : dark;
    return (
      <nav style={{ background: theme.ui, color: theme.text }}>
        <h1>Context App</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
