import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect, createContext } from "react";
import SelectSido from "./components/SelectSido";

export const AirStateContext = createContext();

function App() {
  const [stations, setStations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://openapi.seoul.go.kr:8088/6578527a4e776c7335396a426a7771/json/RealtimeCityAir/1/30"
        );
        if (!response.ok) {
          throw new Error("네트워크 연결이 불안정합니다. 잠시 후 시도해주세요");
        }
        const result = await response.json();
        setStations(result.RealtimeCityAir.row || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <AirStateContext.Provider value={stations}>
      <Routes>
        <Route path="/" element={<SelectSido />} />
      </Routes>
    </AirStateContext.Provider>
  );
}

export default App;
