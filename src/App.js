import { Route, Routes } from "react-router-dom";
import HomePage from "./components/homepage/HomePage";
import "./App.css";
import FlightSearchPage from "./components/saad/flightsearchpage/FlightSearchPage";
import FlightStatusPage from "./components/lala/flightstatus/FlightStatusPage";
import SelectFlightPage from "./components/saad/flightsearchpage/SelectFlightPage";
import SeatSelection from "./components/saad/seatselection/SeatSelection";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/flightsearch" element={<FlightSearchPage />} />
      <Route path="/flightstatus" element={<FlightStatusPage />} />
      <Route path="/selectflight" element={<SelectFlightPage />} />
      <Route path="/seatselection" element={<SeatSelection />} />
    </Routes>
  );
}

export default App;
