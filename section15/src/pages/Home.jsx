import { useState, useContext } from "react";
import { AirStateContext } from "../App";
import AirList from "../components/AirList";

const Home = () => {
  const stations = useContext(AirStateContext);
  const [selectedRegion, setSelectedRegion] = useState("All");

  const regions = ["All", ...new Set(stations.map((item) => item.MSRSTE_NM))];

  const filteredData =
    selectedRegion === "All"
      ? stations
      : stations.filter((item) => item.MSRSTE_NM === selectedRegion);

  return (
    <div>
      <h2>서울시 자치구 별 실시간 대기환경 현황 </h2>
      자치구 선택 :&nbsp;&nbsp;
      <select
        id="region-select"
        value={selectedRegion}
        onChange={(e) => setSelectedRegion(e.target.value)}
      >
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
      <br />
      <br />
      <AirList stations={filteredData} />
    </div>
  );
};

export default Home;
