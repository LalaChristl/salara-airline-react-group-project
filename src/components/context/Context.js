import { createContext, useReducer } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const initialState = {
    flightTab: true,
    checkinTab: false,
    statusTab: false,
    firstDate: "",
    secondDate: "",
    firstDateDay: "",
    secondDateDay: "",
    startDate: "",
    endDate: "",
    departure: "",
    arrival: "",
    radio: "One way",
    itinerary: { id1: false },
    economy: { id1: false },
    business: { id1: false },
    itineraryCard: {},
    flightNumber: "",
    flightDate: "",
    selectedflightobject: {},
    selectedPrice: "",
    selectedType: "",
    selectedClass: "",

    seatNumber: "",
    seatNumberDisplay: "",
    seatType: "",
    seatPrice: "",
    seatPriceDisplay: "0",
    passengerFirstName: "",
    passengerLastName: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "flight":
        console.log("flight", state);
        return {
          ...state,
          flightTab: true,
          checkinTab: false,
          statusTab: false,
        };
      case "checkIn":
        return {
          ...state,
          flightTab: false,
          checkinTab: true,
          statusTab: false,
        };
      case "status":
        return {
          ...state,
          flightTab: false,
          checkinTab: false,
          statusTab: true,
        };

      case "firstSecondDate":
        return {
          ...state,
          firstDate: action.firstDate,
          secondDate: action.secondDate,
          firstDateDay: action.firstDateDay,
          secondDateDay: action.secondDateDay,
          startDate: action.startDate,
          endDate: action.endDate,
        };

      case "selectedflightobject":
        return {
          ...state,
          selectedflightobject: action.payload,
        };
      case "selectedClassPrice":
        return {
          ...state,

          selectedPrice: action.selectedPrice,
          selectedType: action.selectedType,
          selectedClass: action.selectedClass,
        };

      case "seatNumber":
        return {
          ...state,
          seatNumber: action.seatNumber,
          seatPrice: action.seatPrice,
          seatType: action.seatType,
        };
      case "seatNumberDisplay":
        return {
          ...state,
          seatNumberDisplay: action.seatNumber,
          seatPriceDisplay: action.seatPrice,
        };

      case "firstLastName":
        console.log(action.firstName, action.lastName);
        return {
          ...state,
          passengerFirstName: action.firstName,
          passengerLastName: action.lastName,
        };
      case "departure":
        return { ...state, departure: action.payload };
      case "arrival":
        return { ...state, arrival: action.payload };

      case "radio":
        return {
          ...state,
          radio: action.payload,
          firstDate: "",
          secondDate: "",
        };
      case "itinerary":
        return {
          ...state,
          itinerary: { ...state, id1: !state.itinerary.id1 },
          itineraryCard: action.payload,
          business: { ...state, id1: false },
          economy: { ...state, id1: false },
        };

      case "economy":
        // console.log(action.payload);
        return {
          ...state,
          selectedflightobject: action.payload,
          economy: { ...state, id1: !state.economy.id1 },
          business: { ...state, id1: false },
          itinerary: { ...state, id1: false },
        };

      case "business":
        return {
          ...state,
          selectedflightobject: action.payload,
          business: { ...state, id1: !state.business.id1 },
          economy: { ...state, id1: false },
          itinerary: { ...state, id1: false },
        };
      case "flightNumber":
        return {
          ...state,
          flightNumber: action.flightNumber,
        };
      case "flightDate":
        return {
          ...state,
          flightDate: action.payload,
        };

      default:
        return;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default ContextProvider;
