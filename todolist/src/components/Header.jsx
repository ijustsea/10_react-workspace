import "./Header.css";

const Header = ({ title, leftChild, rightChild, isToday }) => {
  return (
    <>
      <div className="project_name">QUEST</div>
      <header className="Header">
        <div className="header_left">{leftChild}</div>
        <div className={`header_center ${isToday ? "blink" : ""}`}>{title}</div>
        <div className="header_right">{rightChild}</div>
      </header>
    </>
  );
};

export default Header;
