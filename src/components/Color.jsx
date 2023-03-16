const Color = ({ label, value, onValueChange }) => {
    return (
      <label>
        <span>{label}</span>
        <input
          type="color"
          value={value}
          onChange={(e) => onValueChange(e.target.value)}
        />
      </label>
    );
  };
  
  export default Color;