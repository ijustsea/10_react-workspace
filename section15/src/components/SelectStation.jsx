import { useContext } from "react";
import { AirStateContext } from "../App";
import AirInfoCard from "./AirInfoCard";

const SelectStation = ({ selectedRegion }) => {
  const stations = useContext(AirStateContext);
  const filteredStation =
    selectedRegion === "All"
      ? stations
      : stations.filter((item) => item.MSRSTE_NM === selectedRegion);
  return <AirInfoCard stations={filteredStation} />;
};
export default SelectStation;
