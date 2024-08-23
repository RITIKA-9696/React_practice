import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";

function App() {
  // let foodItems = [];
  let foodItems = ["Dal", "Green Vegetables", "Salad", "Milk", "Roti"];

  // if (foodItems.length === 0) {
  //   return <h3>I am still Hungry.</h3>;
  // }
  return (
    // <React.Fragment>
    <>
      <h1 className="food-heading">Healthy Food</h1>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItems items={foodItems}></FoodItems>
    </>

    /* </React.Fragment> */
  );
}

export default App;
