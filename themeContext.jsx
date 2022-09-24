import React from "react";

const { Provider, Consumer } = React.createContext();
class ThemeContextProvider extends React.Component {
    state = {
        theme: "dark"
    };
    toggle = () => {
        this.setState(prevState => {
                return {
                    theme: prevState.theme === "dark" ? "light" : "dark"
                };
            }
        );
    };
    render() {
        return (
            <Provider 
                value={{
                    theme: this.state.theme,
                    toggle: this.toggle
                }}
                toggle={this.toggle}
            >
                {this.props.children}
            </Provider>
        );
    };
};
export { ThemeContextProvider, Consumer as ThemeContextConsumer }