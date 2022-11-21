import { Route, Routes } from "react-router-dom";
import HomePage from "./components/homepage/HomePage";
import "./App.css";
import FlightSearchPage from "./components/saad/flightsearchpage/FlightSearchPage";
import FlightStatusPage from "./components/lala/flightstatus/FlightStatusPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/flightsearch" element={<FlightSearchPage />} />
      <Route path="/flightstatus" element={<FlightStatusPage />} />
      
    </Routes>
  );
}

export default App;
