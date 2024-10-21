import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];

function Header() {
    const style = {};
    return (
        <header className="header">
            <h1 style={style}>Fast React Pizza Co.</h1>
        </header>
    );
}

function Menu() {
    const pizzas = pizzaData;
    // const pizzas = [];
    const numPizzas = pizzas.length;

    return (
        <main className="menu">
            <h2>Our Menu</h2>
            {numPizzas > 0 && (
                <ul className="pizzas">
                    {pizzaData.map((pizza) => (
                        <Pizza pizzaObject={pizza} key={pizza.name} />
                    ))}
                </ul>
            )}
        </main>
    );
}

function Pizza(probs) {
    console.log(probs);
    return (
        <li className="pizza">
            <img
                src={probs.pizzaObject.photoName}
                alt={probs.pizzaObject.name}
            />
            <div>
                <h3>{probs.pizzaObject.name}</h3>
                <p>{probs.pizzaObject.ingredients}</p>
                <p>{probs.pizzaObject.price}</p>
            </div>
        </li>
    );
}

function Footer() {
    const hour = new Date().getHours();
    console.log(hour);
    const openHours = 8;
    const closeHours = 22;
    const isOpen = hour >= openHours && hour < closeHours;
    const currentTime = new Date().toLocaleTimeString();
    console.log(isOpen);
    return (
        <footer className="footer">
            {currentTime}. We're currently {isOpen ? "OPENED" : "CLOSED"}!
        </footer>
    );
}

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// React before 18
// ReactDOM.render(<App />, document.getElementById("root"));
