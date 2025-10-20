import "./AirInfoCard.css";

const AirInfoCard = ({ stations }) => {
  const cardColor = (PM10) => {
    if (PM10 <= 15) return "green";
    if (PM10 <= 25) return "yellow";
    if (PM10 <= 50) return "orange";
    return "red";
  };

  return (
    <div className="AirList">
      <div className="list_wrapper">
        {stations.map((item, index) => {
          if (item.PM10 === 0 || item.IDEX_MVL === 0) {
            return (
              <div key={index} className="AirInfoCard">
                <div>
                  {item.MSRSTE_NM} 지역 대기정보 측정결과가 없습니다. 나중에
                  다시 시도해주세요.
                </div>
              </div>
            );
          }
          return (
            <div key={index} className={`AirInfoCard ${cardColor(item.PM10)}`}>
              <div>지역: {item.MSRSTE_NM}</div>
              <div>미세먼지: {item.PM10}</div>
              <div>초미세먼지: {item.PM25}</div>
              <div>오존: {item.O3}</div>
              <div>통합대기지수: {item.IDEX_MVL}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AirInfoCard;
