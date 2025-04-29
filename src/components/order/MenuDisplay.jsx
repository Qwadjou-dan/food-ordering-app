import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Textarea } from "../ui/textarea";
import FoodItem from "./FoodItem";

const MenuDisplay = ({
  currentDay,
  currentCaterer,
  currentMenu,
  cart,
  comments,
  addToCart,
  handleCommentChange,
  getFoodImage,
}) => {
  return (
    <Card className="md:col-span-3 bg-green-100">
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

          {["BREAKFAST", "LUNCH", "DINNER", "DESSERT"].map((mealType) => {
            // Skip dessert tab for Delicious Meals
            if (mealType === "DESSERT" && currentCaterer === "deliciousMeals") {
              return null;
            }

            return (
              <TabsContent key={mealType} value={mealType}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {currentMenu[currentDay][mealType]?.map((food, index) => (
                    <FoodItem
                      key={index}
                      food={food}
                      isSelected={cart[mealType] === food}
                      onSelect={() => addToCart(mealType, food)}
                      foodImage={getFoodImage(food)}
                    />
                  ))}
                </div>
                <div className="mt-4">
                  <label className="block mb-2 text-sm font-medium">
                    Comments/Special Instructions
                  </label>
                  <Textarea
                    className="bg-green-50 border-none"
                    placeholder="Add any special instructions..."
                    value={comments[mealType]}
                    onChange={(e) =>
                      handleCommentChange(mealType, e.target.value)
                    }
                  />
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default MenuDisplay;
