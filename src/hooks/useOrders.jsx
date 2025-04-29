import { useState } from "react";

const useOrders = (userId) => {
  const [orders, setOrders] = useState([]);
  const [completedOrders, setCompletedOrders] = useState([]);

  // Place order
  const placeOrder = (newOrder) => {
    setOrders([...orders, newOrder]);
    setViewMode("pending");
  };

  // Complete order
  const completeOrder = (orderId, feedback) => {
    const orderToComplete = orders.find((order) => order.id === orderId);
    if (!orderToComplete) return;

    const updatedOrder = {
      ...orderToComplete,
      status: "completed",
      feedback,
    };

    setCompletedOrders([...completedOrders, updatedOrder]);
    setOrders(orders.filter((order) => order.id !== orderId));
  };

  return {
    orders,
    completedOrders,
    placeOrder,
    completeOrder,
  };
};

export default useOrders;
