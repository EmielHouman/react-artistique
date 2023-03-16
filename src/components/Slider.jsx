const Slider = ({ label, value, min, max, onValueChange }) => {
  return (
    <label>
      <div className="slider__label">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onValueChange(parseInt(e.target.value, 10))}
      />
    </label>
  );
};

export default Slider;
