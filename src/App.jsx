import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { ScrollArea } from "./components/ui/scroll-area";
import deliciousMealsMenu from "./data/deliciousMealMenu";
import localCuisineMenu from "./data/localCuisineMenu";
import foodImages from "./data/images/foodImages";

const FoodOrderingApp = () => {
  const [userId, setUserId] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
  const [currentDay, setCurrentDay] = useState("MONDAY");
  const [currentCaterer, setCurrentCaterer] = useState("deliciousMeals");
  const [orders, setOrders] = useState([]);
  const [completedOrders, setCompletedOrders] = useState([]);
  const [viewMode, setViewMode] = useState("order"); // 'order', 'pending', 'completed'

  const days = [
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
    "SUNDAY",
  ];

  // Handle login
  const handleLogin = () => {
    const id = parseInt(userId);
    if (id >= 1 && id <= 1000) {
      setIsLoggedIn(true);
      // Load any existing orders for this user
      // This would typically come from a database
    } else {
      alert("Please enter a valid ID between 1 and 1000");
    }
  };

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

    setOrders([...orders, newOrder]);

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
    setViewMode("pending");
  };

  // Complete order
  const completeOrder = (orderId, feedback) => {
    const orderToComplete = orders.find((order) => order.id === orderId);
    const updatedOrder = { ...orderToComplete, status: "completed", feedback };

    setCompletedOrders([...completedOrders, updatedOrder]);
    setOrders(orders.filter((order) => order.id !== orderId));
  };

  // Current menu based on selected caterer
  const currentMenu =
    currentCaterer === "deliciousMeals" ? deliciousMealsMenu : localCuisineMenu;

  if (!isLoggedIn) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-300">
        <Card className="w-full max-w-md bg-green-200 border-none">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Staff Login
            </CardTitle>
            <CardDescription className="text-center">
              Enter your Staff ID to continue
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Input
                type="number"
                placeholder="Enter ID (1-1000)"
                min="1"
                max="1000"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                className="w-full"
              />
              <Button onClick={handleLogin} className="w-full bg-green-400">
                Login
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-4 bg-green-400">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Food Ordering System</CardTitle>
            <div className="flex items-center gap-2">
              <div className="text-sm font-medium">Staff ID: {userId}</div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsLoggedIn(false)}
              >
                Logout
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      <Tabs defaultValue="order" value={viewMode} onValueChange={setViewMode}>
        <TabsList className="mb-4 bg-green-200">
          <TabsTrigger
            value="order"
            className="data-[state=active]:bg-green-500 data-[state=active]:text-white"
          >
            Order Food
          </TabsTrigger>
          <TabsTrigger
            value="pending"
            className="data-[state=active]:bg-green-500 data-[state=active]:text-white"
          >
            Pending Orders
          </TabsTrigger>
          <TabsTrigger
            value="completed"
            className="data-[state=active]:bg-green-500 data-[state=active]:text-white"
          >
            Completed Orders
          </TabsTrigger>
        </TabsList>

        <TabsContent value="order">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <Card className="md:col-span-1  bg-green-200">
              <CardHeader>
                <CardTitle>Select Options</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="block mb-2 text-sm font-medium">
                      Caterer
                    </label>
                    <select
                      value={currentCaterer}
                      onChange={(e) => setCurrentCaterer(e.target.value)}
                      className="w-full p-2 border rounded bg-green-100"
                    >
                      <option value="deliciousMeals">Delicious Meals</option>
                      <option value="localCuisine">Local Cuisine</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium">
                      Day
                    </label>
                    <select
                      value={currentDay}
                      onChange={(e) => setCurrentDay(e.target.value)}
                      className="w-full p-2 border rounded bg-green-100"
                    >
                      {days.map((day) => (
                        <option key={day} value={day}>
                          {day}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-3  bg-green-100">
              <CardHeader>
                <CardTitle>Menu for {currentDay}</CardTitle>
                <CardDescription>Select one item for each meal</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="BREAKFAST">
                  <TabsList className="mb-4">
                    <TabsTrigger
                      value="BREAKFAST"
                      className="data-[state=active]:bg-green-500 data-[state=active]:text-white"
                    >
                      Breakfast
                    </TabsTrigger>
                    <TabsTrigger
                      value="LUNCH"
                      className="data-[state=active]:bg-green-500 data-[state=active]:text-white"
                    >
                      Lunch
                    </TabsTrigger>
                    <TabsTrigger
                      value="DINNER"
                      className="data-[state=active]:bg-green-500 data-[state=active]:text-white"
                    >
                      Dinner
                    </TabsTrigger>
                    {currentCaterer === "localCuisine" && (
                      <TabsTrigger
                        value="DESSERT"
                        className="data-[state=active]:bg-green-500 data-[state=active]:text-white"
                      >
                        Dessert
                      </TabsTrigger>
                    )}
                  </TabsList>

                  {["BREAKFAST", "LUNCH", "DINNER", "DESSERT"].map(
                    (mealType) => {
                      // Skip dessert tab for Delicious Meals
                      if (
                        mealType === "DESSERT" &&
                        currentCaterer === "deliciousMeals"
                      ) {
                        return null;
                      }

                      return (
                        <TabsContent key={mealType} value={mealType}>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {currentMenu[currentDay][mealType]?.map(
                              (food, index) => (
                                <Card
                                  key={index}
                                  className={`cursor-pointer border-0 ${
                                    cart[mealType] === food
                                      ? "border-2 border-blue-500"
                                      : ""
                                  }`}
                                  onClick={() => addToCart(mealType, food)}
                                >
                                  <img
                                    src={getFoodImage(food)}
                                    alt={food}
                                    className="w-full h-40 object-cover rounded-t"
                                  />
                                  <CardContent className="p-4 bg-green-50">
                                    <h3 className="font-medium">{food}</h3>
                                  </CardContent>
                                </Card>
                              )
                            )}
                          </div>
                          <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium">
                              Comments/Special Instructions
                            </label>
                            <Textarea
                              className=" bg-green-50 border-none"
                              placeholder="Add any special instructions..."
                              value={comments[mealType]}
                              onChange={(e) =>
                                handleCommentChange(mealType, e.target.value)
                              }
                            />
                          </div>
                        </TabsContent>
                      );
                    }
                  )}
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-green-200">
            <CardHeader>
              <CardTitle>Your Order</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.entries(cart).map(([mealType, food]) => {
                  // Skip dessert if using Delicious Meals
                  if (
                    mealType === "DESSERT" &&
                    currentCaterer === "deliciousMeals"
                  ) {
                    return null;
                  }

                  return (
                    <div
                      key={mealType}
                      className="flex items-center justify-between p-4 border rounded  bg-green-100"
                    >
                      <div>
                        <h3 className="font-medium">{mealType}</h3>
                        <p>{food || "Nothing selected"}</p>
                        {comments[mealType] && (
                          <p className="text-sm text-gray-500">
                            Note: {comments[mealType]}
                          </p>
                        )}
                      </div>
                      {food && (
                        <Button
                          className="bg-red-500 text-white"
                          variant="outline"
                          size="sm"
                          onClick={() => addToCart(mealType, null)}
                        >
                          Remove
                        </Button>
                      )}
                    </div>
                  );
                })}
              </div>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full  bg-green-600"
                onClick={placeOrder}
                disabled={!(cart.BREAKFAST || cart.LUNCH || cart.DINNER)}
              >
                Place Order
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="pending">
          <Card className="bg-green-200">
            <CardHeader>
              <CardTitle>Pending Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px]">
                {orders.filter((order) => order.userId === userId).length ===
                0 ? (
                  <p className="text-center p-4">No pending orders</p>
                ) : (
                  <div className="space-y-4">
                    {orders
                      .filter((order) => order.userId === userId)
                      .map((order) => (
                        <Card key={order.id} className="p-4 bg-green-100">
                          <div className="mb-4">
                            <h3 className="font-bold">Order #{order.id}</h3>
                            <p className="text-sm text-gray-500">
                              Placed on: {new Date(order.date).toLocaleString()}
                            </p>
                          </div>

                          <div className="space-y-2 mb-4">
                            {Object.entries(order.items).map(
                              ([mealType, food]) => {
                                if (!food) return null;
                                return (
                                  <div key={mealType} className="border-b pb-2">
                                    <div className="flex justify-between">
                                      <h4 className="font-medium">
                                        {mealType}
                                      </h4>
                                      <span>{food}</span>
                                    </div>
                                    {order.comments[mealType] && (
                                      <p className="text-sm text-gray-500">
                                        Note: {order.comments[mealType]}
                                      </p>
                                    )}
                                  </div>
                                );
                              }
                            )}
                          </div>

                          <div>
                            <label className="block mb-2 text-sm font-medium">
                              Feedback
                            </label>
                            <Textarea
                              placeholder="Leave feedback about your meal..."
                              className="mb-2 bg-green-50"
                              id={`feedback-${order.id}`}
                            />
                            <Button
                              className="bg-green-600 text-white"
                              onClick={() => {
                                const feedbackEl = document.getElementById(
                                  `feedback-${order.id}`
                                );
                                completeOrder(order.id, feedbackEl.value);
                              }}
                            >
                              Mark as Received
                            </Button>
                          </div>
                        </Card>
                      ))}
                  </div>
                )}
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="completed">
          <Card className="bg-green-200">
            <CardHeader>
              <CardTitle>Completed Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px]">
                {completedOrders.filter((order) => order.userId === userId)
                  .length === 0 ? (
                  <p className="text-center p-4">No completed orders</p>
                ) : (
                  <div className="space-y-4  bg-green-100">
                    {completedOrders
                      .filter((order) => order.userId === userId)
                      .map((order) => (
                        <Card key={order.id} className="p-4">
                          <div className="mb-4">
                            <h3 className="font-bold">Order #{order.id}</h3>
                            <p className="text-sm text-gray-500">
                              Completed on:{" "}
                              {new Date(order.date).toLocaleString()}
                            </p>
                          </div>

                          <div className="space-y-2 mb-4">
                            {Object.entries(order.items).map(
                              ([mealType, food]) => {
                                if (!food) return null;
                                return (
                                  <div key={mealType} className="border-b pb-2">
                                    <div className="flex justify-between">
                                      <h4 className="font-medium">
                                        {mealType}
                                      </h4>
                                      <span>{food}</span>
                                    </div>
                                  </div>
                                );
                              }
                            )}
                          </div>

                          {order.feedback && (
                            <div className="mt-4 p-3 bg-gray-50 rounded">
                              <h4 className="font-medium">Your Feedback:</h4>
                              <p>{order.feedback}</p>
                            </div>
                          )}
                        </Card>
                      ))}
                  </div>
                )}
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FoodOrderingApp;
