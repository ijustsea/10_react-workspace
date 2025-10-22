import "./AirList.css";
import AirInfoCard from "./AirInfoCard";

const AirList = ({ stations }) => {
  return (
    <div className="AirList">
      <div className="list_wrapper">
        {stations.map((item) => (
          <AirInfoCard key={item.index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default AirList;
