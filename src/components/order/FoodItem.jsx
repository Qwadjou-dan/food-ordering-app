import React from "react";
import { Card, CardContent } from "../ui/card";

const FoodItem = ({ food, isSelected, onSelect, foodImage }) => {
  return (
    <Card
      className={`cursor-pointer border-0 ${
        isSelected ? "border-2 border-blue-500" : ""
      }`}
      onClick={onSelect}
    >
      <img
        src={foodImage}
        alt={food}
        className="w-full h-40 object-cover rounded-t"
      />
      <CardContent className="p-4 bg-green-50">
        <h3 className="font-medium">{food}</h3>
      </CardContent>
    </Card>
  );
};

export default FoodItem;
