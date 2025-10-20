import { useState, useContext } from "react";
import { AirStateContext } from "../App";
import SelectStation from "./SelectStation";

const SelectSido = () => {
  const stations = useContext(AirStateContext);
  const [selectedRegion, setSelectedRegion] = useState("All");

  const regions = ["All", ...new Set(stations.map((item) => item.MSRSTE_NM))];

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
      <SelectStation selectedRegion={selectedRegion} />
    </div>
  );
};
export default SelectSido;
