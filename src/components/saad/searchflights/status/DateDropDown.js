import React from "react";
const DateDropDown = () => {
  const month = new Date().toLocaleString("en-US", {
    month: "short",
  });

  // const [defaultVal, setDefaultVal] = useState(nextDate(0));

  function nextDate(day) {
    const next_date = new Date().getDate() + day;

    return next_date;
  }

  function nextDay(monthNumber) {
    let day = new Date();
    day.setDate(monthNumber - 2);

    return day.toLocaleString("en-US", {
      weekday: "long",
    });
  }

  console.log();

  return (
    <div className="h-[66px] w-[198.55px] bg-[#F4F6F8] flex items-center justify-center">
      <select
        className="bg-[#F4F6F8] font-[700] text-[16px] relative   h-[37.39px] "

        // onChange={(e) => setDefaultVal(e.target.value)}
      >
        <option value="Day-2">
          <p className="p-2">
            {nextDay(-2)}, {nextDate(-2)} {month}
          </p>
        </option>
        <option value="Day-1">
          {nextDay(-1)}, {nextDate(-1)} {month}
        </option>
        <option value="Day0" selected="selected">
          {nextDay(0)}, {nextDate(0)} {month}
        </option>
        <option value="Day+1">
          {nextDay(1)}, {nextDate(1)} {month}
        </option>
        <option value="Day+2">
          {nextDay(2)}, {nextDate(2)} {month}
        </option>
      </select>
    </div>
  );
};

export default DateDropDown;
