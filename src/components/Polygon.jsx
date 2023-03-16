const Polygon = ({ shape, shapeAmount, primaryColor, secondaryColor, opacity, outlines, multicolor }) => {

  const coordinates = {
    square: [[50, 0], [100, 50], [50, 100], [0, 50]],
    hexagon: [[50, 0], [92, 25], [92, 75], [50, 100], [8, 75], [8, 25]],
    octagon: [[50, 0], [86, 14], [100, 50], [86, 86], [50, 100], [14, 86], [0, 50], [14, 14]]
  };

  const createShapes = () => {
    const coordPoints = [];

    for (let i = 0; i <= shapeAmount; i++) {
      const width = (100 * i) / shapeAmount;
      const xOffset = (100 - width) / 2;
      const shapeCoords = coordinates[shape].map(([x, y]) => [x * (width / 100) + xOffset, y]);
      const shapeCoordPoints = shapeCoords.map(coord => coord.join(",")).join(" ");
      coordPoints.push(shapeCoordPoints);
    }
    return coordPoints;
  };

  const coordPoints = createShapes();

  return (
    <svg viewBox="0 0 100 100">
      <mask id="primaryMask">
        <rect x="0" y="0" width="50" height="100" fill="white"></rect>
        <rect x="50" y="0" width="50" height="100" fill="black"></rect>
      </mask>
      <mask id="secondaryMask">
        <rect x="50" y="0" width="50" height="100" fill="white"></rect>
        <rect x="0" y="0" width="50" height="100" fill="black"></rect>
      </mask>
      {coordPoints.map((shapeCoordPoints, i) => (
        <polygon key={i} points={shapeCoordPoints} fill={secondaryColor} fillOpacity={(opacity / i) + `%`} stroke="white" strokeOpacity={outlines ? 1 : 0} strokeWidth={.1} style={{ filter: `saturate(${i})` }} mask={multicolor ? `url(#secondaryMask)` : `url(#)`}></polygon>
      ))}
      {coordPoints.map((shapeCoordPoints, i) => (
        <polygon key={i} points={shapeCoordPoints} fill={primaryColor} fillOpacity={(opacity / i) + `%`} stroke="white" strokeOpacity={outlines ? 1 : 0} strokeWidth={.1} style={{ filter: `saturate(${i})` }} mask={multicolor ? `url(#primaryMask)` : `url(#)`}></polygon>
      ))}
    </svg>
  );
};

export default Polygon;
