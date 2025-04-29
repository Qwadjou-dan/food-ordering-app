import React from "react";
import { Card, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

const Header = ({ userId, onLogout }) => {
  return (
    <Card className="mb-4 bg-green-400">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Food Ordering System</CardTitle>
          <div className="flex items-center gap-2">
            <div className="text-sm font-medium">Staff ID: {userId}</div>
            <Button variant="outline" size="sm" onClick={onLogout}>
              Logout
            </Button>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default Header;
