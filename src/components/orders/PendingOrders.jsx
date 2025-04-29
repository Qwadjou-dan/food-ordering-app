import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { ScrollArea } from "../ui/scroll-area";
import OrderCard from "./OrderCard";

const PendingOrders = ({ orders, onCompleteOrder }) => {
  return (
    <Card className="bg-green-200">
      <CardHeader>
        <CardTitle>Pending Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px]">
          {orders.length === 0 ? (
            <p className="text-center p-4">No pending orders</p>
          ) : (
            <div className="space-y-4">
              {orders.map((order) => (
                <OrderCard
                  key={order.id}
                  order={order}
                  showFeedbackInput={true}
                  onComplete={onCompleteOrder}
                />
              ))}
            </div>
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default PendingOrders;
