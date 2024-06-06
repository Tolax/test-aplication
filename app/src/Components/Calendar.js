import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Calendar() {
    const [selectedDate, setSelectedDate] = useState(null);
    useEffect(()=>{console.log(selectedDate);},[selectedDate])
    return (
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy" // Формат отображения даты
      />
    );
  }
  
export default Calendar;