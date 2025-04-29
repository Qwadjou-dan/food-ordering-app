import React, { useState } from "react";
import CatererSelector from "./CatererSelector";
import MenuDisplay from "./MenuDisplay";
import OrderSummary from "./OrderSummary";
import deliciousMealsMenu from "../../data/deliciousMealMenu";
import localCuisineMenu from "../../data/localCuisineMenu";
import foodImages from "../../data/images/foodImages";

const OrderForm = ({ userId, onOrderPlaced }) => {
  const [currentDay, setCurrentDay] = useState("MONDAY");
  const [currentCaterer, setCurrentCaterer] = useState("deliciousMeals");
  const [cart, setCart] = useState({
    BREAKFAST: null,
    LUNCH: null,
    DINNER: null,
    DESSERT: null,
  });
  const [comments, setComments] = useState({
    BREAKFAST: "",
    LUNCH: "",
    DINNER: "",
    DESSERT: "",
  });

  // Get image for food item
  const getFoodImage = (foodItem) => {
    return foodImages[foodItem] || foodImages.default;
  };

  // Add item to cart
  const addToCart = (mealType, foodItem) => {
    setCart({
      ...cart,
      [mealType]: foodItem,
    });
  };

  // Handle comment change
  const handleCommentChange = (mealType, comment) => {
    setComments({
      ...comments,
      [mealType]: comment,
    });
  };

  // Place order
  const placeOrder = () => {
    const newOrder = {
      id: Date.now(),
      userId: userId,
      items: { ...cart },
      comments: { ...comments },
      date: new Date().toISOString(),
      status: "pending",
      feedback: "",
    };

    onOrderPlaced(newOrder);

    // Reset cart and comments
    setCart({
      BREAKFAST: null,
      LUNCH: null,
      DINNER: null,
      DESSERT: null,
    });

    setComments({
      BREAKFAST: "",
      LUNCH: "",
      DINNER: "",
      DESSERT: "",
    });

    alert("Order placed successfully!");
  };

  // Current menu based on selected caterer
  const currentMenu =
    currentCaterer === "deliciousMeals" ? deliciousMealsMenu : localCuisineMenu;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <CatererSelector
          currentCaterer={currentCaterer}
          setCurrentCaterer={setCurrentCaterer}
          currentDay={currentDay}
          setCurrentDay={setCurrentDay}
        />

        <MenuDisplay
          currentDay={currentDay}
          currentCaterer={currentCaterer}
          currentMenu={currentMenu}
          cart={cart}
          comments={comments}
          addToCart={addToCart}
          handleCommentChange={handleCommentChange}
          getFoodImage={getFoodImage}
        />
      </div>

      <OrderSummary
        cart={cart}
        comments={comments}
        currentCaterer={currentCaterer}
        onPlaceOrder={placeOrder}
        onRemoveItem={(mealType) => addToCart(mealType, null)}
      />
    </div>
  );
};

export default OrderForm;
