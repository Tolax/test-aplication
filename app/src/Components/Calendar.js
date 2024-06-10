import React, { useState } from "react";
import Violations from "./Violations";
import Requests from "./Requests";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function ContainerComponent() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
      />
      <Violations selectedDate={selectedDate} />
      <Requests selectedDate={selectedDate} />
    </div>
  );
}