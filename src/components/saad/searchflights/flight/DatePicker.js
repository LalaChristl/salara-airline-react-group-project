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
    // const start = dates;
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  const onChangeSingle = (dates) => {
    const start = dates;
    // const [start, end] = dates;
    setStartDate(start);
    // setEndDate(end);
  };

  console.log(state.firstDate, state.secondDate);

  useEffect(() => {
    dispatch({
      type: "firstSecondDate",
      firstDate: firstDate,
      secondDate: secondDate,
    });
  }, [firstDate, secondDate, dispatch]);

  const calcDays = moment(endDate).diff(startDate, "days");

  // const days = state?.radio === "One way" ? 1 : 2;

  return (
    <div>
      {state?.radio === "One way" ? (
        <DatePicker
          wrapperClassName="datePicker"
          onChange={onChangeSingle}
          startDate={startDate}
          selectsStart
          inline
        />
      ) : (
        <DatePicker
          wrapperClassName="datePicker"
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          inline
          monthsShown={2}
        />
      )}
    </div>
  );
};

export default DatePickerFunc;
