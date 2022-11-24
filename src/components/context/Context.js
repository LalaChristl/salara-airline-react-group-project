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
    itinerary: { id1: false, id2: false, id3: false },
    itineraryCard: {},
    flightNumber: '',
    flightDate: '',
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
        console.log(action.id);
        return {
          ...state,
          itinerary: { ...state, id1: !state.itinerary.id1 },
          itineraryCard: action.payload,
        };
        case "flightNumber":
          return {
            ...state,
            flightNumber: action.flightNumber,
          }
          case "flightDate":
          return {
            ...state,
            flightDate: action.payload,
          }


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
