import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Card, CardHeader, CardTitle } from "./components/ui/card";
import { Button } from "./components/ui/button";
import Login from "./components/auth/Login";
import OrderForm from "./components/order/OrderForm";
import PendingOrders from "./components/orders/PendingOrders";
import CompletedOrders from "./components/orders/CompletedOrders";
import Header from "./components/layout/Header";
import useOrders from "./hooks/useOrders";

const App = () => {
  const [userId, setUserId] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [viewMode, setViewMode] = useState("order"); // 'order', 'pending', 'completed'

  const { orders, completedOrders, placeOrder, completeOrder } =
    useOrders(userId);

  const handleLogin = (id) => {
    setUserId(id);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserId("");
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="container mx-auto p-4">
      <Header userId={userId} onLogout={handleLogout} />

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
          <OrderForm userId={userId} onOrderPlaced={placeOrder} />
        </TabsContent>

        <TabsContent value="pending">
          <PendingOrders
            orders={orders.filter((order) => order.userId === userId)}
            onCompleteOrder={completeOrder}
          />
        </TabsContent>

        <TabsContent value="completed">
          <CompletedOrders
            orders={completedOrders.filter((order) => order.userId === userId)}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default App;
