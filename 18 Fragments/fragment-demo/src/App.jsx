import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  // let foodItems = [];

  let [foodItems, setFoodItems] = useState([
    "Dal",
    "Green Vegetables",
    "Salad",
  ]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
      console.log("Food value entered is " + newFoodItem);
    }
  };

  // if (foodItems.length === 0) {
  //   return <h3>I am still Hungry.</h3>;
  // }
  return (
    // <React.Fragment>

    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <FoodItems items={foodItems}></FoodItems>
      </Container>

      {/* <Container>
        <p>
          Above is the list of Healthy Food that are good for your Health and
          well being.
        </p>
      </Container> */}
    </>

    /* </React.Fragment> */
  );
}

export default App;
