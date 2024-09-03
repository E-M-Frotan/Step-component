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
const numbers = [1, 2, 3, 4, 5];
function App() {
  return (
    <div className="flex flex-col items-center justify-center gap-[2rem] mt-16">
      <h1>Hello React</h1>
      <div className="flex items-center justify-center gap-x-4 gap-y-8 flex-wrap">
        <Pizza pizzas={pizzaData} />
      </div>
    </div>
  );
}
function Pizza({ pizzas }) {
  return (
    <>
      {pizzas.map((pizza) => (
        <div className="">
          <img
            className="w-96 rounded-md inline-block mb-4"
            src={`./${pizza.photoName}`}
            alt={pizza.name}
          />
          <h2 className="text-red-500"> {pizza.name}</h2>
          <p>{pizza.ingredients}</p>
        </div>
      ))}
    </>
  );
}

export default App;
