import { render, screen } from "@testing-library/react"
import Home from "./pages/home"
import { Provider } from "react-redux"
import store from "./app/store"
import { Card } from "./components"

test("renders the template page", () => {
    render(
        <Provider store={store}>
            {" "}
            <Home />{" "}
        </Provider>
    )
    const linkElement = screen.getByText(/All Templates/i)
    expect(linkElement).toBeInTheDocument()
})

test("it renders the card components", () => {
    render(
        <Card
            title="New Test"
            subtext="this is a card component"
            footerText="Use Template "
            link="/"
        />
    )
    const UseTemplateElement = screen.getByText(/Use Template/i)
    expect(UseTemplateElement).toBeInTheDocument()
})
