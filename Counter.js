function Counter () {
    const [count, setCount] = React.useState(0);

    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            {
                onClick: () => setCount(count + 1)
            },
            "+ (Increase counter)"
        ),
        React.createElement(
            "button",
            {
                onClick: () => setCount(count - 1)
            },
            "- (Decrease counter)"
        ),
        React.createElement(
            "button",
            {
                onClick: () => setCount(0)
            },
            "Reset"
        ),
        React.createElement(
            "h2",
            null,
            count
        )
    );
}

const domRoot = document.querySelector("#root");
ReactDOM.createRoot(domRoot).render(React.createElement(Counter));