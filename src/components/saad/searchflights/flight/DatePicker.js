import React, { useContext, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import * as moment from "moment";
import DatePicker from "react-datepicker";
import { Context } from "../../../context/Context";
const DatePickerFunc = () => {
  const { state, dispatch } = useContext(Context);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const firstDate = startDate?.toString().slice(4, 10);
  const secondDate = endDate?.toString().slice(4, 10);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  useEffect(() => {
    dispatch({
      type: "firstSecondDate",
      firstDate: firstDate,
      secondDate: secondDate,
    });
  }, [secondDate]);

  const calcDays = moment(endDate).diff(startDate, "days");

  console.log(state?.firstDate, state?.secondDate);

  return (
    <DatePicker
      wrapperClassName="datePicker"
      // selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      selectsRange
      inline
      monthsShown={2}
    />
  );
};

export default DatePickerFunc;
