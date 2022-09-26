import React from "react"
import { UserContextConsumer } from "./userContext"

function Header() {
    return (
        <header>
            <UserContextConsumer>
                {({ username, changeUsername }) => (
                    <p>Welcome, {username}!</p>
                )}
            </UserContextConsumer>
        </header>
    )
}

export default Header
