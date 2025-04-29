import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../ui/card";
import { Button } from "../ui/button";

const OrderSummary = ({
  cart,
  comments,
  currentCaterer,
  onPlaceOrder,
  onRemoveItem,
}) => {
  return (
    <Card className="bg-green-200">
      <CardHeader>
        <CardTitle>Your Order</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {Object.entries(cart).map(([mealType, food]) => {
            // Skip dessert if using Delicious Meals
            if (mealType === "DESSERT" && currentCaterer === "deliciousMeals") {
              return null;
            }

            return (
              <div
                key={mealType}
                className="flex items-center justify-between p-4 border rounded bg-green-100"
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
                    onClick={() => onRemoveItem(mealType)}
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
          className="w-full bg-green-600"
          onClick={onPlaceOrder}
          disabled={!(cart.BREAKFAST || cart.LUNCH || cart.DINNER)}
        >
          Place Order
        </Button>
      </CardFooter>
    </Card>
  );
};

export default OrderSummary;
