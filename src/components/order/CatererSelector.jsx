import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

const CatererSelector = ({
  currentCaterer,
  setCurrentCaterer,
  currentDay,
  setCurrentDay,
}) => {
  const days = [
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
    "SUNDAY",
  ];

  return (
    <Card className="md:col-span-1 bg-green-200">
      <CardHeader>
        <CardTitle>Select Options</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <label className="block mb-2 text-sm font-medium">Caterer</label>
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
            <label className="block mb-2 text-sm font-medium">Day</label>
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
  );
};

export default CatererSelector;
