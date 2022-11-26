import { Route, Routes } from "react-router-dom";
import HomePage from "./components/homepage/HomePage";
import "./App.css";
import FlightSearchPage from "./components/saad/flightsearchpage/FlightSearchPage";
import FlightStatusPage from "./components/lala/flightstatus/FlightStatusPage";
import SelectFlightPage from "./components/saad/flightsearchpage/SelectFlightPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/flightsearch" element={<FlightSearchPage />} />
      <Route path="/flightstatus" element={<FlightStatusPage />} />
      <Route path="/selectflight" element={<SelectFlightPage />} />
    </Routes>
  );
}

export default App;
