import React from "react";
import { Context } from "../../../context/Context";
import { useContext } from "react";
const DateDropDown = () => {
  
  const {state, dispatch} = useContext(Context);
  
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];


  const month = new Date().toLocaleString("en-US", {
    month: "short",
  });

  // const [defaultVal, setDefaultVal] = useState(nextDate(0));

  function nextDate(date) {
    const next_date = new Date().getDate() + date;
    // console.log(next_date);
    return next_date;
  }

  function nextDay(dayNum) {
    let day = new Date().getDay() + dayNum;

    // console.log(days[day]);
    return days[day];
  }

  return (
    <div className="h-[66px] w-[198.55px] bg-[#F4F6F8] flex items-center justify-center">
      <select
        className="bg-[#F4F6F8] font-[700] text-[16px] relative   h-[37.39px] "

        onChange={(e) => dispatch({type: 'flightDate', payload: e.target.value})}
        defaultValue={`${nextDay(0)}, ${nextDate(0)} ${month}`}
      >
        <option value={`${nextDay(-2)}, ${nextDate(-2)} ${month}`}>
          <p className="p-2">
            {nextDay(-2)}, {nextDate(-2)} {month}
          </p>
        </option>
        <option value={`${nextDay(-1)}, ${nextDate(-1)} ${month}`}>
          {nextDay(-1)}, {nextDate(-1)} {month}
        </option>
        <option value={`${nextDay(0)}, ${nextDate(0)} ${month}`}>
          {nextDay(0)}, {nextDate(0)} {month}
        </option>
        <option value={`${nextDay(1)}, ${nextDate(1)} ${month}`}>
          {nextDay(1)}, {nextDate(1)} {month}
        </option>
        <option value={`${nextDay(2)}, ${nextDate(2)} ${month}`}>
          {nextDay(2)}, {nextDate(2)} {month}
        </option>
      </select>
    </div>
  );
};

export default DateDropDown;
