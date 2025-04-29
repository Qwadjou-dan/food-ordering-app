import React from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

const OrderCard = ({ order, showFeedbackInput = false, onComplete }) => {
  return (
    <Card key={order.id} className="p-4 bg-green-100">
      <div className="mb-4">
        <h3 className="font-bold">Order #{order.id}</h3>
        <p className="text-sm text-gray-500">
          {showFeedbackInput
            ? `Placed on: ${new Date(order.date).toLocaleString()}`
            : `Completed on: ${new Date(order.date).toLocaleString()}`}
        </p>
      </div>

      <div className="space-y-2 mb-4">
        {Object.entries(order.items).map(([mealType, food]) => {
          if (!food) return null;
          return (
            <div key={mealType} className="border-b pb-2">
              <div className="flex justify-between">
                <h4 className="font-medium">{mealType}</h4>
                <span>{food}</span>
              </div>
              {order.comments[mealType] && (
                <p className="text-sm text-gray-500">
                  Note: {order.comments[mealType]}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {showFeedbackInput ? (
        <div>
          <label className="block mb-2 text-sm font-medium">Feedback</label>
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
              onComplete(order.id, feedbackEl.value);
            }}
          >
            Mark as Received
          </Button>
        </div>
      ) : (
        order.feedback && (
          <div className="mt-4 p-3 bg-gray-50 rounded">
            <h4 className="font-medium">Your Feedback:</h4>
            <p>{order.feedback}</p>
          </div>
        )
      )}
    </Card>
  );
};

export default OrderCard;
