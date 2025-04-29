import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { ScrollArea } from "../ui/scroll-area";
import OrderCard from "./OrderCard";

const CompletedOrders = ({ orders }) => {
  return (
    <Card className="bg-green-200">
      <CardHeader>
        <CardTitle>Completed Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px]">
          {orders.length === 0 ? (
            <p className="text-center p-4">No completed orders</p>
          ) : (
            <div className="space-y-4 bg-green-100">
              {orders.map((order) => (
                <OrderCard
                  key={order.id}
                  order={order}
                  showFeedbackInput={false}
                />
              ))}
            </div>
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default CompletedOrders;
