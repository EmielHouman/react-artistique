const Option = ({ label, value, onValueChange }) => {
  return (
    <label>
      <span>{label}</span>
      <select value={value} onChange={(e) => onValueChange(e.target.value)}>
        <option value="square">Square</option>
        <option value="hexagon">Hexagon</option>
        <option value="octagon">Octagon</option>
      </select>
    </label>
  );
};

export default Option;