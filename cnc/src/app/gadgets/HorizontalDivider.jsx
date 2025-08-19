import './css/horizontal_divider.css';

const HorizontalDivider = ({ label }) => (
  <div className="divider-container">
    <div className="divider-line" />
    {label && <span className="divider-label">{label}</span>}
    <div className="divider-line" />
  </div>
);

export default HorizontalDivider;
