import React, { useContext } from "react";
import { Context } from "../../context/Context";

const FlightSearchPage = () => {
  const { state } = useContext(Context);

  return (
    <div>
      <p>{state?.firstDate}</p>
      <p>{state?.firstDateDay}</p>
      <p>{state?.secondDate}</p>
      <p>{state?.secondDateDay}</p>
      <p>{state?.departure}</p>
      <p>{state?.arrival}</p>
    </div>
  );
};

export default FlightSearchPage;
