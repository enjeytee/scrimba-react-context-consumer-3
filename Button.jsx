import React from "react";
import { ThemeContextConsumer } from "./themeContext.jsx";

const Button = (props) => {
    return (
        <ThemeContextConsumer>
            {({theme, toggle}) => (
                <button 
                    className={`${theme}-theme`}
                    onClick={toggle}
                >
                    Switch Theme
                </button>
            )}
        </ThemeContextConsumer>
    );
};
export default Button;